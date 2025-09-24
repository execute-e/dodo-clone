import { createBrowserRouter, Outlet, redirect } from 'react-router-dom';
import Cart from './modules/Cart/Cart';
import Header from './modules/Header/Header';
import Home from './modules/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="bg-white container sm:px-4 sm:mx-auto sm:rounded-2xl sm:mt-10">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>,
    children: [
      {
        index: true,
        loader: () => redirect('/home'),
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "cart",
        element: <Cart />
      },
    ],
  },
]);
