
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
        <div>
            {
                id.map(
                    
                    id => 
                        <div className="container">
                        <div className="row">
                            <div className="col">
                            <div className="card" >
                                <img  src={ `data:image/jpeg;base64,${id.image}`}  style={{width:100, height:100}} resizeMode="cover" alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{id.id}</h5>
                                    <p className="card-text">{id.price}</p>
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