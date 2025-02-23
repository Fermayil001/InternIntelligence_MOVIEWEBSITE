import { MoviesResponse } from "../types/types";
import { baseApi } from "./baseApi";



export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovies: builder.query<MoviesResponse, void>({
            query: () => ({
                method: "GET",
                url: "/discover/movie",
            }),
        }),
        getMoviesByCategory: builder.query({
            query: ({ genreId }) => ({
                method: "GET",
                url: `/discover/movie?with_genres=${genreId}`,
            }),
        }),
    }),
})

export const {
    useGetAllMoviesQuery,
    useGetMoviesByCategoryQuery
} = moviesApi;