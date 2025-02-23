// src/store/categorySlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryState {
  categoryId: string | null;
  movies: any[];  // Filmleri tutacak dizi, gerektiğinde tip belirleyebilirsiniz
}

const initialState: CategoryState = {
  categoryId: null,  // Başlangıçta hiçbir kategori seçili değil
  movies: [],        // Başlangıçta filmler boş
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.categoryId = action.payload;  // Kategoriyi güncelle
    },
    setMovies: (state, action: PayloadAction<any[]>) => {
      state.movies = action.payload;  // Filmleri güncelle
    },
  },
});

export const { setCategory, setMovies } = categorySlice.actions;

export default categorySlice.reducer;
