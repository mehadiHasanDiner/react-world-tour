import React, { useState } from "react";
import "./Country.css";

const Country = ({
  country,
  handleCountriesVisited,
  handleVisitedCountriesFlag,
}) => {
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

      <button onClick={() => handleVisitedCountriesFlag(country.flags?.png)}>
        Add Visited Country Flag
      </button>
    </div>
  );
};

export default Country;
