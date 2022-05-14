
import { useEffect, useState } from "react";
import React from 'react';
import testservice from '../services/testservice';
import { Link } from "react-router-dom";
import axios from 'axios';

const Product_component =(props)=> {
    const user = props.user;
    const email = user.user;
    const [id, setid] = useState([])
    const [productid, setproductid] = useState([])
    useEffect(() =>{
        getservice()
    },[])

    const getservice = () =>{
        
        testservice.getservice().then((response) =>{
            setid(response.data);
            console.log(response.data)
        })
    }


    const submitHandler =(id) =>{
       

        
        
        axios({
            url: 'http://localhost:8080/api/v1/Shop_Car/addcar',
            method: "POST",
            
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'email':props.user,
                'productid':id

            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }


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

                                        <button className="btn1"  onClick={() => submitHandler(id.id)}>加入購物車</button>
                                    </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        <div className="">
                        
                        </div>
                    </div>
                    
                    
                )
            }
            
        </div>
        
        
        


     );
}
 
export default Product_component;