import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './styles/index.css'
import LoginOrSignUp from './components/LoginOrSignup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginOrSignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
