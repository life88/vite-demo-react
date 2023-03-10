import { proxy } from 'valtio';

export interface PostsStoreState {
  current: number;
  pageSize: number;
}

const postsStore = proxy<PostsStoreState>({
  current: 1,
  pageSize: 10,
});

export const postsActions = {
  onChange(page: number, pageSize: number) {
    postsStore.current = page;
    postsStore.pageSize = pageSize;
  },
  onShowSizeChange(current: number, size: number) {
    postsStore.current = current;
    postsStore.pageSize = size;
  },
};

export default postsStore;
