import { createSlice } from "@reduxjs/toolkit";


const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

const initialState = {
  count: storedFavorites.length,
}


const favCountSlice = createSlice({
  name: 'favCount',
  initialState,
  reducers: {
    addFav: (state) => {
      state.count++;
    },
    removeFav: (state) => {
      if (state.count > 0) {
        state.count--;
      }
    },
  },
})

export const { addFav, removeFav } = favCountSlice.actions;

export default favCountSlice.reducer;