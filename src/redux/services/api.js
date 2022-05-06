import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

const baseUrl = `https://api.giphy.com/v1/gifs`;
const key = 'YCXC6GUenGWmDF12R1zd0vWk0aziEFRV';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  tagTypes: ['Trending', 'Search'],
  endpoints: builder => ({
    getGifs: builder.query({
      query: ({offset, query}) =>
        `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=${offset}&rating=g&lang=en`,
      providesTags: ['Search'],
    }),
  }),
});

export const {useGetGifsQuery} = api;
