import React, { useState } from 'react';
import Modal from 'react-modal';
import "./styles/modale.css"

Modal.setAppElement('#root'); // Définit l'élément racine de votre application

function Modale() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='button'>
      <button onClick={openModal} className='button-modale'>Plus d'information sur ma formation</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <aside className='modale'>
            <h2>Formation Developpeur intégrateur web par OpenClassRoom</h2>
            <p>J'ai commencé ma formation chez OpenclassRoom en décembre 2022, pour une fin potentiel en juillet 2023. Ce fût une formation enrichissante.
                J'ai commencé par voir les bases : HTML, CSS; puis JavaScript, qui m'a donné beaucoup de fil à retordre. 
                J'ai pû ensuite découvrir la gestion d'équipe avec le projet 4 ainsi que la prise en main du SEO et du référencement sur le projet 5 ! 
                Ensuite je suis passée à React qui est une librairie JavaScript.
                Et pour terminé, j'ai appris à créer une base de donnée de type MongoDB et de à mettre en place une Api pour le 7ème projet.
                Dans cette aventure, j'ai pu rencontré des développeurs en tout genre, mon mentor qui a été un soutien énorme face à la pression que représente cette formation.
                Mais aussi tous les examinateurs qui m'ont toujours prodigués de bons conseils.
                Merci OpenClassRoom !
            </p>
            <button onClick={closeModal}>Fermer</button>
        </aside>
      </Modal>
    </div>
  );
}

export default Modale;
