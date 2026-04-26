import React from 'react';

const loading = () => {
    return (
        <div className='flex flex-col h-screen items-center justify-center'>
           <span className="loading loading-infinity loading-xl"></span>
        </div>
    );
};

export default loading;