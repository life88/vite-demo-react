import { Button, Col, Form, FormProps, Input, Row, Space, Table, TableColumnProps, TableProps, Tooltip } from 'antd';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { useProxy } from 'valtio/utils';

import './index.less';
import postsStore, { postsActions } from './model';
import { Post, posts } from './services';
import { PostsSearchProps } from './type';

export default function PostsPage() {
  const [form] = Form.useForm();
  const [params, setParams] = useState<PostsSearchProps>();
  const state = useProxy(postsStore);

  const { isLoading, data } = useQuery({
    queryKey: ['posts', params],
    queryFn: () => {
      return posts(params);
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

  const onFinish = (values: PostsSearchProps) => {
    setParams(values);
  };

  const onReset = () => {
    setParams(undefined);
    form.resetFields();
  };

  const formProps: FormProps = {
    form,
    onFinish,
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 18,
    },
    layout: 'horizontal',
  };

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
      <div className="search-wrapper">
        <Form {...formProps}>
          <Row gutter={24} style={{ rowGap: 24 }}>
            <Col span={6}>
              <Form.Item label="Title" name="title">
                <Input placeholder="Please enter in the title" />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Space>
                <Button type="primary" htmlType="submit" loading={isLoading}>
                  查询
                </Button>
                <Button onClick={onReset}>重置</Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="list-wrapper">
        <Table {...tableProps} />
      </div>
    </div>
  );
}
