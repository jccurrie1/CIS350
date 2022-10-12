import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
function App() {
  const [listOfIngredients, setListOfIngredients] = useState([]);
  useEffect(() => {
    //TODO: get local host name
    Axios.get("http://localhost:3001/").then((response) => {
      setListOfIngredients(response.data);
    });
  }, []);
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
      
    </div>
  );
}
export default App;
