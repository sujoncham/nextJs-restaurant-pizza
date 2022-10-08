import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
// https://www.youtube.com/watch?v=vIxGDq1SPZQ

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;