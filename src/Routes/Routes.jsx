import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/Main/DashboardLayout";
import Main from "../Layouts/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import AddService from "../Pages/Services/AddService";
import MyReview from "../Pages/Services/MyReview";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import UpdateReview from "../Pages/Services/UpdateReview";
import Error from "../Pages/Shared/Error/Error";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => {
                    return fetch(`https://wildography-server.vercel.app/services/${params.id}`)
                }
            },
            {
                path: "/blogs",
                element: <Blogs />
            },

            {
                path: "/addservice",
                element: <PrivateRoutes><AddService /></PrivateRoutes>
            }
        ]
    },
    {
        path: "/dashboard/",
        element: <PrivateRoutes><DashboardLayout /></PrivateRoutes>,
        children: [
            {
                path: "/dashboard/",
                element: <MyReview />
            },
            {
                path: "/dashboard/reviews/:id",
                element: <UpdateReview />
            },
            {
                path: "/dashboard/addService",
                element: <AddService />
            }
        ]
    }
])

export default router;