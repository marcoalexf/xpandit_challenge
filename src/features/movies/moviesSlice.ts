import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IDetailedMovie } from '../../models/IDetailedMovie.interface';
import { IPageMovie } from '../../models/IPageMovie.interface';
import { IPagination } from '../../models/IPagination.interface';
import { getDetailedMovie, getMovies, getMoviesFromYear, getMoviesTopTen } from '../../services/Movie.service';

export interface MoviesState {
  movies: IPageMovie | undefined;
  pagination: IPagination;
  yearFilter: string;
  detailedMovie: IDetailedMovie | undefined;
  hasFilter: boolean;
  avgNumberOfElements: number | undefined;
}

const initialState: MoviesState = {
  movies: undefined,
  pagination: {
    page: 0,
    size: 10,
  },
  yearFilter: '',
  hasFilter: false,
  detailedMovie: undefined,
  avgNumberOfElements: undefined,
};

export const getFirstMoviesAsync = createAsyncThunk(
  'movies/getFirstMovies',
  async (numberOfItems: number, { getState }: any) => {
    debugger;
    const response = await getMovies({
      page: 0,
      size: numberOfItems,
    });
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const loadNextPageAsync = createAsyncThunk(
  'movies/loadNextPage',
  async (_, { getState }: any) => {
    if(!getState().movies.movies.last) {
      const response = await getMovies({page: getState().movies.movies.number + 1, size: getState().movies.movies.numberOfElements});
      return response.data;
    } 
    
    throw new Error('Reached the end')
  }
)

export const filterByYear = createAsyncThunk(
  'movies/filterByYear',
  async (year: string, { getState }: any) => {
    // TODO: Fetch from backend
    return {
      year,
      payload: {
        content: [],
      }
    }
  }
)

export const fetchDetailedMovieAsync = createAsyncThunk(
  'movies/detailedMovie',
  async (movieId: string, { getState }: any) => {
    const movie = (await getDetailedMovie(movieId)).data;
    return {
      movie
    }
  }
)

export const fetchMoviesFromYear = createAsyncThunk(
  'movies/fetchMovieFromYearAsync',
  async (year: string, { getState }: any) => {
    const movies = (await getMoviesFromYear(year)).data;
    return {
      movies
    }
  }
)

export const fetchMoviesTopTen = createAsyncThunk(
  'movies/fetchMoviesTopTenAsync',
  async (_, { getState }: any) => {
    const movies = (await getMoviesTopTen(getState().movies.yearFilter)).data;
    return {
      movies
    }
  }
)

export const moviesSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setHasFilter: (state, action) => {
      state.hasFilter = action.payload;
    },
    setAvgNumberOfElements: (state, action) => {
      state.avgNumberOfElements = action.payload;
    }
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getFirstMoviesAsync.pending, (state) => {
      })
      .addCase(getFirstMoviesAsync.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(loadNextPageAsync.fulfilled, (state, action) => {
        state.pagination = {
          ...state.pagination,
          page: state.pagination.page + 1,
        }
        const newMovies = action.payload.content;
        state.movies = {...action.payload, content: [...state.movies!.content, ...newMovies]};
      })
      .addCase(filterByYear.fulfilled, (state, action) => {
        state.yearFilter = action.payload.year;
      })
      .addCase(fetchDetailedMovieAsync.fulfilled, (state, action) => {
        state.detailedMovie = action.payload.movie;
      })
      .addCase(fetchMoviesFromYear.fulfilled, (state, action) => {
        state.movies = action.payload.movies;
      })
      .addCase(fetchMoviesTopTen.fulfilled, (state, action) => {
        state.movies = action.payload.movies;
      })
  },
});

export const { setHasFilter, setAvgNumberOfElements } = moviesSlice.actions;

export default moviesSlice.reducer;
