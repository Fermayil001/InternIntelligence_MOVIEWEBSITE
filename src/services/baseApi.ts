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

