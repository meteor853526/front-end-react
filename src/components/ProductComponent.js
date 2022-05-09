import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react';
import testservice from '../services/testservice';



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
                                <img src={id.image} alt="Background"/>
                                <div className="card-body">
                                    <h5 className="card-title">{id.id}</h5>
                                    <p className="card-text">{id.name}</p>
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