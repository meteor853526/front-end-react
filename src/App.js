
import './App.css';
import NavBar from './NavBar';
import NavBar_2 from './NavBar_2';
import Card from './Card';
import Car from './Car';
import Category from './Category';
import Content from './Content';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (


    <Router>
      <div className="App">
      <NavBar />
        {/* <NavBar_2 /> */}
      <div className="content">
          <Routes>
          
            <Route path="/" element={<Car/>}/>
            <Route path="/product" element={<Content/>}/>

            

          </Routes>
      </div>
        
        
          

      
      </div>
    </Router>
  );
}

export default App;
