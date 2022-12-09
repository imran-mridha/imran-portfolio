import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";
import NavMobile from "./NavMobile";
// import { Link } from "react-scroll";
import logo from '../../assets/logo.png'


const Nav = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  // const menuItems = (
  //   <>
  //     <li className="uppercase font-semibold">
  //       <NavLink
  //         className={({ isActive }) =>
  //           isActive
  //             ? `text-gray-300 active:bg-transparent `
  //             : `hover:text-gray-300 active:bg-transparent `
  //         }
  //         to="/"
  //       >
  //         Home
  //       </NavLink>
  //     </li>
  //     <li className="uppercase font-semibold">
  //       <HashLink
  //         className={({ isActive }) =>
  //           isActive
  //             ? `text-gray-300 active:bg-transparent `
  //             : `hover:text-gray-300 active:bg-transparent `
  //         }
  //         onClick={() => window.location.replace("/#about")}
  //         smooth={true}
  //         duration={500}
  //         spy={true}
  //       >
  //         About
  //       </HashLink>
  //     </li>
  //     <li className="uppercase font-semibold">
  //       <NavLink
  //         className={({ isActive }) =>
  //           isActive
  //             ? `text-gray-300 active:bg-transparent `
  //             : `hover:text-gray-300 active:bg-transparent `
  //         }
  //         to="/skills"
  //       >
  //         Skills
  //       </NavLink>
  //     </li>
  //     <li className="uppercase font-semibold">
  //       <NavLink
  //         className={({ isActive }) =>
  //           isActive
  //             ? `text-gray-300 active:bg-transparent `
  //             : `hover:text-gray-300 active:bg-transparent `
  //         }
  //         to="/projects"
  //       >
  //         Projects
  //       </NavLink>
  //     </li>
  //     <li className="uppercase font-semibold">
  //       <NavLink
  //         className={({ isActive }) =>
  //           isActive
  //             ? `text-gray-300 active:bg-transparent `
  //             : `hover:text-gray-300 active:bg-transparent `
  //         }
  //         to="/contact"
  //       >
  //         Contact
  //       </NavLink>
  //     </li>
      
  //   </>
  // );
  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white   transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        <img className="w-20 h-20" src={logo} alt="" />
        {/* <h2 className="text-4xl uppercase">Imran</h2> */}
        {/* nav */}
        <div className='hidden lg:block'>
          <NavItems />
        </div>
        {/* Socials */}
        {/* <div className='hidden lg:block'>
          <Socials />
        </div> */}
        {/* nav mobile*/}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
    // <div className="relative z-50">
    //   <div className="bg-[#000]">
    //     <div className="container mx-auto navbar flex justify-between px-5 md:px-0">
    //       <div className="">
    //         <div className="dropdown">
    //           <label
    //             tabIndex={0}
    //             className="btn text-primary bg-white lg:hidden mr-10"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-5 w-5"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //                 strokeWidth="2"
    //                 d="M4 6h16M4 12h8m-8 6h16"
    //               />
    //             </svg>
    //           </label>
    //           <ul
    //             tabIndex={0}
    //             className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
    //           >
    //             {menuItems}
    //           </ul>
    //         </div>
    //         <div>
    //           <Link to="/">
    //             {/* <img className="w-36 rounded" src={logo} alt="" /> */}
    //             <h2 className="text-4xl text-white uppercase">Imran</h2>
    //           </Link>
    //         </div>
    //       </div>
    //       <div className="hidden lg:flex">
    //         <ul className="menu menu-horizontal p-0 text-white">{menuItems}</ul>
    //       </div>
    //       {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         className="h-5 w-5"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M4 6h16M4 12h8m-8 6h16"
    //         />
    //       </svg>
    //     </label> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Nav;
