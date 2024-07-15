


import React from 'react';
import styles from "./head.module.css";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import logo from "./../../assets/headerLogo.png";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {

 const { pathname } = useLocation()

 function isActivePath(path) {
  console.log(pathname);
  console.log(path);
  const isMatch = pathname.startsWith(path)
  console.log(isMatch);
  return isMatch
 }

 const pathList = [
  { title: "home", path: "/home" },
  { title: "menu", path: "/menu" },
  { title: "about", path: "/about" },
  { title: "cart", path: "/cart" },
  { title: "blog", path: "/blog" },
  { title: "account", path: "/account" },
  { title: "contact", path: "/contact" },
 ]

 return (
  <React.Fragment>
   <header className='py-20 '>
    <div className='flex items-center gap-4 justify-around'>
     <div className='p-5 gap-4 items-start  min-w-[280px] hidden lg:flex'>
      <IoPhonePortraitOutline size={46} />
      <div className='flex flex-col gap-3'>
       <span className=' font-semibold narrow tracking-widest'>+0 123 45 67</span>
       <span className='text-dark text-ex-small font-semibold'>8:00 am – 11:30 pm</span>
      </div>
     </div>
     <div className='flex flex-col gap-6 items-center'>
      <div>
       <img src={logo} alt="logo" width={176} />
      </div>
      <div>
       <ul className='flex flex-wrap  gap-4 mt-6 narrow justify-center px-4'>
        {pathList.map((route, i) => {
         return <li key={i} className=' hover:text-helper duration-medium relative' >
          <Link className='block w-full h-full tracking-[4px] font-thin' to={route.path}>
           {route.title.toUpperCase()}
          </Link>
          {
           (isActivePath(route.path) || (pathname === "/" && route.path === "/home")) ?
            <span className='block w-[20px] h-[1px] bg-text absolute -bottom-2 left-[50%] translate-x-[-50%]'></span>
            :
            undefined
          }
         </li>
        })}
       </ul>
      </div>
     </div>
     <div className='p-5  gap-4 items-start min-w-[280px] hidden lg:flex'>
      <div className='flex flex-col gap-3'>
       <span className=' font-semibold narrow tracking-widest text-right'>$0.00</span>
       <span className='text-dark text-ex-small font-semibold'>0 items - View Cart</span>
      </div>
      <IoCart size={46} />
     </div>
    </div>
   </header>
  </React.Fragment>
 )
}
