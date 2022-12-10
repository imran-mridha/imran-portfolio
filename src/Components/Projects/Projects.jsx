import React, { useState, useEffect } from "react";

// import data
import { projectsData } from "../../data";
import { projectsNav } from "../../data";
import Project from "./Project";

// import components
// import Project from './Project';

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <section className="py-10" id='portfolio'>
      {/* projects nav */}
      <div className="flex flex-col text-center">
        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">
        My latest work
        </h2>
        <p className="mb-4 text-accent capitalize">Check out my projects</p>
        <hr className="mb-8 opacity-5 w-1/2 mx-auto" />
      </div>
      {/* <nav className="pb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav> */}
      {/* projects */}
      <section className="grid gap-y-12 4xsm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-10 lg:gap-y-12">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </section>
  );
};

export default Projects;
