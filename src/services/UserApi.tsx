import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from '../util/AxiosbaseQuery';
import UrlService from './ServicesUrl';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: axiosBaseQuery({ baseUrl: UrlService.BaseUrl }),
  endpoints: (_builder) => ({

  }),
});

export const {

} = userApi;

export const { endpoints, reducerPath, reducer } = userApi;
