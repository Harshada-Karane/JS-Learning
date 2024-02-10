import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Card = (props) => {
  return (
    <div className="col">
        <div className="card" style={{width: "20rem"}}>
            <img src={props.data.imageSrc} alt={props.data.name} className="card-img-top"  height="200px"/>
            <div className="card-body">
                <h5 className="card-title">{props.data.name}</h5>
                <p className="card-text">{props.data.description}</p>
                <a href={props.data.link} className="btn btn-primary">Watch Now</a>
            </div>
        </div>
    </div>
  )
}
export default Card;
