import { Link } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";
import shop_service from "../services/shop_service";
import axios from 'axios';
import FormData from 'form-data'
import CheckType from "./Check_type";
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

const Shop_Car =(props)=> {
    
    const [id, setid] = useState([])
    const user = props.user;
    useEffect(() =>{
        // getservice()
        axios({
            url: 'http://localhost:8080/api/v1/Shop_Car',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
            'email':props.user.user
            }
        })
        .then(function (res) {
            setid(res.data);
            console.log(res.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    },[props.user.user])
    var data = {id};
    var path = {
        pathname:'/Check_type',
        state:id,
    }
    // const getservice = () =>{
    //     console.log(props.user)
    //     shop_service.getservice(props.user).then((response) =>{
    //         setid();
    //         console.log(response)
    //         console.log(response.data)
    //     })
        
    // }

    // axios({
    //     url: 'http://localhost:8080/api/v1/Shop_Car',
    //     method: "GET",
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     params:{
    //         'email':props.user.user
    //     }
    // })
    // .then(function (res) {
    //     setid(res.data);
    //     console.log(res);
    //     console.log("?????????????"+res.data.id);
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });


   


    return ( 
        <div className="row_product">
            
            

           
            <Link to={path} className="btn1"><button className="btn1">下一步</button></Link>
            {
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
            }
            
        </div>

        
        
        


     );
}
 
export default Shop_Car;