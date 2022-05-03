import { Link } from "react-router-dom";


const styles = {
    backgroundColor: '#e3f2fd' 
}

const NavBar = () => {
    return ( 
        
        <div class="container-fluid" style={{backgroundColor: "#FF6100"}}>
            <div class="flex-row">
                <ul class="nav">
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
                </ul>
            </div>
            <div class="flex-row">
                
                <Link to="#" class="navbar-brand">購物網</Link>
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