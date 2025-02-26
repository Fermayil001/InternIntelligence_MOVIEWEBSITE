import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types/types';

interface CategoryState {
  movies: Movie[] | undefined;
}

const initialState: CategoryState = {
  movies: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[] | undefined>) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = categorySlice.actions;

export default categorySlice.reducer;
