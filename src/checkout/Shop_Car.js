import { Link,useNavigate } from "react-router-dom";
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
var count = 0

function Hidden(){
    return (
        <div>
            <div className="" id ="">
                <h5>{count}</h5>
               
            </div>
            <Link to='/Check_type' className="btn1 " id =""><button className="btn1" id ="">下一步</button></Link>
        </div>
    )
}


function Show() {
    return(
        <h1>購物車裡沒有東西喔~</h1>
    )
}


function Shop_Car (props){
    
    const [id, setid] = useState([])
    
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
            
            
        })
        .catch(function (error) {
            console.log(error);
        });

    },[props.user.user])
    

    const changeHandler1 =(id) =>{
     
        axios({
            url: 'http://localhost:8080/api/v1/Shop_Car/addnum',
            method: "Put",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'id' : id
            }
        })
        .then(function (response) {
            console.log(response);
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
                
                
            })
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }

    const changeHandler2 =(id,number) =>{
       if(number === 1){
            const confirmBox = window.confirm(
                "Do you really want to delete this Crumb?"
            )
            if (confirmBox === true) {
                axios({
                    url: 'http://localhost:8080/api/v1/Shop_Car/del',
                    method: "Delete",
                    headers: {
                        'content-type': 'application/json'
                    },
                    params:{
                        'id' : id
                    }
                })
                .then(function (response) {
                    console.log(response);
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
                        
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
       }else{

       
            axios({
                url: 'http://localhost:8080/api/v1/Shop_Car/cutnum',
                method: "Put",
                headers: {
                    'content-type': 'application/json'
                },
                params:{
                    'id' : id
                }
            })
            .then(function (response) {
                console.log(response);
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
                    //console.log(...id);
                    
                  
             
                })
                .catch(function (error) {
                    console.log(error);
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
   
    

    return ( 

        <div className="car_flex">

        
            <div className="">
                
                <div class="list-group" style={{'width' : "50vw" }}>
                <p class="mb-1 text-end" style ={{display : 'none'}}>價格 : {count = 0}</p>
                
                
                {
                    id.map(
                         
                        id => 
                                
                                
                                <a class="list-group-item list-group-item-action" alt ="" disabled style ={{'height': "20vh"}}>
                                <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">商品編號 : {id.productid} </h5>
                                    
                                   
                                
                                </div>
                                <h5 class="mb-1"> {id.productName}</h5>
                                
                                <p class="mb-1 text-end" >價格 : {id.price * id.number}</p>
                                <p class="mb-1 text-end" style ={{display : 'none'}}>價格 : {count += (id.price * id.number)}</p>
                                <div class="flex_cut">
                                    <button class="btn-outline-success" style={{'height':"10%" , 'padding' : "10px"}} onClick ={() => changeHandler1(id.id)}>+</button>
                                    <h4>{id.number}</h4>
                                    <button class="btn-outline-success" onClick ={() => changeHandler2(id.id,id.number)}>-</button>
                                </div>
                                    
                            
                                </a>
                                
                            
                        
                        
                    )
                }
                </div>
                
            </div>
            {count === 0 ? <Show/>: <Hidden/>  }
             
            {/* <div className="hidden" id ="hidden">
                <h5>{count}</h5>
                
            </div>
            <Link to='/Check_type' className="btn1 hidden" id ="hidden"><button className="btn1" id ="hidden">下一步</button></Link> */}
           
        </div>
        


     );
}
 
export default Shop_Car;