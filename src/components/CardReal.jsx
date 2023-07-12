import React from 'react';
import './styles/cardReal.css'

const CardReal = (props) => {
    return (
        <div className='card-real' key={props.id}>
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
        </div>
    );
};
export default CardReal;