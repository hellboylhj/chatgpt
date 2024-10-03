import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import HomePage from "./routes/HomePage/HomePage.jsx";
import DashboardPage from "./routes/DashboardPage/DashboardPage.jsx";
import LoginPage from "./routes/LoginPage/LoginPage.jsx";
import ChatPage from "./routes/ChatPage/ChatPage.jsx";
import RootLayout from "./layouts/rootLayout/rootLayout.jsx";
import DashboardLayout from "./layouts/dashboardLayout/dashboardLayout.jsx";
import SignInPage from "./routes/SignInPage/SignInPage.jsx";
import SignupPage from "./routes/SignupPage/SignupPage.jsx";


const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/sign-in/*',
                element: <SignInPage />
            },
            {
                path: '/sign-up/*',
                element: <SignupPage />
            },
            {
                //
                element: <DashboardLayout />,
                children: [
                    {
                        path: '/dashboard',
                        element: <DashboardPage />
                    },
                    {
                        path: "/dashboard/chats/:id",
                        element: (<ChatPage />),
                    }
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)