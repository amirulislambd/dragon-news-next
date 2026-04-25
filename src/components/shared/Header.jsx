import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import {format } from "date-fns";
const Header = () => {
    return (
        <div className='flex flex-col space-y-3 md:space-y-5 mt-5 items-center'>
            <Image loading='eager' width={500} height='auto' src={logo} alt={'logo'}/>
            <h1>Journalism Without Fear or Favour</h1>
            <p className='text-xl font-semibold'>{format(new Date(), "EEEE - MMM  dd - yyyy")}</p>
        </div>
    );
};

export default Header;