import Header from '@/components/header/Header';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';

const NewsPage = ({children}) => {
    return (
        <>
        <Header/>
        <Navbar/>
        {children}
        </>
    );
};

export default NewsPage;