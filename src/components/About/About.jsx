import React from 'react';
import './about.css';

const About = () => {
    return (
            <section id='About'>
                <h2>Présentation</h2>
                <div className='bloc-text'>
                    <p className='texte'>
                    Après une année enrichissante en tant qu'illustrateur digital freelance, j'ai décidé d'embrasser un nouveau défi : 
                    plonger dans l'univers palpitant du développement web. Ma curiosité insatiable et ma remarquable faculté d'adaptation me permettent 
                    aujourd'hui de concevoir et développer des sites web de A à Z avec assurance et créativité. Cette transition marque pour moi 
                    le début d'une aventure exaltante au cœur de la tech, où je combine art et technologie pour créer des expériences numériques uniques.
                    </p>
                    <div className='decoration'></div>
                </div>
                <div className='container-rs'>
                    <a className='logors' href="https://github.com/Equinoxya"><img src="https://cdn.hugeicons.com/icons/github-stroke-rounded.svg" alt="github"/></a>
                    <a className='logors' href="https://www.linkedin.com/in/ophélie-bellissens-1298b3275/"><img src="https://cdn.hugeicons.com/icons/linkedin-02-stroke-rounded.svg" alt="linkedin-02" /></a>
                </div>
            </section>
    );
};
export default About;