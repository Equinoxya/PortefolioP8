import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Competences from '../components/Competences';
import Realisation from '../components/Realisation';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Competences />
            <Realisation />
            <Footer />
        </div>
    );
};

export default Home;