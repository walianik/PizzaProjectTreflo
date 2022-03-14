import React from "react";

function Pizzas(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={props.image} alt=".." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <div className="card-text pizzaDetails">{props.rating}</div>
        <div className="card-text pizzaDetails">{props.price}</div>
        <a href="/" className="btn btn-primary">
          +
        </a>
      </div>
    </div>
  );
}

export default Pizzas;
