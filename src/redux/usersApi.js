import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL = process.env.REACT_APP_LOCALHOST;
const token = localStorage.getItem('access_token');

export const usersApi = createApi({
    reducerPath: 'users',
    keepUnusedDataFor: 60,
    tagTypes: ['Users', 'Collections'],
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        loginUser: build.mutation({
            query: (body) => ({
                url: 'users/login',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body
            }),

        }),
        signupUser: build.mutation({
            query: (body) => ({
                url: 'users/signup',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body
            }),


        }),
        deleteUser: build.mutation({
            query: (body) => ({
                url: 'users/delete',
                method: 'DELETE',
                body: JSON.stringify(body)
            })

        }),
        getUserProfile: build.query({
            query: id => ({
                url: 'users/profile',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: id
            }),
            providesTags: ['Users', 'Collections']
        })
    })
})


export const {
    useGetUserProfileQuery,
    useDeleteUserMutation,
    useLoginUserMutation,
    useSignupUserMutation
} = usersApi;