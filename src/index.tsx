import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { Main } from './pages/Main';
import { Redirect } from './pages/Redirect';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App/>,
    children: [
      { path: '/:code', element: <Redirect/> },
      { path: '/', element: <Main/> },
    ],
    errorElement: <Navigate to='/'/>
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);
