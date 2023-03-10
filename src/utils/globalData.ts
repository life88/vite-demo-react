import { NavigateFunction } from 'react-router';

export interface GlobalDataProps {
  baseUrl: string;
  navigate?: NavigateFunction;
}

const globalData: GlobalDataProps = {
  baseUrl: 'https://jsonplaceholder.typicode.com',
  navigate: undefined,
};

export default globalData;
