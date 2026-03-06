import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleCountriesVisited, handleAddToCart }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
    handleCountriesVisited(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Country name: {country?.name?.common}</h3>
      <img src={country.flags?.png} alt="" />
      <p>Independent: {country.independent ? "Free" : "Not Free"}</p>
      <p>Population: {country.population}</p>
      <button
        className={visited ? "btn-visited" : "btn-not-visited"}
        onClick={handleVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>

      <button onClick={() => handleAddToCart(country)}>Add Flag to Cart</button>
    </div>
  );
};

export default Country;
