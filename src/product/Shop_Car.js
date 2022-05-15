import { Link } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";
import shop_service from "../services/shop_service";
import axios from 'axios';
import FormData from 'form-data'


const Shop_Car =(props)=> {
    
    const [id, setid] = useState([])
    const user = props.user;
    // useEffect(() =>{
    //     getservice()
    // },[])
    
    // const getservice = () =>{
        
    //     const {data:response } = shop_service.getservice()
    //     .then((response) =>{
    //         // for( var i in response.data){
    //         //     y.push( response.data[i]);
    //         //    }
    //         setid();
    //         console.log(response)
    //         console.log(response.data)
    //     })
    //     console.log(response)
    // }

    axios({
        url: 'http://localhost:8080/api/v1/Shop_Car/listcar',
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        params:{
            'email':props.user.user
        }
    })
    .then(function (res) {
        setid(res.data);
        console.log(res);
        console.log("?????????????"+res.data.id);
    })
    .catch(function (error) {
        console.log(error);
    });


   


    return ( 
        <div className="row_product">
            {/* {
                id.map(
                    id => 
                            <div class="list-group">
                            <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{id.productid}</h5>
                                <small>3 days ago</small>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small>And some small print.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small class="text-muted">And some muted small print.</small>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">List group item heading</h5>
                                <small class="text-muted">3 days ago</small>
                            </div>
                            <p class="mb-1">Some placeholder content in a paragraph.</p>
                            <small class="text-muted">And some muted small print.</small>
                            </a>
                        </div>
                    
                    
                )
            } */}
            
        </div>
        
        
        


     );
}
 
export default Shop_Car;