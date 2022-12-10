import React from "react";
import aboutImg2 from "../../assets/about2.png";


const About = () => {
  return (
    <section className="section" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24 items-center">
          <img data-aos="fade-up-right"
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={aboutImg2}
            alt=""
          />
          <div data-aos="zoom-in" className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">
                About Me
              </h2>
              <p className="mb-4 text-accent">Junior Frontend Web Developer</p>
              <hr className="mb-4 opacity-5" />
              <p className="mb-8">
                My name is Imran! I'm a Junior Web developer who really loves to
                create unique designs, modern & cool features, and
                functionalities, CSS, animations, user experience, and writing
                clean code. <br />
                <br />I grew up in Barishal, studied arts & humanities at
                Barishal Government BM College, and besides my studies, I joined
                a web development course at programming hero, where my main
                growth started as a web developer. Surprise!
              </p>
            </div>
            <button className="btn btn-md bg-black hover:bg-secondary-hover transition-all">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
