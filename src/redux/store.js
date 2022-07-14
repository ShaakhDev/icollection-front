import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { collectionsApi } from "./collectionsApi";
import { usersApi } from "./usersApi";
import { itemsApi } from "./itemsApi";

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        [collectionsApi.reducerPath]: collectionsApi.reducer,
        [itemsApi.reducerPath]: itemsApi.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(usersApi.middleware)
            .concat(collectionsApi.middleware)
            .concat(itemsApi.middleware)
    ,
    devTools: process.env.NODE_ENV !== 'production'

});

setupListeners(store.dispatch)