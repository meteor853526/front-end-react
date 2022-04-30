import { Link } from "react-router-dom";




const NavBar_2 = () => {
    return ( 
        <div className="container-fluid">
          <div className="flex-row">
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            <div className="navbar-btn">
              <button type="button">Danger</button>
            </div>
            <div className="navbar-btn">
              <button type="button">Danger</button>
            </div>
            <div className="navbar-btn">
              <button type="button" >Danger</button>
            </div>
            <div className="navbar-btn">
              <button type="button" >Danger</button>
            </div>
          </div>

      </div>
    );
}
 
export default NavBar_2;