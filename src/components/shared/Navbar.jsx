import Image from "next/image";
import Link from "next/link";
import React from "react";
import user from '@/assets/user.png'
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
const links = [
  {href:'/', label:'Home'},
  {href:"/about", label:'About'},
  {href:'/career', label:'Career'}
   ]
 

  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
          
            tabIndex="-1"
            className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-1 md:hidden mt-3 w-52 p-2 shadow flex flex-col space-y-1"
          >
            { 
            links.map((link, i)=><NavbarLinks key={i} href={link.href}>{link.label}</NavbarLinks>)
            }
          </ul>
        </div>
       
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 flex  gap-4">{ 
            links.map((link, i)=><NavbarLinks key={i} href={link.href}>{link.label}</NavbarLinks>)
            }</ul>
      </div>
      <div className="navbar-end flex items-center gap-2">
        <Image width={40} height={40} src={user} alt="user png"/>
        <button className="btn btn-neutral">Button</button>
      </div>
    </div>
  );
};

export default Navbar;
