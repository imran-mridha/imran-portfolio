import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About/About";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import ProjectDetails from "../Components/Projects/ProjectDetails";
import Projects from "../Components/Projects/Projects";
import BlogLayout from "../Layouts/BlogLayout";

import Main from "../Layouts/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      
      
    ]
  },
  {
    path: '/',
    element: <BlogLayout />,
    children: [
      {
        path: '/blog',
        element: <Blogs />
      },
      {
        path: '/projects/:id',
        element: <ProjectDetails />
      }
    ]
  }

])