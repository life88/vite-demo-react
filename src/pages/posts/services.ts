import request from '@/utils/request';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export function posts() {
  return request<Post[]>('/posts');
}

export function post(id: number) {
  return request<Post>(`/posts/${id}`);
}

export function comments(id: number) {
  return request<Comment[]>(`/posts/${id}/comments`);
}
