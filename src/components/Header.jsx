import React from 'react';
import './styles/header.css'

const Header = () => {
    return (
        <header>
        <div className='header'>
            <div className='barre-nav'>
                <img src='logo.webp' alt='Logo' className='logo'></img>
                <nav>
                    <ul>
                        <li >
                            <a href="#About">Présentation</a>
                        </li>
                        <li>
                            <a href="#Competences">Mes compétences</a>
                        </li>
                        <li>
                            <a href="#Projets">Mes réalisations</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <article className='container-header'>
            <p className='text-banner'>
            Bonjour ! <br/>
            Je suis <b>Ophélie</b> développeuse web.
            </p>
            <img src="Pp.webp" alt="logo" />
        </article> 
        <div className='move'>
            <a href="#Projets" className='direction'>Direction les réalisations</a>
            <i className="fa-solid fa-arrow-down fa-bounce fa-xl"></i>
        </div>
        </header>
    );
};

export default Header;