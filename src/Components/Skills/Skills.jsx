import React from "react";
import html from "../../assets/skills/html.png";
import css from "../../assets/skills/css.png";
import bootstrap from "../../assets/skills/bootstrap.png";
import tailwind from "../../assets/skills/tailwind_css.png";
import javascript from "../../assets/skills/javascript--v1.png";
import react from "../../assets/skills/react-native.png";
import next from "../../assets/skills/nextjs-icon.svg";
import git from "../../assets/skills/git.png";
import Skill from "./Skill";

const Skills = () => {
  const mySkills = [
    {
      id: 1,
      name: "Html5",
      img: html,
      status: "Intermediate",
    },
    {
      id: 2,
      name: "Css3",
      img: css,
      status: "Intermediate",
    },
    {
      id: 3,
      name: "Bootstrap",
      img: bootstrap,
      status: "Junior",
    },
    {
      id: 4,
      name: "Tailwind",
      img: tailwind,
      status: "Junior",
    },
    {
      id: 5,
      name: "Javascript",
      img: javascript,
      status: "Junior",
    },
    {
      id: 6,
      name: "ReactJs",
      img: react,
      status: "Junior",
    },
    {
      id: 7,
      name: "NextJs",
      img: next,
      status: "Beginner",
    },
    {
      id: 8,
      name: "Git",
      img: git,
      status: "Junior",
    },
  ];
  return (
    <section className="container mx-auto pb-20 pt-10" id='skills'>
      <div className="flex flex-col text-center">
        <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">
          My Skills
        </h2>
        <p className="mb-4 text-accent">My Skills Progress so far</p>
        <hr className="mb-8 opacity-5 w-1/2 mx-auto" />
        
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
        {mySkills.map((skill) => (
          <Skill key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
