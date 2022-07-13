import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { collectionsApi } from "./collectionsApi";
import { usersApi } from "./usersApi";


export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [collectionsApi.reducerPath]: collectionsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(collectionsApi.middleware)
    ,
    devTools: process.env.NODE_ENV !== 'production'

});

setupListeners(store.dispatch)