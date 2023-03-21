import { Card, Input, message, Space, Tree } from 'antd';
import { DirectoryTreeProps } from 'antd/es/tree/DirectoryTree';
import React, { startTransition, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';

import sakinaDataNode from '@/assets/Sakina-bookmark.json';
import life88DataNode from '@/assets/life88-bookmark.json';

import { BookmarkItem } from './type';

const dataMap: Record<string, BookmarkItem> = {
  Sakina: sakinaDataNode,
  life88: life88DataNode,
};

const getParentKey = (value: string, tree: BookmarkItem[]) => {
  const parentKeys: React.Key[] = [];
  const loop = (value: string, tree: BookmarkItem[]) => {
    tree.forEach(({ key, title, children }) => {
      if ((title as string).toLowerCase().includes(value.toLowerCase())) {
        parentKeys.push(key);
      }
      if (children) {
        loop(value, children);
      }
    });
  };
  loop(value, tree);
  return parentKeys;
};

const getTreeData = (keyword: string, tree: BookmarkItem[]) => {
  const loop = (data: BookmarkItem[]): BookmarkItem[] =>
    data.map((item) => {
      const strTitle = item.title as string;
      const index = strTitle.toLowerCase().indexOf(keyword.toLowerCase());
      const preStr = strTitle.substring(0, index);
      const len = index + keyword.length;
      const str = strTitle.substring(index, len);
      const sufStr = strTitle.substring(len);
      const title =
        index > -1 ? (
          <span>
            {preStr}
            <span style={{ color: 'red' }}>{str}</span>
            {sufStr}
          </span>
        ) : (
          strTitle
        );

      if (item.children) {
        return { ...item, title, key: item.key, children: loop(item.children) };
      }
      return {
        ...item,
        title,
        key: item.key,
      };
    });
  return loop(tree);
};

export default function BookmarkPage() {
  const params = useParams();
  const { name } = params;
  const dataNode = dataMap[name!] || {};
  const list: BookmarkItem[] = [dataNode];
  const { key: defaultKey } = dataNode;
  const treeRef = useRef<any>();
  const [loading, setLoading] = useState(false);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([defaultKey]);
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [treeData, setTreeData] = useState<BookmarkItem[]>(list);
  const [height, setHeight] = useState(1000);

  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
  };

  const onSearch = async (value: string) => {
    setKeyword(value);
  };

  useLayoutEffect(() => {
    const offsetHeight = document.body.offsetHeight;
    setHeight(offsetHeight - 150);
  }, []);

  useEffect(() => {
    if (!keyword.trim()) return;
    setLoading(true);
    const newExpandedKeys = getParentKey(keyword, list).filter((item, i, self) => item && self.indexOf(item) === i);

    if (newExpandedKeys && newExpandedKeys.length > 0) {
      const data = getTreeData(keyword, list);
      startTransition(() => {
        setTreeData(data);
        setExpandedKeys(newExpandedKeys);
        setAutoExpandParent(true);
        setLoading(false);
        treeRef.current?.scrollTo?.({ key: defaultKey, align: 'top' });
      });
    } else {
      setLoading(false);
      message.warning('无搜索结果');
    }
  }, [keyword]);

  const treeProps: DirectoryTreeProps<BookmarkItem> & { ref: React.Ref<any> } = {
    ref: treeRef,
    treeData,
    selectable: false,
    onExpand,
    height,
    expandedKeys,
    autoExpandParent,
    titleRender: (treeNode) => {
      const { title, href } = treeNode;
      if (href) {
        return (
          <a href={href} target="_blank" rel="noreferrer">
            {title}
          </a>
        );
      }
      return title;
    },
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Input.Search loading={loading} placeholder="Enter keywords and press enter to search" onSearch={onSearch} />
      <Card>
        <Tree.DirectoryTree {...treeProps} />
      </Card>
    </Space>
  );
}
