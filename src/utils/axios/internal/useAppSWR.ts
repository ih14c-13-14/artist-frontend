import useSWR from 'swr';

import * as $axios from './axiosUtils';
import { AxiosError } from './library';
import * as schemaHelper from './schemaHelper';

const fetcher = async <
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
>(
  config: $axios.AxiosConfigWrapper<Path, Method>
) => {
  const res = await $axios.request<Path, Method>(config);
  return res.data;
};

export const useAppSWR = <
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
>(
  config: $axios.AxiosConfigWrapper<Path, Method>
) =>
  useSWR<schemaHelper.ResponseData<Path, Method>, AxiosError>(config, fetcher);
