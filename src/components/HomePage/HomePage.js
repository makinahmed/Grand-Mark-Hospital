import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import NavigationBar from '../NavigationBar/NavigationBar';
import Services from '../Services/Services';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const HomePage = () => {
    return (
        <div>

            <Banner></Banner>
            <Services></Services>
            <Gallery></Gallery>
            <WhyChooseUs></WhyChooseUs>

        </div>
    );
};

export default HomePage;