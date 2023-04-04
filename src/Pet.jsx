import React from "react";
import "./Pet.css";
import { Link } from "react-router-dom";

export default function Pet({ animal, breed, city, id, imgSrc, name }) {
  return (
    <div className="pet-card">
      <div className="pet-img">
        <img src={imgSrc} alt="" />
        <hr />
      </div>
      <h4> {name}</h4>
      <h5>
        {" "}
        {animal}, {breed}
      </h5> 
      <p>City: {city}</p>
      <Link to={`/details/${id}`}>More Details</Link>
    </div>
  );
}
