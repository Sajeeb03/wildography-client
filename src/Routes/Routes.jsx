import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyReview from "../Pages/Services/MyReview";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Services from "../Pages/Services/Services";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                path: "/myreviews",
                element: <PrivateRoutes><MyReview /></PrivateRoutes>
            }
        ]
    }
])

export default router;