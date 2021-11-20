import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { MovieList } from '../../components/InfiniteScroll/MovieList';
import { getFirstMoviesAsync, loadNextPageAsync } from './moviesSlice';

export function Movies() {
  const dispatch = useAppDispatch();
  const movieList = useAppSelector(state => state.movies.movies);

  const handleOnContainerHeightSet = (height: number) => {
    // Assume every item on the list is at least 60px in height
    const avgNumberOfItems = Math.floor(height / 60);
    dispatch(getFirstMoviesAsync(avgNumberOfItems));
  }

  const fetchData = () => {
    console.log('triggering next page load');
    dispatch(loadNextPageAsync());
  }

  return (
    <Box height="100%">
        <MovieList dataLength={movieList?.content.length || 10} next={fetchData} items={movieList?.content || []} onContainerHeightSet={(height) => handleOnContainerHeightSet(height)} />
    </Box>
  );
}
