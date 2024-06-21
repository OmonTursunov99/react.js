import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "daw";

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_DOG_API_URL,
    prepareHeaders(headers) {
      headers.set('x-api-key', import.meta.env.VITE_X_API_KEY);
      
      return headers;
    },
  }),
  endpoints(build) {
    return {
      fetchBreeds: build.query({
        query(limit = 10) {
          return `/breeds?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;