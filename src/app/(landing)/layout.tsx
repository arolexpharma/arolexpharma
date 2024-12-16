import React from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';



export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div id="content" className="site-content">
            <Header/>
            {children}
            <Footer />
        </div>
    );
}
