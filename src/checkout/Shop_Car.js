import { Link} from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";

import axios from 'axios';

var count = 0

function Hidden(){
    return (
        <div className="all_price" >
            <div className=""  style ={{ marginTop:'10px'}}>
                <h2>總價格: {count}</h2>
               
            </div>
            <Link to='/Check_type' className="btn1 " style ={{ marginTop:'10px'}}><button className="btn1" id ="">前往選擇結帳方式</button></Link>
        </div>
    )
}


function Show() {
    return(
        <h2>您的購物車裡還沒有任何商品。</h2>
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
                "你確定要刪除這項商品嗎?"
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

            <h1>購物車</h1>
        
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
                                    <p class="mb-1 text-end"style={{ 'padding' : "1px"}} >價格 : {id.price * id.number}</p>
                                    <div style={{ display:'flex'}}>
                                        
                                        <p class="mb-1 text-end" style ={{display : 'none'}}>價格 : {count += (id.price * id.number)}</p>
                                        <div class="flex_cut">
                                            <button class="btn-danger"  onClick ={() => changeHandler1(id.id)}>+</button>
                                            <h4 style={{marginLeft:'10px'}} >{id.number}</h4>
                                            <button class="btn-danger" style={{marginLeft:'10px'}} onClick ={() => changeHandler2(id.id,id.number)}>-</button>
                                        </div>
                                    </div>
                                    
                                        
                                
                                    </a>
                                    
                                
                            
                            
                        )
                    }

                    {count === 0 ? <Show/>: <Hidden/>  }
                </div>
                
            </div>
            
             
            {/* <div className="hidden" id ="hidden">
                <h5>{count}</h5>
                
            </div>
            <Link to='/Check_type' className="btn1 hidden" id ="hidden"><button className="btn1" id ="hidden">下一步</button></Link> */}
           
        </div>
        


     );
}
 
export default Shop_Car;