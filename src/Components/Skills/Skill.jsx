import React from "react";

const Skill = ({ skill }) => {
  const { name, img, status } = skill;
  return (
    <div className="bg-tertiary shadow-lg text-center py-10 rounded-lg text-black">
      <div className="h-20 w-20 bg-[#17203d]  rounded-full mx-auto flex items-center">
        <img className="w-12 h-12 mx-auto" src={img} alt="" />
      </div>
      <h4 className="text-2xl font-bold my-3 uppercase">{name}</h4>
      <p className="btn btn-xs py-1 px-5">{status}</p>
    </div>
  );
};

export default Skill;
