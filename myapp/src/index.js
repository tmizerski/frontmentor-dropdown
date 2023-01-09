import React from 'react';
import ReactDOM from 'react-dom/client';
import {routesMap} from "./router/router";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {SnackBarContextProvider} from "./store/SnackbarContext";
import {AuthContextProvider} from "./store/AuthContext";

import './index.css';

const router = createBrowserRouter(routesMap);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AuthContextProvider>
        <SnackBarContextProvider>
            <RouterProvider router={router} />
        </SnackBarContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
);


