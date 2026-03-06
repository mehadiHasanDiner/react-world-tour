import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

function App() {
  const countryPromise = fetch(
    "https://restcountries.com/v3.1/independent"
  ).then((res) => res.json());

  // const countriesData = countryPromise();

  return (
    <>
      <Suspense fallback={<h4>Countries data loading....</h4>}>
        <Countries countryPromise={countryPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
