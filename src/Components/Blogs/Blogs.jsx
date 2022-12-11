import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-black">
      <h2 className="text-center text-3xl">Comming Soon</h2>
      <h2>
        <Link 
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
        className='btn mt-5 transition-all duration-300'
         to="/">Back To Home</Link>
      </h2>
    </section>
  );
};

export default Blogs;
