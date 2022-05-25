
//import './App.css';
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
import ShopCar from './checkout/Shop_Car';
import CheckType from './checkout/Check_type';
import DataPage from './checkout/Data_page';
import LoginSeller from './components/LoginSeller/LoginSeller';
import RegisterSeller from './components/RegisterSeller/RegisterSeller'
import Seller from './sell/Seller.js'
import SellerProduct from './sell/SellerProduct';
import SellerOrder from './sell/SellerOrder';
import Buyer from './buyer/Buyer'
import BuyerCenter from './buyer/BuyerCenter'
import BuyerOrder from './buyer/BuyerOrder'
import ListComment from './product/ListComment'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {

  const state = useSelector(state => state.UserReducer);
  const state2 = useSelector(state2 => state2.UserReducer2);
  return (
    <div className="App">
      <header className="App-header">

      <Router>
        <NavBar user={state} tp={state2}/>
        <div className="all">
          
          <Routes>
              <Route path="/" element={<Car/>}/>
              <Route path="/product" element={<ContentComponent user={state}/>}/>
              <Route path="/AddProduct" element={<AddProduct user={state2}/> }/>
              <Route path="/ListComment" element={<ListComment/>}/>

              <Route path="/Seller" element={state2.user2 ? <Seller/> : <LoginSeller/>}/>
              <Route path="/BuyerOrder" element={state.user ? <BuyerOrder user={state}/> : <Login/>}/>
              <Route path="/buyer" element={state.user ? <Buyer user={state}/> : <Login/>}/>
              <Route path="/buyerCenter" element={state.user ? <BuyerCenter user={state}/> : <Login/>}/>
              <Route path="/SellerProduct" element={<SellerProduct user={state2}/>}/>
              <Route path="/SellerOrder" element={<SellerOrder user={state2}/>}/>

              <Route path="/loginSeller" element={state2.user2 ?  <Seller/> : <LoginSeller/> } />

              <Route path="/RegisterSeller" element={<RegisterSeller/>} />
              <Route path="/Check_type" element={<CheckType/>}/>
              <Route path="/Data_page" element={<DataPage  user={state} />}/>

              <Route path="/login" element={state.user ? <Home/> : <Login/>}/>
              <Route path="/list_car" element={state.user ? <ShopCar user={state}/>  : <Login/>}/>
              {/* <NavBar user={state}/> */}
              {/* {users ? <Home/> : <Login/>} 
              {state.user ? <Home/> : <Login/> } */}

              
              <Route path="/Register"element={<Register/>} />
                
                
              
          </Routes>
        </div>
      </Router>

      </header>
    </div>
  );
}

export default App;
