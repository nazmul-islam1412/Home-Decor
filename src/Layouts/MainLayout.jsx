import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
           <div className='flex-1 container w-full px-4 lg:px-12 md:px-8 mx-auto py-4 lg:py-12 md:py-8 '>
               <Outlet></Outlet>
           </div>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;