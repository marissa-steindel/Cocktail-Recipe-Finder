import React, { useState } from "react";
import "mvp.css";
import "./styles.css";

/*
Requirements:
1. import mvp.css
2. fetch a dataset 
3. bind data with: useState(), onClick, onChange
4. destructure properties object into variables
4. destructure return value of useState() function into getter and setter variables
5. minimum 2 <Components /> plus <App />
6. CSS with style object
6. CSS with className attribute and onCLick toggle variable
 */

function AddToFavourites() {
  const [favouriteStatus, setFavouriteStatus] = useState(false);
  const buttonClass = favouriteStatus ? "favourite" : "ordinary";
  const buttonText = favouriteStatus ? "💓" : "⭐ Add to Favourites";
  const buttonWidth = { width: "225px" };

  return (
    <button
      className={buttonClass}
      onClick={() => setFavouriteStatus(!favouriteStatus)}
      style={buttonWidth}
    >
      {buttonText}
    </button>
  );
}

function Output({ searchResult, userInput }) {
  // console.log(searchResult);
  // console.log(searchResult.drinks[0].strIngredient1);

  // const [count, setCount] = useState(1);

  if (searchResult.drinks === null) {
    return <p>No results for '{userInput}' found. Try again.</p>;
  }
  // styling applied with inline style object
  const imgStyle = { width: "225px" };

  return (
    <>
      <p>You searched for '{userInput}'.</p>
      <div>
        <h3>
          Here is how to make a{" "}
          <strong>{searchResult.drinks[0].strDrink}</strong>
        </h3>
        <AddToFavourites />
      </div>
      <img
        src={searchResult.drinks[0].strDrinkThumb}
        alt={searchResult.drinks[0].strDrink}
        style={imgStyle}
      ></img>

      <h4>Ingredients:</h4>
      <p>
        {searchResult.drinks[0].strMeasure1}{" "}
        {searchResult.drinks[0].strIngredient1}
      </p>
      <p>
        {searchResult.drinks[0].strMeasure2}{" "}
        {searchResult.drinks[0].strIngredient2}
      </p>
      <p>
        {searchResult.drinks[0].strMeasure3}{" "}
        {searchResult.drinks[0].strIngredient3}
      </p>
      <p>
        {searchResult.drinks[0].strMeasure4}{" "}
        {searchResult.drinks[0].strIngredient4}
      </p>
      <p>
        {searchResult.drinks[0].strMeasure5}{" "}
        {searchResult.drinks[0].strIngredient5}
      </p>
      <p>
        {searchResult.drinks[0].strMeasure6}{" "}
        {searchResult.drinks[0].strIngredient6}
      </p>
      <p>
        {searchResult.drinks[0].strMeasure7}{" "}
        {searchResult.drinks[0].strIngredient7}
      </p>
      <p>
        {searchResult.drinks[0].strMeasure8}{" "}
        {searchResult.drinks[0].strIngredient8}
      </p>

      {/* <Ingredients measure={searchResult.drinks[0].strMeasure} ingredient={searchResult.drinks[0].strIngredient} key={i}/> */}

      <h4>Instructions:</h4>
      <p>{searchResult.drinks[0].strInstructions}</p>
    </>
  );
}

function Ingredients({ measure }) {}

export default function App({ dataset }) {
  const [userInput, setUserInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";
  const url = `${baseUrl}?s=${userInput}`;

  function ClearData(e) {
    e.preventDefault();
    setSearchResult("");
    setUserInput("");
  }

  function ExecuteFetch(e) {
    e.preventDefault();

    fetch(url)
      .then((response) => response.json())
      .then((json) => setSearchResult(json));
  }

  return (
    <>
      <form>
        <h3>What cocktail would you like to make?</h3>
        <p>Cocktail names are pretty extensive. Get creative. </p>
        <input
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        ></input>
        <button onClick={ExecuteFetch}>Search</button>
        {userInput !== "" && <button onClick={ClearData}>Clear</button>}
      </form>

      {searchResult !== "" && (
        <Output searchResult={searchResult} userInput={userInput} />
      )}
    </>
  );
}
