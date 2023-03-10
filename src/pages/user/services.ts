import request from '@/utils/request';

export interface User {
  uid: string;
  name: string;
  username: string;
}

export function findUser(uid: string) {
  return request<User>(`/user/${uid}`);
}
