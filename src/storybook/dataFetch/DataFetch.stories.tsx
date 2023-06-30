import type { Meta } from '@storybook/react';
import { Fragment } from 'react';

import { useAppSWR } from '@/utils/axios';

const DataFetchExampleStory = () => {
  const { data, isLoading, error } = useAppSWR({
    url: '/api/v1/arts',
    method: 'get',
  });
  // TODO: #83
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error!</div>;
  return (
    <div>
      {data?.map(art => {
        return (
          <Fragment key={art['arts.id']}>
            <div>id: {art['arts.id']}</div>
            <div>name: {art['arts.name']}</div>
            <div>address: {art['arts.address']} </div>
            <div>image_path: {art['arts.image_path']} </div>
            <div>authors.name: {art['authors.name']}</div>
          </Fragment>
        );
      })}
      <hr></hr>
      <div>data: {JSON.stringify(data)}</div>
    </div>
  );
};

const DataFetchStory: Meta<typeof DataFetchExampleStory> = {
  component: DataFetchExampleStory,
  args: {},
};

export default DataFetchStory;

export const Normal = () => <DataFetchExampleStory />;

export const WithPathParams = () => {
  const { data, isLoading, error } = useAppSWR({
    url: '/api/v1/users/{user_id}/email-change',
    method: 'post',
    pathParams: {
      user_id: '1',
    },
    data: {
      email: 'mail@example.com',
    },
  });

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error!</div>;
  return <div>{JSON.stringify(data)}</div>;
};
