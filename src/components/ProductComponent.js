
import { useEffect, useState } from "react";
import React from 'react';
import testservice from '../services/testservice';
import { Link } from "react-router-dom";

function Product_component() {
    
    const [id, setid] = useState([])

    useEffect(() =>{
        getservice()
    },[])

    const getservice = () =>{
        
        testservice.getservice().then((response) =>{
            setid(response.data);
            console.log(response.data)
        })
    }
    return ( 
        <div className="product_row">
            {
                id.map(
                    
                    id => 
                        <div className="container product_container" >
                            <div className="row product_row">
                                <div className="col">
                                <div className="card" >
                                    {/* <img  src={ `data:image/jpeg;base64,${id.image}`}  style={{width:100, height:100}} resizeMode="cover" alt=""/> */}
                                    <div className="card-body">
                                        <h5 className="card-title">{id.id} {id.name}</h5>
                                        <p className="card-text">{id.price}</p>
                                        <p className="card-text">{id.introduce}</p>
                                        <p className="card-text">{id.type}</p>
                                        <p className="card-text">{id.number}</p>

                                        <Link to="#" className="btn1"><button className="btn1">Sign in</button></Link>
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