import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

function App() {
  <div>
    <BrowserRouter>
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
  </div>
}

  

export default App;
