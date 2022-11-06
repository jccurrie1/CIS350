import React from "react";
import Axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import NavBar from "./components/NavBar";


const Home = () => {
    const [listOfIngredients, setListOfIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  const [shelfLife, setShelfLife] = useState("");

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
    }).then(() => {
      setListOfIngredients([
        ...listOfIngredients,
        {
          ingredient,
          shelfLife,
        },
      ]).catch(function (error) {
        console.log(error);
      });
    });
  };

  const handleDeleteClick = (ingredient) => {
    Axios.delete("http://localhost:3001/deleteIngredients").then(res => {
      setListOfIngredients([listOfIngredients]);
      // refresh table so that it is dynamic
      Axios.get("http://localhost:3001/getIngredients").then((response) => {
        setListOfIngredients(response.data);
      });
    })
  }

  return (
    <div className="App">
      <div className="Kitchen">
        {/* <NavBar> </NavBar> */}
        <div>
          <div className='form'>
            <input type="text" placeholder="Ingredient..." onChange={(event) => {
              setIngredient(event.target.value);
            }}></input>
            {/*  calling create Ingredients function */}
            <input type="date" onChange={(event) => {
              setShelfLife(event.target.value);
            }} ></input>
            <button onClick={createIngredients}>Add</button>
          </div>
          <table class="table table-bordered border-primary table-light" id="addRow">
            <thead>
              <tr>
                <th scope="col">Ingredient</th>
                <th scope="col">Shelf Life</th>
                <th scope="col">Delete Row</th>
              </tr>
            </thead>
            <tbody>
              {/* "ingredients" come from backend through axios */}
              {listOfIngredients.map((ingredients) => {
                return (
                  <tr key={ingredient.id}>
                    <td>{ingredients.ingredient}</td>
                    <td>{ingredients.shelfLife}</td>
                    <td><button type="button" onClick={() => handleDeleteClick(ingredients)}>Delete</button></td>
                  </tr>
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

export default Home;