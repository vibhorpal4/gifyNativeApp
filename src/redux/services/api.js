import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

const baseUrl = `https://api.giphy.com/v1/gifs`;
const key = 'YCXC6GUenGWmDF12R1zd0vWk0aziEFRV';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Trending, Search'],
  endpoints: builder => ({
    getTranding: builder.query({
      query: offset =>
        `/trending?api_key=${key}&offset${offset}=&limit=30&rating=g`,
    }),
  }),
});

export const {useGetTrandingQuery} = api;
