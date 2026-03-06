import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countryPromise }) => {
  const countries = use(countryPromise);
  // console.log(countries);

  const [countriesVisited, setCountriesVisited] = useState([]);
  const [visitedCountriesFlag, setVisitedCountriesFlag] = useState([]);

  const handleCountriesVisited = (country) => {
    const newVisitedCountries = [...countriesVisited, country];
    setCountriesVisited(newVisitedCountries);
  };

  const handleVisitedCountriesFlag = (visitedFlags) => {
    const newVisitedFlags = [...visitedCountriesFlag, visitedFlags];
    setVisitedCountriesFlag(newVisitedFlags);
    console.log(newVisitedFlags);
  };

  return (
    <div>
      <h2>Traveling Countries: {countries.length}</h2>
      <h3>Traveled so far: {countriesVisited.length} </h3>
      <ol style={{ textAlign: "left" }}>
        {countriesVisited.map((visitCountry) => (
          <li>{visitCountry?.name?.common}</li>
        ))}
      </ol>
      <div>
        {visitedCountriesFlag.map((visitedFlag, index) => (
          <img
            key={index}
            style={{ width: "100px" }}
            src={visitedFlag}
            alt=""
          />
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedCountriesFlag={handleVisitedCountriesFlag}
            handleCountriesVisited={handleCountriesVisited}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
