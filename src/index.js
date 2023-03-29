import ReactDOM from "react-dom";
import App from "./App";

(async function () {
  const url =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  const apiResponse = await fetch(url);
  const jsonData = await apiResponse.json();
  const rootElement = document.getElementById("root");
  ReactDOM.render(<App dataset={jsonData} />, rootElement);
})();
