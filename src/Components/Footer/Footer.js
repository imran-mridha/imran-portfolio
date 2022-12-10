import React from 'react';
import { social } from '../../data';
const Footer = () => {
  
  return (
    <footer className='py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
        <p className='text-paragraph opacity-80 text-[15px]'>
            &copy; 2022 Imran Mridha. All rights reserved.
          </p>
          <div className='flex space-x-6 items-center justify-center'>
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className='text-accent text-base' href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;