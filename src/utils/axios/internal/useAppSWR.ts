import useSWR from 'swr';

import * as $axios from './axiosUtils';
import { AxiosError } from './library';
import * as schemaHelper from './schemaHelper';

const fetcher = async <
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods,
  PathParams extends { [K in Path extends `:${infer P}` ? P : never]?: string }
>(
  config: $axios.AxiosConfigWrapper<Path, Method, PathParams>
) => {
  const res = await $axios.request<Path, Method, PathParams>(config);
  return res.data;
};

export const useAppSWR = <
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods,
  PathParams extends { [K in Path extends `:${infer P}` ? P : never]?: string }
>(
  config: $axios.AxiosConfigWrapper<Path, Method, PathParams>
) =>
  useSWR<schemaHelper.ResponseData<Path, Method>, AxiosError>(config, fetcher);
