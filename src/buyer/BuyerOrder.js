
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState,useRef  } from "react";
import BuyerNav from './BuyerNav'
const $ = require('jquery')
$.DataTable = require('datatables.net')
const BuyerOrder = (props) => {
    let history=useNavigate();
    const [id, setid] = useState([])
    const [id2, setid2] = useState([])
    console.log(props.user)
    const tableRef = useRef()
    
    

    useEffect(() =>{
        // getservice()
        axios({
            url: 'http://localhost:8080/api/v1/Order/buyer',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'buyer':props.user.user
            }
        })
        .then(function (res) {
            setid(res.data);
            console.log(id)
            console.log(res.data);
    
        })
        .catch(function (error) {
            console.log(error);
        });

        axios({
            url: 'http://localhost:8080/api/v1/Order/buyerWait',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'buyer':props.user.user
            }
        })
        .then(function (res) {
            setid2(res.data);
            console.log(id)
            console.log(res.data);
    
        })
        .catch(function (error) {
            console.log(error);
        });

    },[props.user.user])



    const changeHandler =(id) =>{
        axios({
            url: 'http://localhost:8080/api/v1/Order/receive',
            method: "Put",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'id' : id
            }
        })
        .then(function (res) {
            axios({
                url: 'http://localhost:8080/api/v1/Order/buyer',
                method: "GET",
                headers: {
                    'content-type': 'application/json'
                },
                params:{
                    'buyer':props.user.user
                }
            })
            .then(function (res) {
                setid(res.data);
          
        
            })
            .catch(function (error) {
                console.log(error);
            });
         
       
            //history('/buyer')
        })
        .catch(function (error) {
            console.log(error);
            
        });
        
    }
   
    return ( 
        <div className="row_product " style={{display: 'flex',flexDirection: 'column'}}>
            <BuyerNav/>
            




            <h2>賣家已出貨: </h2>
            <table class="table" style={{backgroundColor:"white" ,width:"80vw"}}>
                <thead style={{padding:"2px"}}>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">訂單編號</th>
                    
                   
                    <th scope="col">收貨地址</th>
                    <th scope="col">送貨方式</th>
                    <th scope="col">結帳方式</th>
                    <th scope="col">訂單成立時間</th>
                    <th scope="col">商品編號</th>
                    <th scope="col">商品名稱</th>
                    <th scope="col">數量</th>
                    <th scope="col">狀態</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                        id.map(
                            
                            id => 
                                <tr>
                                <th scope="row">1</th>
                                <td>{id.id}</td>
                                
                            
                                <td>{id.address}</td>
                                <td>{id.type}</td>
                                <td>{id.pay_type}</td>
                                <td>{id.time}</td>
                                <td>{id.productid}</td>
                                <td>{id.productname}</td>
                                <td>{id.number}</td>
                                <td style={{color: 'red'}}>{id.state}</td>
                                <button class="btn btn-outline-success" onClick={() => changeHandler(id.id)}>收貨</button>
                                </tr>
                                
                            
                        )
                    }
                        
                    </tbody>
            </table>
            <h2>未出貨:</h2>
            <table class="table" style={{backgroundColor:"white",width:"80vw"}}>
                <thead style={{padding:"2px"}}>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">訂單編號</th>
                    
                   
                    <th scope="col">收貨地址</th>
                    <th scope="col">送貨方式</th>
                    <th scope="col">結帳方式</th>
                    <th scope="col">訂單成立時間</th>
                    <th scope="col">商品編號</th>
                    <th scope="col">商品名稱</th>
                    <th scope="col">數量</th>
                    <th scope="col">狀態</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                        id2.map(
                            
                            id2 => 
                                <tr>
                                <th scope="row">1</th>
                                <td>{id2.id}</td>
                                
                            
                                <td>{id2.address}</td>
                                <td>{id2.type}</td>
                                <td>{id2.pay_type}</td>
                                <td>{id2.time}</td>
                                <td>{id2.productid}</td>
                                <td>{id2.productname}</td>
                                <td>{id2.number}</td>
                                <td style={{color: 'red'}}>{id2.state}</td>
                               
                                </tr>
                                
                            
                        )
                    }
                        
                    </tbody>
            </table>

    
            
            
            
        </div>
        
        
        


     );
}
export default BuyerOrder;