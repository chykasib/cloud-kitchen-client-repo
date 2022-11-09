import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AddService from "../../pages/AddService/AddService";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import Reviews from "../../pages/Reviews/Reviews";
import ReviewSection from "../../pages/ReviewSection/ReviewSection";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/services')
            },
            {
                path: '/services', element: <Services></Services>,
                loader: () => fetch('http://localhost:5000/Allservices')
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/register', element: <Register></Register>
            },
            {
                path: 'serviceDetails/:id', element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/review', element: <PrivateRoute><Reviews></Reviews></PrivateRoute>
            },
            {
                path: '/serviceDetails/:id', element: <PrivateRoute><ReviewSection></ReviewSection></PrivateRoute>
            },
            {
                path: '/addService', element: <AddService></AddService>
            }
        ]
    }
])