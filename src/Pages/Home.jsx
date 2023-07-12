import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Competences from '../components/Competences';
import Realisation from '../components/Realisation';

const Home = () => {
    return (
        <div>
            <Header />
            <About />
            <Competences />
            <Realisation />
        </div>
    );
};

export default Home;