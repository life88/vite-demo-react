import { proxy } from 'valtio';

export interface User {
  uid: string;
  username: string;
  status: string;
}

export interface GlobalStoreState {
  currentUser?: User;
}

const globalStore = proxy<GlobalStoreState>({
  currentUser: undefined,
});

export const globalActions = {
  async fetchCurrentUser() {},
};

export default globalStore;
