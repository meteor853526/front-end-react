
import './App.css';
import NavBar from './NavBar';
import NavBar_2 from './NavBar_2';
import Card from './Card';
import Car from './Car';
import Category from './Category';
import Content from './Content';
import ContentComponent from './product/Content_Component.js'
import AddProduct from './product/AddProduct.js'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {useSelector} from 'react-redux';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const state = useSelector(state => state.UserReducer);
  return (
    <div className="App">
      <header className="App-header">

      <Router>
        <NavBar />
        <div className="content">
          <Routes>
              <Route path="/" element={<Car/>}/>
              <Route path="/product" element={<ContentComponent/>}/>
              <Route path="/AddProduct" element={<AddProduct/>}/>

              <Route path="/login" element={state.user ? <Home/> : <Login/>}>
              {/* {users ? <Home/> : <Login/>} 
              {state.user ? <Home/> : <Login/> } */}
              </Route>
              <Route path="/Register"element={<Register/>} >
                
                
              </Route>
          </Routes>
        </div>
      </Router>

      </header>
    </div>
  );
}

export default App;
