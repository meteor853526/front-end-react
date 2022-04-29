import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import NavBar_2 from './NavBar_2';
import Card from './Card'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (


    <Router>
      <div className="App">
      <NavBar />
        <NavBar_2 />
        <Card />

      
      </div>
    </Router>
  );
}

export default App;
