import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Bracket } from './components/Bracket';
import ErrorPage from './components/ErrorPage';
import { Teams } from './components/Teams';
import { Stream } from './components/Stream';
import { Main } from './components/Main';
import { Shedule } from './components/Shedule';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "Main",
        element: <Main/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "teams",
        element: <Teams/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "bracket",
        element: <Bracket/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "shedule",
        element: <Shedule/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "Stream",
        element: <Stream/>,
        errorElement: <ErrorPage />,
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);

