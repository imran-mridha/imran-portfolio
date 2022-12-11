import React from "react";
import Blogs from "../Components/Blogs/Blogs";
import {Outlet} from 'react-router-dom'

const BlogLayout = () => {
  return (
    <div> 
      <Outlet />
    </div>
  );
};

export default BlogLayout;
