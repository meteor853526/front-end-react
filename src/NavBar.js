import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const styles = {
    backgroundColor: '#e3f2fd' 
}

const NavBar = (props) => {

    const user = props.user;
    // console.log(user.user);
    const stateURL = user.user? "/logout" :"/login"
    


    return ( 
        
        <div class="container-fluid" style={{backgroundColor: "#FF6100"}}>
            <div class="flex-row">
                <ul class="nav">
                    <h1>{user.user}</h1>

                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="#">賣家中心</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">Link</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="#">Link</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link disabled" to="#">Disabled</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/list_car">查看購物車</Link>
                    </li>
                </ul>

                <Link to={stateURL} class="navbar-brand">{stateURL}</Link>
            </div>
            <div class="flex-row">
                
                <Link to="/" class="navbar-brand">購物網</Link>
                <div class="">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ "width" : "100vh"}}></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>

                    <ul class="nav">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="#">Active</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Link</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Link</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link disabled" to="#">Disabled</Link>
                        </li>
                    </ul>
                </div>
                
            </div>
            
        </div>
      
    );
}
 
export default NavBar;