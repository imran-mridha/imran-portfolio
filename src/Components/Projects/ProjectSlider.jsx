import React from 'react';

const ProjectSlider = ({proImg}) => {
  return (
    <div>
      <img className='h-96 w-full rounded' src={proImg} alt="" />
    </div>
  );
};

export default ProjectSlider;