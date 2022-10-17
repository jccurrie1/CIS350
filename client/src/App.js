import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  // makes sure list changes whenever theres a change in the DB state 
  const [listOfIngredients, setListOfIngredients] = useState([]);
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(0);
  useEffect(() => {
    // Axios makes the API call to node server (get request)
    Axios.get("http://localhost:3001/getIngredients").then((response) => {
      setListOfIngredients(response.data);
    });
  }, []);
 // post request like thunder client straight to database
  const createIngredients = () => {
    Axios.post("http://localhost:3001/createIngredients", {
      name,
      priority,
    }).then((response) => {
      setListOfIngredients([
        ...listOfIngredients,
        {
          name,
          priority,
        },
      ]);
    });
  };

  return (
    <div className="App">
      <div className="Kitchen">
        {listOfIngredients.map((ingredient) => {
          return (
            <div>
              <h1>Name: {ingredient.name}</h1>
              <h1>Priority: {ingredient.priority}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <input type="text" placeholder="Name..."></input>
          {/*  calling create Ingredients function */}
          <button onClick={createIngredients} > Add Ingredient </button>
        </div>
      </div>
    </div>
  );
}

export default App;
