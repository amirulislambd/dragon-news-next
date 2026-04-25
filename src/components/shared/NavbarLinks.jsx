"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarLinks = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  console.log(pathName);

  return (
    <li>
      <Link className={`btn ${isActive ? "btn-primary" : ""}`} href={href}>
        {children}
      </Link>
    </li>
  );
};

export default NavbarLinks;
