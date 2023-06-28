import getConfig from '@/config';

import { AxiosResponse, axios } from './library';
import * as schemaHelper from './schemaHelper';

export type AxiosConfigWrapper<
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
> = {
  url: Path;
  method: Method & schemaHelper.HttpMethodsFilteredByPath<Path>;
  params?: schemaHelper.RequestParameters<Path, Method>;
  data?: schemaHelper.RequestData<Path, Method>;
};

export function request<
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods
>({ url: pathUrl, ...rest }: AxiosConfigWrapper<Path, Method>) {
  const apiBaseUrl = getConfig().api.url('/api');

  const url = `${apiBaseUrl}${pathUrl}`.replace(/(\r\n|\n|\r| )/gm, '');

  return axios.request<
    schemaHelper.ResponseData<Path, Method>,
    AxiosResponse<schemaHelper.ResponseData<Path, Method>>,
    AxiosConfigWrapper<Path, Method>['data']
  >({
    url,
    ...rest,
  });
}
