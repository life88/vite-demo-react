import { List } from 'antd';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { comments, post } from './services';

export default function PostPage() {
  const params = useParams();
  const { postId } = params;

  const { isLoading, data } = useQuery({
    queryKey: ['post', postId],
    queryFn: () => {
      return post(parseInt(postId || ''));
    },
  });

  const { isLoading: isCommentsLoading, data: commentsData = [] } = useQuery({
    queryKey: ['comments', postId],
    queryFn: () => {
      return comments(parseInt(postId || ''));
    },
  });

  if (isLoading) return 'Loading ...';

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <div>
          <h3>{data?.title}</h3>
          <p>{data?.body}</p>
        </div>
      )}
      <p>
        <Link to="/posts">Go back</Link>
      </p>
      {isCommentsLoading ? (
        'Loading...'
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={commentsData}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <List.Item.Meta title={item.name} description={item.email} />
              {item.body}
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
