
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";





const SellerProduct = (props) => {

    const [id, setid] = useState([])
    console.log(props.user2)
    useEffect(() =>{
        // getservice()
        axios({
            url: 'http://localhost:8080/api/v1/product/owner',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'owner':props.user.user2
            }
        })
        .then(function (res) {
            setid(res.data);
            console.log(res.data);
    
        })
        .catch(function (error) {
            console.log(error);
        });

    },[props.user.user2])

    return ( 
        <div>  
            <div id="info">
            <div>
                <img src="https://static.shoplineapp.com/web/assets/misc/product-review-default-avatar.svg" alt=""/>
                <div id="seller_info">
                    <h2>賣家:         </h2>
                    <h2>{props.user.user2}</h2>
     
                </div>
                </div>
            </div>
            <Link to="/AddProduct" className="btn1"><button className="btn1">新增商品</button></Link>
            <h2 style={{marginTop:"50px"}}>當前已上架的商品:</h2>
            <div id="products">
                
                {
                    id.map(
                        
                        id => 
                        <div>
                        <Link to='/ProductPage' state={{productid: id.id, introduce: id.introduce,name:id.name,price:id.price}}>
                            <div class="img-cover">
                                <img  src={ `data:image/jpeg;base64,${id.image}`}   resizeMode="" alt=""/>
                            </div>
                        </Link>
                            <div class="info">
                                <div class="seller">{id.owner} (owner)</div>
                                <div class="title">{id.name}</div>
                            </div>
                            <span style={{display: "flex"}}>
                            
                                <p className="card-text price" style={{marginLeft: "130px"}}>{id.price} 元</p>
                            </span>
                            
                            
                    </div>
                        
                        
                    )
                }
               
            </div>
        </div>
        
        
        


     );
}
 
export default SellerProduct;