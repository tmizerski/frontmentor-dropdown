import App from "../App";
import Main from "../pages/main/main";
import Login from "../components/Login/Login";
import SignUp from "../components/SingUp/SignUp";
import React from "react";
import Auth from '../components/Auth/Auth';
import Unauthorized from "../pages/Unauthorized/Unauthorized";
import CalendarScheduler from "../components/Callendar/Callendar";
import TablePage from "../pages/TablePage/TablePage";
import Users from "../pages/Users/Users";
import Parlours from "../pages/Parlours/Parlours";
import Contractors from "../pages/Contractors/Contractors";
import Regions from "../pages/Regions/Regions";
import Statements from "../pages/Statements/Statements";
import Zalando from "../pages/Zalando/Zalando";

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
                        path: "/table",
                        element: <TablePage/>,
                    },
                    {
                        path: "/users",
                        element: <Users/>,
                    },
                    {
                        path: "/parlours",
                        element: <Parlours/>,
                    },
                    {
                        path: "/contractors",
                        element: <Contractors/>,
                    },
                    {
                        path: "/regions",
                        element: <Regions/>,
                    },
                    {
                        path: "/statements",
                        element: <Statements/>,
                    },
                    {
                        path: "/zalando",
                        element: <Zalando/>,
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