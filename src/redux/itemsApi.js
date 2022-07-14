import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = process.env.REACT_APP_LOCALHOST;
const token = localStorage.getItem('access_token');

export const itemsApi = createApi({
    reducerPath: 'items',
    keepUnusedDataFor: 60,
    tagTypes: ['Items', 'Collections'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        createItem: build.mutation({
            query: (body) => ({
                url: 'items/create',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: result =>
                result
                    ? [...result.map(({ id }) => ({ type: 'Collections', id })), { type: 'Collections', id: 'LIST' }]
                    : [{ type: 'Collections', id: 'LIST' }]
        }),
        getLastAddedItems: build.query({
            query: () => ({
                url: 'items/last-added',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            }),
            providesTags: ['Items', 'Collections']
        }),
        getAllItemsTags: build.query({
            query: () => ({
                url: 'items/tags',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },

            }),
            providesTags: ['Items', 'Collections']
        })

    })
})

export const {
    useCreateItemMutation,
    useGetLastAddedItemsQuery,
    useGetAllItemsTagsQuery,
} = itemsApi;