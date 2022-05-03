
import './App.css';
import NavBar from './NavBar';
import NavBar_2 from './NavBar_2';
import Card from './Card';
import Car from './Car';
import Category from './Category';
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
        {/* <NavBar_2 /> */}
        <Car />
          <div className="" style={{backgroundColor:"#c7c7c7"}}>
            <Category />
          </div>
          

      
      </div>
    </Router>
  );
}

export default App;
