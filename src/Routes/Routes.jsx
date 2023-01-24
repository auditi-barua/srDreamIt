import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Agency from "../Agency/Agency";
import BlogP from "../BlogP/BlogP";
import ContactUs from "../ContactUs/ContactUs";
import CourseDetails from "../CourseDetails/CourseDetails";
import Description from "../CourseDetails/Description";
import Lessons from "../CourseDetails/Lessons";
import Reviews from "../CourseDetails/Review/Reviews";
import CourseP from "../CoursesP/CourseP";
import Freelanchers from "../Freelanchers/Freelanchers";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import SubLayout from "../Layout/SubLayout";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Team from "../Team/Team";


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
                path: '/course',
                element: <CourseP />
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/team',
                element: <Team/>
            },
            {
                path: '/freelanchers',
                element: <Freelanchers/>
            },
            {
                path: '/team',
                element: <Team/>
            },
            {
                path: '/blog',
                element: <BlogP/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <SignUp/>
            },
            {
                path: '/contact',
                element: <ContactUs/>
            },
            {
                path: '/coursedetails',
                element: <CourseDetails/>
            },
            {
                path: '/description',
                element:<Description/>
            },
            {
                path: '/lessons',
                element:<Lessons/>
            },
            {
                path: '/reviews',
                element: <Reviews/>
            }
        ]
    },
    {
        path: '/agency',
        element: <SubLayout></SubLayout>,
        children: [
            {
                path: '/agency',
                element: <Agency/>
            }
        ]
    }
])

export default router;