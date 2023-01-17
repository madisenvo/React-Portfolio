import React from 'react';

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.img}
          alt="Card cap"
        />
        <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <a href="#" className="btn btn-primary">
            Adopt {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
