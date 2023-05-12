import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Main, Test } from '@/pages';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Main />} />
      <Route path='test' element={<Test />} />
    </>,
  ),
);
