import React from "react";
import Pet from "../pet/Pet";
import "./Results.css"
export default function Results({ pets }) {
  return (
    <div className="search-results">
      {!pets.length ? (
        <h1>No Pets Found!</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            breed={pet.breed}
            city={pet.city}
            id={pet.id}
            imgSrc={pet.images[0]}
            key={pet.id}
            name={pet.name}
          />
        ))
      )}
    </div>
  );
}
