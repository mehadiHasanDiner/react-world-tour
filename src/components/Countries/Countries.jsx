import React, { use, useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import {
  addIdToStoredCart,
  getStoreCart,
  removeFromCart,
} from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Countries = ({ countryPromise }) => {
  const countries = use(countryPromise);
  // console.log(countries);

  const [countriesVisited, setCountriesVisited] = useState([]);
  const [addToCart, setAddToCart] = useState([]);

  const handleCountriesVisited = (country) => {
    const newVisitedCountries = [...countriesVisited, country];
    setCountriesVisited(newVisitedCountries);
  };

  // useEffect
  useEffect(() => {
    const storedCartIds = getStoreCart();
    // console.log(storedCartIds, countries);

    const storedCartCountries = [];

    for (const id of storedCartIds) {
      const cartCountry = countries.find((country) => country.cca3 === id);
      if (cartCountry) {
        storedCartCountries.push(cartCountry);
      }
    }
    setAddToCart(storedCartCountries);
  }, [countries]);

  console.log(addToCart);

  const handleAddToCart = (country) => {
    const newCart = [...addToCart, country];
    setAddToCart(newCart);
    addIdToStoredCart(country.cca3);
    console.log(newCart);
  };

  const handleRemoveFromCart = (id) => {
    const remainingCart = addToCart.filter((cart) => cart.cca3 !== id);
    setAddToCart(remainingCart);
    removeFromCart(id);
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
      <p>Country added to the Cart: {addToCart.length}</p>
      <div className="cart">
        {addToCart.map((cart) => (
          <Cart
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            key={cart.cca3}
          ></Cart>
        ))}
      </div>

      <div className="countries">
        {countries.map((country) => (
          <Country
            handleAddToCart={handleAddToCart}
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
