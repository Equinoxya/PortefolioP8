import React from 'react';
import './styles/about.css'

const About = () => {
    return (
            <section id='About'>
                <h2>Présentation</h2>
                <div className='bloc-text'>
                    <p className='texte'>
                        Après un an en tant que freelance dans le monde de l'illustration digitale,
                        j'ai pris la décision de me lancer dans le monde de la tech via le developpement web.
                    </p>
                    <p className='texte'>    
                        Ma curiosité et ma capacité à m'adapter à toutes situations m'ont permit, 
                        aujourd'hui, de me lancer sereinement dans le développement de site dans leur entièreté.
                    </p>
                    <div className='decoration'></div>
                </div>
                <div className='container-rs'>
                    <a className='logors' href="https://github.com/Equinoxya"><i className="fa-brands fa-github fa-beat fa-2xl" aria-valuetext='Github'></i></a>
                    <a className='logors' href="https://www.linkedin.com/in/ophélie-bellissens-1298b3275/"><i className="fa-brands fa-linkedin fa-beat fa-2xl" aria-valuetext='Linkedin'></i></a>
                </div>
            </section>
    );
};
export default About;