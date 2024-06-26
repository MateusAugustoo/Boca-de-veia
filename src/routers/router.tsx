import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../pages/layout";
import { Contos } from "../pages/contos/contos";
import { Write } from "../pages/write/write";


export const router = createBrowserRouter ([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/contos'} />,
      },
      {
        path: '/contos',
        element: <Contos />,
      },
      {
        path: '/write',
        element: <Write />
      }
    ]
  }
])