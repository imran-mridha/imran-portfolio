import React from "react";
import imranImg from "../../assets/iman1.png";
import heroImg from '../../assets/hero/heroImg2.jpg'

const Hero = () => {
  return (
    <div className="pt-20" id="home">
      <div className="flex items-center h-full pt-8 ">
        <div className="flex-1 flex flex-col items-center lg:items-start">
          <p className="text-2xl text-gray-300 text-md mb-[22px]">Hey,👋 I'm</p>
          {/* <h2 className="text-4xl font-bold"> Dipta Pal!</h2> */}
          <h1 className="text-4xl text-center md:text-start leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px] uppercase">
            Imran Mridha
          </h1>
          <p className="pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-2xl text-center md:text-start text-accent">
            Front-End Developer || Reactjs
          </p>
          <button className="btn btn-md bg-black hover:bg-secondary-hover transition-all">
            <a href="/" download className="">
              Download Resume
            </a>
          </button>
        </div>
        <div className="hidden lg:flex flex-1 justify-end items-end">
          <img className="" src={heroImg} alt="" />
          {/* <img
            className='object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl'
            src={heroImg}
            alt=''
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
