import {useState} from 'react';
import './App.css';

function App() {
  const [name, setName]= useState("")
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  return (
    <div>
      <h1> Register </h1>
      <form>
        <input 
        value={name}type="name"
        onchange={e => setName(e.target.value)} 
        placeholder="Name"/><br />
        <input 
        value={email}
        onchange={e => setEmail(e.target.value)}
        type="email" 
        placeholder ="Email"/><br />
        <input 
        value={password}
        onchange={e => setPassword(e.target.value)}
        type="passoword" 
        placeholder ="Password"
        />
        <input type="submit" value= "Register" />
      </form>
    </div>
  );
 
}

export default App;
