import { CategoriesResponse } from "../types/types";
import { baseApi } from "./baseApi";


export const categoriesApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCategories: builder.query<CategoriesResponse, void>({
            query: () => ({
                method: "GET",
                url: "/genre/tv/list",
            }),
        }),
    }),
})

export const {
    useGetAllCategoriesQuery,
} = categoriesApi