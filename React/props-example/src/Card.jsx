import React from 'react';
import './App.css';

function Card(props){
    return(
        <>
            <div className="card">
                <img className='img-style' src={props.imageSrc} />
                <h3 className='heading'>{props.name}</h3>
                
                
                    <a className="bg" rel="noreferrer" href={props.link} target="_blank">
                    <button className='btn-style'>Watch Now</button>
                    </a>
                
            </div>
        </>
    )
}

export default Card;