
import './App.css';
import NavBar from './NavBar';
import NavBar_2 from './NavBar_2';
import Card from './Card';
import Car from './Car';
import Category from './Category';
import Content from './Content';
import ContentComponent from './components/Content_Component.js'
import AddProduct from './components/AddProduct.js'
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
            <Route path="/product" element={<ContentComponent/>}/>
            <Route path="/AddProduct" element={<AddProduct/>}/>

            

          </Routes>
      </div>
        
        
          

      
      </div>
    </Router>
  );
}

export default App;
