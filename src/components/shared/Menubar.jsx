'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menubar = ({ href, children }) => {
    const pathname = usePathname(); 
    const isActive = pathname === href; 

    return (
        <li>
            <Link 
                className={`btn btn-sm md:btn-md ${isActive ? "btn-primary" : "btn-ghost"}`} 
                href={href}
            >
                {children}
            </Link>
        </li>
    );
};

export default Menubar;