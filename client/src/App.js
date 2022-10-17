import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState, useEffect, Component } from "react";
import Axios from "axios";

function App() {
  const [listOfIngredients, setListOfIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [shelfLife, setShelfLife] = useState(0);

  useEffect(() => {
    // Axios makes the API call to node server (get request)
    Axios.get("http://localhost:3001/getIngredients").then((response) => {
      setListOfIngredients(response.data);
    });
  }, []);
  // post request like thunder client straight to database
  const createIngredients = () => {
    Axios.post("http://localhost:3001/createIngredients", {
      ingredient,
      shelfLife,
    }).then((response) => {
      setListOfIngredients([
        ...listOfIngredients,
        {
          ingredient,
          shelfLife,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="Kitchen">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Wasted</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="#">Login</a>
            </div>
          </div>
        </nav>
        <div>
          <input type="text" placeholder="Ingredient..."></input>
          {/*  calling create Ingredients function */}
          <button onClick={createIngredients} > Add Ingredient </button>
          <input type="text" placeholder="Shelf Life..."></input>
          <button onClick={createIngredients} > Add Shelflife </button>
          <div>
            
          </div>
          <table class="table table-bordered border-primary table-light" id="addRow">
            <thead>
              <tr>
                <td>Ingredient</td>
                <td>Shelf Life</td>
              </tr>
            </thead>
            <tbody>
            {listOfIngredients.map((ingredients) => {
              return (
                <div>
                  <tr>
                    <td>{ingredients.ingredient}</td>
                    <td>{ingredients.shelfLife}</td>
                  </tr>
                </div>
              );
            })}
            </tbody>
          </table>


        </div>
      </div>
    </div>
  );
}

// bootstrap
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
  integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
  crossorigin="anonymous"></link>

export default App;
