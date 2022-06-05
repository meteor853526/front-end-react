import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const styles = {
    backgroundColor: '#e3f2fd' 
}

const NavBar = (props) => {

    const user = props.user;
    const user2 = props.tp;
    // console.log(user.user);
    const stateURL = user.user? "/logout" :"/login"
    
    

    const [url , seturl ] = useState("/list_car")
    
    const check = () =>{
        if(user.user == null){
            seturl("/product")
            alert("請先登入會員")
        }else{
            seturl("/list_car")
        }
    }


    return ( 
            <nav>
                <a href="/" class="index">
                    <img src={require('./img/icon.png')} alt=""/>
                </a>
                <div class="index wrap_bar">
                    <Link to="/product" alt="" class="index">商店</Link>
                    <Link class="index" to={url} onClick={check}>查看購物車</Link>
                    {/* <a href="/list_car" alt="" class="index">購物車</a> */}
                    <Link to="/BuyerOrder" alt="" class="index"onClick={check}>訂單查詢</Link>
                </div>
                
                <div class="nav-menu">
                    <form action="/index.html" class="search">
                        <input type="text" id="search" name="search"/>
                        <input type="submit" id="submit"/>
                        <label for="submit"><img src={require('./img/magnifying-glass.png')} alt=""/></label>
                    </form>
                    <ul class="drop-down-menu">

                    
                        <li>
                            <a href="/">
                            <img class="user-img" src="https://static.shoplineapp.com/web/assets/misc/product-review-default-avatar.svg" alt=""/>
                            
                            <span>{user.user? user.user: "登入"}</span>
                            </a>
                            <ul>
                                <li className="drop"><a href="/login">會員登入</a>
                                </li>
                                <li className="drop"><a href="/loginSeller">賣家登入</a>
                                </li>
                                
                            </ul>

                        </li>

                    </ul>
                </div>
            </nav>
      






        
        // <div class="container-fluid" style={{backgroundColor: "#FF6100"}}>
        //     <div class="flex-row">
        //         <ul class="nav">
        //             <h1>{user.user} {user2.user2}</h1>

        //             <li class="nav-item">
        //                 <Link class="nav-link active" aria-current="page" to="/loginSeller">賣家中心</Link>
        //             </li>
        //             <li class="nav-item">
        //                 <Link class="nav-link" to="/buyerCenter" >買家中心</Link>
        //             </li>
        //             <li class="nav-item">
        //                 <Link class="nav-link" to="/BuyerOrder">查詢訂單</Link>
        //             </li>
        //             <li class="nav-item">
        //                 <Link class="nav-link disabled" to="#">Disabled</Link>
        //             </li>
        //             <li class="nav-item">
        //                 <Link class="nav-link" to={url} onClick={check}>查看購物車</Link>
        //             </li>
        //         </ul>

        //         <Link to={stateURL} class="navbar-brand">{stateURL}</Link>
        //     </div>
        //     <div class="flex-row">
                
        //         <Link to="/" class="navbar-brand">購物網</Link>
        //         <div class="">
        //             <form class="d-flex">
        //                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ "width" : "100vh"}}></input>
        //                 <button class="btn btn-outline-success" type="submit">Search</button>
        //             </form>

        //             <ul class="nav">
        //                 <li class="nav-item">
        //                     <Link class="nav-link active" aria-current="page" to="#">Active</Link>
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link class="nav-link" to="#">Link</Link>
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link class="nav-link" to="#">Link</Link>
        //                 </li>
        //                 <li class="nav-item">
        //                     <Link class="nav-link disabled" to="#">Disabled</Link>
        //                 </li>
        //             </ul>
        //         </div>
                
        //     </div>
            
        // </div>
      
    );
}
 
export default NavBar;