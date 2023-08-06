import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import OurServices from "../../Pages/OurServices/OurServices";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Login/SignUp/SignUp";
import Package from "../../Pages/Package/Package";
import DashboardLayout from "../../layout/DashboardLayout";
import MyBooking from "../../Pages/Dashboard/MyBooking/MyBooking";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import AdminRoute from "../AdminRoute/AdminRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <OurServices></OurServices>
            },
            {
                path: '/package',
                element: <Package></Package>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/booking',
                element: <MyBooking></MyBooking>
            },
            {
                path: '/dashboard/allUser',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            }
        ]
    }
]);