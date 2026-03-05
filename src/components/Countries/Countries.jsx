import React, { use } from "react";

const Countries = ({ countryPromise }) => {
  const countries = use(countryPromise);
  console.log(countries);

  return (
    <div className="card">
      <h1>Countries</h1>
    </div>
  );
};

export default Countries;
