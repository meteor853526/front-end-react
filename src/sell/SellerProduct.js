
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
        <div className="row_product">
            {
                id.map(
                    
                    id => 
                        <div className="product_container" >
                            <div className="row product_row">
                                <div className="col">
                                <div className="card" >
                                    {/* <img  src={ `data:image/jpeg;base64,${id.image}`}  style={{width:100, height:100}} resizeMode="cover" alt=""/> */}
                                    <div className="card-body">
                                        
                                        <h5 className="card-title">{id.id} {id.name}</h5>
                                        <p className="card-text">{id.price}</p>
                                        <p className="card-text">{id.introduce}{id.type}</p>
                                       
                                        <p className="card-text">{id.number}</p>

                                        {/* <button className="btn1"  onClick={() => submitHandler(id.id,id.name)}>加入購物車</button> */}
                                    </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        <div className="">
                        <Link to="/AddProduct" className="btn1"><button className="btn1">增加</button></Link>
                        </div>
                    </div>
                    
                    
                )
            }
            
        </div>
        
        
        


     );
}
 
export default SellerProduct;