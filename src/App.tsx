import { Refresh } from '@mui/icons-material';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Movies } from './features/movies/Movies';
import { fetchMoviesFromYear, fetchMoviesTopTen, filterByYear, setHasFilter } from './features/movies/moviesSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const filteringByYear = useAppSelector(state => state.movies.yearFilter);
  const hasFilter = useAppSelector(state => state.movies.hasFilter);
  const [anchorEl, setAnchorEl] = useState(null);
  const years = Array.from(Array(17).keys())
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };  
  const handleClose = (year: any) => {
    if (year) {
      dispatch(fetchMoviesFromYear(year));
      dispatch(filterByYear(year));
      dispatch(setHasFilter(true));
    }
    setAnchorEl(null);
  };

  const handleTopTen = () => {
    dispatch(fetchMoviesTopTen());
    dispatch(setHasFilter(true));
    dispatch(filterByYear(''));
  }

  const handleResetFilter = () => {
    dispatch(setHasFilter(false));
    dispatch(filterByYear(''));
    dispatch(fetchMoviesTopTen());
  }

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box width="100%" bgcolor="#012433"></Box>
      <Typography variant="h3">Movie Ranking</Typography>
      <Box display="flex" flexDirection="row">
        <Button variant="outlined" sx={{
          borderRadius: '20px',
          marginRight: '5px',
          backgroundColor: hasFilter && filteringByYear === '' ? '#00BAFF' : 'transparent',
          color: hasFilter && filteringByYear === '' ? 'black' : 'grey',
        }}
        onClick={() => handleTopTen()}
        disableRipple
        >Top 10 Revenue</Button>
        <Button variant="outlined" sx={{
          borderRadius: '20px',
          backgroundColor: filteringByYear ? '#00BAFF' : 'transparent',
          color: filteringByYear ? 'black' : 'grey',
        }}
        onClick={handleClick}
        disableRipple
        >Top 10 Revenue Per Year</Button>
        {
          hasFilter &&
          <IconButton onClick={() => handleResetFilter()}>
            <Refresh />
          </IconButton>
        }
      </Box>
      <Movies />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose('')}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {years.reverse().map((year) => <MenuItem key={year} onClick={(e: any) => handleClose(`20${year.toString().length == 1 ? `0${year}` : year}`)}>{`20${year.toString().length == 1 ? `0${year}` : year}`}</MenuItem>)}
      </Menu>
    </Box>
  );
}

export default App;
