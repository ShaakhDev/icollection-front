import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_LOCALHOST;
const token = localStorage.getItem('access_token');


export const collectionsApi = createApi({
    reducerPath: 'collections',
    keepUnusedDataFor: 60,
    tagTypes: ['Collections'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        getMostPopularCollections: build.query({
            query: () => ({
                url: 'collections/popular',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            }),
            invalidatesTags: ['Collections']
        }),
        getCollection: build.query({
            query: (body) => ({
                url: 'collections/get',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: ['Collections']
        }),
        createCollection: build.mutation({
            query: (body) => ({
                url: 'collections/create',
                method: 'POST',
                headers: {
                    //set content type for sending image in body

                    'Content-Type': 'multipart/form-data',

                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: ['Collections']
        }),
        deleteCollection: build.mutation({
            query: (body) => ({
                url: 'collections/delete',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: ['Collections']
        }),
        updateCollection: build.mutation({
            query: (body) => ({
                url: 'collections/update',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: ['Collections']
        }),
        getCollectionItems: build.query({
            query: (body) => ({
                url: 'collections/items',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: ['Collections']
        }),
        addItemToCollection: build.mutation({
            query: (body) => ({

                url: 'collections/items/add',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: ['Collections']
        }
        ),
        deleteItemFromCollection: build.mutation({
            query: (body) => ({
                url: 'collections/items/delete',
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body
            }),
            providesTags: ['Collections']
        }),

    })
}
);

export const {
    useGetMostPopularCollectionsQuery,
    useCreateCollectionMutation
} = collectionsApi;