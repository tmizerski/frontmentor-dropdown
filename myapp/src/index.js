import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./pages/main/main";
import SignUp from "./components/SingUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
                {
                path: "/",
                element: <Main/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/register",
                element: <SignUp/>
            },
            {
                path: "/todoapp",
                element: <div>ToDo app</div>
            },
            {
                path: "/calendar",
                element: <div>Calendar</div>
            },
            {
                path: "/remainder",
                element: <div>remainder</div>
            },
            {
                path: "/planning",
                element: <div>planning</div>
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


