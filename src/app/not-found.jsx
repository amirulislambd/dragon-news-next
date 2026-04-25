import Link from 'next/link';
import React from 'react';

const NtoFound = () => {
    return (
        <div className='flex flex-col items-center h-screen justify-center space-y-3'>
            <h1 className='text-red-500 text-2xl font-bold md:text-5xl lg:text-6xl animate-pulse'>404</h1>
            <p>This is page is not found</p>
            <Link href={'/'}><button className='btn btn-primary'>Go Home</button></Link>
        </div>
    );
};

export default NtoFound;