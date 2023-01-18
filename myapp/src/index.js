import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import {routesMap} from "./router/router";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {SnackBarContextProvider} from "./store/SnackbarContext";
import {AuthContextProvider} from "./store/AuthContext";

import './index.css';
import {LoaderContextProvider} from "./store/LoaderContext";
import {ErrorContextProvider} from "./store/ErrorContext";

const router = createBrowserRouter(routesMap);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ErrorContextProvider>
      <LoaderContextProvider>
      <AuthContextProvider>
        <SnackBarContextProvider>
            <RouterProvider router={router} />
        </SnackBarContextProvider>
      </AuthContextProvider>
      </LoaderContextProvider>
      </ErrorContextProvider>
  </React.StrictMode>
);


