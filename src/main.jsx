import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import Services from './component/Services/Services';
import Login from './component/Login/Login';
import AuthProvider from './component/AuthProvider/AuthProvider';
import SignUp from './component/SignUp/SignUp';
import Detail from './component/Detail/Detail';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader:() => fetch('https://real-project-server-rnpz6w2mp-maliksakin53gmailcom.vercel.app/service')

      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "/detail",
        element: <Detail></Detail>,
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
