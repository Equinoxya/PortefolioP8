import React from 'react';
import './header.css'

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
                            <a href="#Competences">Compétences</a>
                        </li>
                        <li>
                            <a href="#Projets">Réalisations</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <article className='container-header'>
            <p className='text-banner'>
            Salut ! <br />
            Moi, c'est <b>Ophélie</b> – la magicienne du code, l'architecte de l'internet, et occasionnellement, développeuse web. 
            Quand je ne suis pas en train de sauver le monde digital un site à la fois, je transforme du café en lignes de code pour 
            créer des sites web qui sont plus performants que ma machine à café. Prenez un instant pour explorer mon univers, découvrir mes créations, 
            et voir comment ensemble, on peut donner vie à vos idées les plus folles – et faire en sorte qu’elles fonctionnent sur tous les écrans, promis !
            </p>
            <img src="Pp.webp" alt="logo" />
        </article> 
        </header>
    );
};

export default Header;