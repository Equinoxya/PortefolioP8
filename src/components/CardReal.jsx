import React, { useState } from 'react';
import Modal from 'react-modal';
import './styles/cardReal.css'
import './styles/modal.css'

Modal.setAppElement('#root');

const CardReal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

    return (
        <div className='card-real' onClick={openModal} key={props.id}>
            <h3>{props.name}</h3>
            <img src={props.icon} alt={props.name} className='imageCard'/>
            <p> {props.description} </p>
            <div className="tags-real">
            {props.tags.map((tag) => (
                <span className="tag" key={tag}>
                {" "}
                {tag}{" "}
                </span>
                ))}
            </div>
            <Modal isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}>
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Contexte</h2>
                        <p>{props.context}</p>
                        <h2>Problématique</h2>
                        <p>{props.problematique}</p>
                        <button><a href={props.site}>{props.name}</a></button>
                        <button onClick={closeModal}>Fermer</button>
                    </div>
                </div>
            </Modal>    
        </div>
    );
};
export default CardReal;