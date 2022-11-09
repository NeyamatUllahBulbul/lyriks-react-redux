import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '590fa9ba02msh784161029324c04p162b10jsn0c59925041d4');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    getSongDetails: builder.query({query: (songid) => `/tracks/details?track_id=${songid}`})
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery
} = shazamCoreApi;



