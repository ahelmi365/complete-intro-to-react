import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import "./SearchParams.css";

import useBreedList from "./useBreedList.js";
import fetchSearch from "./fetchSearch";

import LoadingScreen from "../../LoadingScreen";
import Results from "../results/Results";

export default function SearchParams() {
  const [animal, setAnimal] = useState("");
  const [breeds, status] = useBreedList(animal);

  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const results = useQuery(["search", requestParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

  function requestPest(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      location: formData.get("location") ?? "",
      animal: formData.get("animal") ?? "",
      breed: formData.get("breed") ?? "",
    };
    console.log(obj);
    setRequestParams(obj);
  }

  return (
    <div className="d-print-none">
      <form
        action=""
        onSubmit={(e) => {
          requestPest(e);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            name="animal"
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option value="0"></option>
            <option value="cat">Cat</option>
            <option value="reptile">Reptile</option>
            <option value="dog">Dog</option>
            <option value="bird">Bird</option>
            <option value="rabbit">Rabbit</option>
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select name="breed" id="breed" disabled={!breeds?.length > 0}>
            <option value="0"></option>
            {breeds?.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <div>
          <button
            className="btn btn-primary"
            style={{ width: "150px", marginTop: "1rem" }}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="pets-container">
        <Results pets={pets} />
      </div>
    </div>
  );
}
