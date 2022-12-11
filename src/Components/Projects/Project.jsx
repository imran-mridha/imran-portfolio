import React, { useState } from "react";
import {Link} from 'react-router-dom'

import image1 from '../../assets/project/carGurus.png'


const Project = ({ item }) => {

  // console.log(item);
  const { id, name, image, technology, des, tag, live_link, repo_link } = item;

  const bgImage = {
    backgroundImage: image
  }

  return (
    <div
      data-aos="zoom-in"
      className="bg-tertiary p-5 rounded-lg flex flex-col justify-between"
    >
      <div className="" >
        <img
          className="rounded h-60 w-full"
          src={image}
          alt=""
        />
      </div>
      <p className="text-3xl my-3 uppercase font-semibold">{name}</p>
      <p>{des}</p>
      <div className="flex justify-between items-center mt-5 font-bold">
        <a href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <a href={live_link} target="_blank" className="ml-2">
            Live Site
          </a>
        </a>
        <a href="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>

          <Link to={`/projects/${id}`} className="ml-2">
            See Details
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Project;
