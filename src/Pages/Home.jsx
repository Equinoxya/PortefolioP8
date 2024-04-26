import React from 'react';
import Header from '../components/Header/Header';
import About from '../components/About/About';
import Competences from '../components/Competences/Competences';
import Realisation from '../components/Realisations/Realisation';
import Footer from '../components/Footer/Footer';

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