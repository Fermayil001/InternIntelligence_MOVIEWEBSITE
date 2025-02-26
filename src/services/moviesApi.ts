import { MovieDetails, MoviesResponse } from "../types/types";
import { baseApi } from "./baseApi";



export const moviesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovies: builder.query<MoviesResponse, void>({
            query: () => ({
                method: "GET",
                url: "/discover/movie",
            }),
        }),
        getMoviesByCategory: builder.query<MoviesResponse, { genreId: string | null }>({
            query: ({ genreId }) => ({
                method: "GET",
                url: `/discover/movie?with_genres=${genreId}`,
            }),
        }),
        getMovieDetails: builder.query<MovieDetails, { movieId: string }>({
            query: ({ movieId }) => ({
                method: "GET",
                url: `/movie/${movieId}`,
            }),
        })
    }),
})

export const {
    useGetAllMoviesQuery,
    useGetMoviesByCategoryQuery,
    useGetMovieDetailsQuery,
} = moviesApi;