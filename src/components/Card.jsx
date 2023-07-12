import React from 'react';
import './styles/card.css'

const Card = (props) => {
    return (
        <div className='card' key={props.id}>
            <h3>{props.name}</h3>
            <div className='deco'>
                <img src={props.icon} alt={props.name} className='iconeCard'/>
            </div>
            <p> {props.description} </p>
            <div className="tags">
            {props.tags.map((tag) => (
                <span className="tag" key={tag}>
                {" "}
                {tag}{" "}
                </span>
                ))}
            </div>
        </div>
    );
};

export default Card;