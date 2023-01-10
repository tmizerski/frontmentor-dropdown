import App from "../App";
import Main from "../pages/main/main";
import Login from "../components/Login/Login";
import SignUp from "../components/SingUp/SignUp";
import React from "react";
import Auth from '../components/Auth/Auth';
import Unauthorized from "../pages/Unauthorized/Unauthorized";
import CalendarScheduler from "../components/Callendar/Callendar";

export const routesMap = [
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
                path:"/unauthorized",
                element: <Unauthorized/>
            },
            {
                element: <Auth allowedRoles={["user"]}/>,
                children: [
                    {
                        path: "/todoapp",
                        element: <div>ToDo app</div>,
                    },
                    {
                        path: "/calendar",
                        element: <CalendarScheduler/>,
                    },
                ]
            },
            {
                element: <Auth allowedRoles={["admin"]} />,
                children: [
                    {
                        path: "/remainder",
                        element: <div>remainder</div>,
                    },
                    {
                        path: "/planning",
                        element: <div>planning</div>,
                    }

                ]
            }
        ]
    },
]