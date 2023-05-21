import { createBrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import AllToy from "../Pages/AllToy/AllToy";
import AddToy from "../Pages/AddToy/AddToy";
import MyToy from "../Pages/MyToy/MyToy";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: 'blogs', 
        element:<Blogs></Blogs>
      }, 
      {
        path: 'alltoy', 
        element: <AllToy></AllToy>
      },
      {
        path: 'addtoy', 
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>, 
      },
      {
        path: 'mytoy', 
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>
      },
      {
        path: 'login', 
        element: <Login></Login>
      }, 
      {
        path: 'signup', 
        element:<Register></Register>
      },
      {
        path: 'toy/:id', 
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>, 
        loader: ({params}) => fetch(`https://assignment-11-server-jet.vercel.app/alltoys/${params.id}`)
      },
      {
        path: 'update/:id', 
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>, 
        loader: ({params}) => fetch(`https://assignment-11-server-jet.vercel.app/bookings/${params.id}`)
      },
      // Error page route for any unwanted paths
      {
        path: '*', 
        element: <ErrorPage></ErrorPage>
      }
    ]
  },
]);

export default router;
