import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem('_token')

export const usersApi = createApi({
    reducerPath: 'users',
    tagTypes: ['Users'],
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
            invalidatesTags: ['Users'],
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
            invalidatesTags: ['Users']

        }),
        deleteUser: build.mutation({
            query: (body) => ({
                url: 'users/delete',
                method: 'DELETE',
                body: JSON.stringify(body)
            })

        }),
        getUserProfile: build.query({
            url: 'users/profile',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    })
})


export const {
    useGetUserProfileQuery,
    useDeleteUserMutation,
    useLoginUserMutation,
    useSignupUserMutation
} = usersApi;