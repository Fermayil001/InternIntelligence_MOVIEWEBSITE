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
    }),
})

export const {
    useGetAllMoviesQuery,
} = moviesApi;