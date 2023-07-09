// eslint-disable-next-line
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/HomeComponents/Home';
import AboutUs from './components/AboutUs/AboutUsPage'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Software from './components/Services/Software';
import Consultoria from './components/Services/Consultoria';
import Cloud from './components/Services/Cloud';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "AboutUs",
        element: <AboutUs />
      },
      {
        path: "Software",
        element: <Software />
      },
      {
        path: "Consultoria",
        element: <Consultoria />
      },
      {
        path: "Cloud",
        element: <Cloud />
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
