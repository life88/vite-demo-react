import { Table, TableColumnProps, TableProps, Tooltip } from 'antd';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useProxy } from 'valtio/utils';

import postsStore, { postsActions } from './model';
import { Post, posts } from './services';

export default function PostsPage() {
  const state = useProxy(postsStore);

  const { isLoading, data } = useQuery({
    queryKey: ['posts'],
    queryFn: () => {
      return posts();
    },
  });

  const columns: TableColumnProps<Post>[] = [
    { title: 'ID', dataIndex: 'id', width: 80 },
    {
      title: '标题',
      dataIndex: 'title',
      width: 300,
      ellipsis: { showTitle: false },
      render: (title) => {
        return (
          <Tooltip placement="topLeft" title={title}>
            {title}
          </Tooltip>
        );
      },
    },
    {
      title: '内容',
      dataIndex: 'body',
      ellipsis: { showTitle: false },
      render: (body) => {
        return (
          <Tooltip placement="topLeft" title={body}>
            {body}
          </Tooltip>
        );
      },
    },
    {
      title: '操作',
      dataIndex: 'option',
      width: 100,
      render: (_, record) => {
        const { id } = record;
        return <Link to={`/posts/${id}`}>详情</Link>;
      },
    },
  ];

  const tableProps: TableProps<Post> = {
    rowKey: 'id',
    columns,
    loading: isLoading,
    dataSource: data,
    pagination: {
      current: state.current,
      pageSize: state.pageSize,
      onChange: postsActions.onChange,
      onShowSizeChange: postsActions.onShowSizeChange,
    },
  };

  return (
    <div>
      <Table {...tableProps} />
    </div>
  );
}
