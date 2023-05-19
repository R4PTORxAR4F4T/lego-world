import { createBrowserRouter } from "react-router-dom";

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
          loader: ({params}) => fetch(`http://localhost:5000/alltoys/${params.id}`)
        },
        {
          path: 'update/:id', 
          element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>, 
          loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
        }
      ]
    },
  ]);


  export default router;