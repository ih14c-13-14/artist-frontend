import getConfig from '@/config';

import { AxiosResponse, axios } from './library';
import * as schemaHelper from './schemaHelper';

export type AxiosConfigWrapper<
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods,
  PathParams extends { [K in Path extends `:${infer P}` ? P : never]?: string }
> = {
  url: Path;
  method: Method & schemaHelper.HttpMethodsFilteredByPath<Path>;
  params?: schemaHelper.RequestParameters<Path, Method>;
  data?: schemaHelper.RequestData<Path, Method>;
  pathParams?: PathParams;
};

export function request<
  Path extends schemaHelper.UrlPaths,
  Method extends schemaHelper.HttpMethods,
  PathParams extends { [K in Path extends `:${infer P}` ? P : never]?: string }
>({
  url: pathUrl,
  pathParams,
  ...rest
}: AxiosConfigWrapper<Path, Method, PathParams>) {
  const apiBaseUrl = getConfig().api.url('');
  let url = `${apiBaseUrl}${pathUrl}`.replace(/(\r\n|\n|\r| )/gm, '');

  if (pathParams) {
    for (const key of Object.keys(pathParams) as Array<keyof PathParams>) {
      const value = pathParams[key];
      if (value) {
        url = url.replace(`{${String(key)}}`, value);
      }
    }
  }

  return axios.request<
    schemaHelper.ResponseData<Path, Method>,
    AxiosResponse<schemaHelper.ResponseData<Path, Method>>,
    AxiosConfigWrapper<Path, Method, PathParams>['data']
  >({
    url,
    ...rest,
  });
}
