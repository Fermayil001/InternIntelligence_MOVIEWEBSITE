import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Access_Token, Base_Url } from "../config/apiHelper";

export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: Base_Url,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${Access_Token}`);
            return headers;
        },
    }),
    endpoints: () => ({}),
})




/* 

fetchMovies: build.query<Movie[], { query: string }>(
            {
                query: (query) => ({
                    url: "/search/movie",
                    params: {
                        api_key: "YOUR_API_KEY",
                        query,
                    },
                }),
            }
        ),
        fetchMovieDetails: build.query<MovieDetails, { movieId: number }>(
            {
                query: ({ movieId }) => ({
                    url: `/movie/${movieId}`,
                    params: {
                        api_key: "YOUR_API_KEY",
                    },
                }),
            }
        ),
*/