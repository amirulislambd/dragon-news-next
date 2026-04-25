'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Menubar = ({ href, children }) => {
    const pathname = usePathname(); // বর্তমান পেজের পাথ নেওয়ার জন্য
    const isActive = pathname === href; // চেক করা হচ্ছে এই লিংকটিই বর্তমান পেজ কি না

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