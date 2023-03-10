import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

import { findUser } from './services';

export default function UserPage() {
  const params = useParams();
  const { id } = params;
  const { isLoading, error, data } = useQuery({
    queryKey: [`getUser-${id}`],
    queryFn: () => {
      return findUser(id!);
    },
  });

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + (error as AxiosError).message;

  return (
    <div>
      <div>user page, id: {params.id}</div>
      <div>data: {JSON.stringify(data)}</div>
    </div>
  );
}
