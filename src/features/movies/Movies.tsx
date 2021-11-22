import { Close } from '@mui/icons-material';
import { Dialog, DialogTitle, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { DetailedView } from '../../components/DetailedView/DetailedView';
import { MovieList } from '../../components/InfiniteScroll/MovieList';
import { fetchDetailedMovieAsync, getFirstMoviesAsync, loadNextPageAsync, setAvgNumberOfElements } from './moviesSlice';

export function Movies() {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector(state => state.movies.movies);
  const movieDetail = useAppSelector(state => state.movies.detailedMovie);

  const handleMovieClick = (movieId: string) => {
    dispatch(fetchDetailedMovieAsync(movieId));
    setDetailScreenOpen(true);
  }

  const [detailScreenOpen, setDetailScreenOpen] = useState(false);

  const handleOnContainerHeightSet = (height: number) => {
    // Assume every item on the list is at least 60px in height
    const avgNumberOfItems = Math.floor(height / 60);
    dispatch(getFirstMoviesAsync(avgNumberOfItems));
    dispatch(setAvgNumberOfElements(avgNumberOfItems));
  }

  const fetchData = () => {
    dispatch(loadNextPageAsync());
  }

  return (
    <>
      <Box height="100%">
          <MovieList dataLength={movieList?.content.length || 10} next={fetchData} items={movieList?.content || []} onContainerHeightSet={(height) => handleOnContainerHeightSet(height)} onHandleMovieClick={handleMovieClick} />
      </Box>
      <Dialog onClose={() => setDetailScreenOpen(false)} open={detailScreenOpen}>
        <Box py={2} px={4}>
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Typography variant="h4">{movieDetail?.title}</Typography>
            <IconButton onClick={() => setDetailScreenOpen(false)}>
                <Close />
            </IconButton>
          </Box>
          <DetailedView movie={movieDetail} />
        </Box>
      </Dialog>
    </>
  );
}
