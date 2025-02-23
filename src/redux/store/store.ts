import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../services/baseApi";
import categoryReducer from '../slices/categorySlice'


export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        category: categoryReducer, 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;