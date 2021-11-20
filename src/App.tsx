import { Box, Button, Menu, MenuItem, Typography } from '@mui/material';
import React from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { Movies } from './features/movies/Movies';
import { filterByYear } from './features/movies/moviesSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const years = Array.from(Array(17).keys())
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (year: any) => {
    if (year) {
      dispatch(filterByYear(year))
    }
    setAnchorEl(null);
  };

  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box width="100%" bgcolor="#012433"></Box>
      <Typography variant="h3">Movie Ranking</Typography>
      <Box display="flex" flexDirection="row">
        <Button variant="outlined" sx={{
          borderRadius: '20px',
          marginRight: '5px',
        }}
        disableRipple
        >Top 10 Revenue</Button>
        <Button variant="outlined" sx={{
          borderRadius: '20px'
        }}
        onClick={handleClick}
        disableRipple
        >Top 10 Revenue Per Year</Button>
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
