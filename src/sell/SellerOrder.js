
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";





const SellerOrder = (props) => {
    let history=useNavigate();
    const [id, setid] = useState([])
    const [id2, setid2] = useState([])
    console.log(props.user2)
    useEffect(() =>{
        // getservice()
        axios({
            url: 'http://localhost:8080/api/v1/Order/owner',
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
        
        axios({
            url: 'http://localhost:8080/api/v1/Order/ownerWait',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'owner':props.user.user2
            }
        })
        .then(function (res) {
            setid2(res.data);
            console.log(res.data);
    
        })
        .catch(function (error) {
            console.log(error);
        });
        

    },[props.user.user2])

    console.log(props.user.user2)

    const changeHandler =(id) =>{
        axios({
            url: 'http://localhost:8080/api/v1/Order/take',
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
                url: 'http://localhost:8080/api/v1/Order/owner',
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
         
            console.log(res);
            history('/SellerOrder')
        })
        .catch(function (error) {
            console.log(error);
            
        });
        
    }
   
    return ( 
        <div>
            <div id="info">
            <div>
                <img src="https://static.shoplineapp.com/web/assets/misc/product-review-default-avatar.svg" alt=""/>
                <div id="seller_info">
                    <h2>賣家:         </h2>
                    <h2>{props.user.user2}</h2>
     
                </div>
                </div>
            </div>
        
            <div className="row_product" style={{display: 'flex',flexDirection: 'column'}}>
                <h2>當前訂單</h2>
                <table class="table" style={{backgroundColor:"white" ,width:"90vw"}}>
                    <thead>
                        <tr>
                      
                        <th scope="col">訂單編號</th>
                        <th scope="col">購買者</th>
                        <th scope="col">名字</th>
                        <th scope="col">電話</th>
                        <th scope="col">收貨地址</th>
                        <th scope="col">送貨方式</th>
                        <th scope="col">結帳方式</th>
                        <th scope="col">訂單成立時間</th>
                        <th scope="col">商品編號</th>
                        <th scope="col">商品名稱</th>
                        <th scope="col">數量</th>
                        <th scope="col">訂單狀態</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    id.map(
                        
                        id => 
                            <tr>
                            
                            <td>{id.id}</td>
                            <td>{id.buyer}</td>
                            <td>{id.fname}{id.lname}</td>
                            <td>{id.phone}</td>
                            <td>{id.address}</td>
                            <td>{id.type}</td>
                            <td>{id.pay_type}</td>
                            <td>{id.time}</td>
                            <td>{id.productid}</td>
                            <td>{id.productname}</td>
                            <td>{id.number}</td>
                            <td style={{color: 'red'}}>{id.state}</td>
                            <button class="btn btn-outline-success" onClick={() => changeHandler(id.id)}>點擊出貨</button>
                            </tr>
                            
                        
                    )
                }
                        
                    </tbody>
                    </table>
                
                
            </div>
            <div className="row_product" style={{display: 'flex',flexDirection: 'column'}}>
                <h2>等待買方取貨</h2>
                <table class="table" style={{backgroundColor:"white" ,width:"90vw"}}>
                    <thead>
                        <tr>
                     
                        <th scope="col">訂單編號</th>
                        <th scope="col">購買者</th>
                        <th scope="col">名字</th>
                        <th scope="col">電話</th>
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
                         
                            <td>{id2.id}</td>
                            <td>{id2.buyer}</td>
                            <td>{id2.fname}{id2.lname}</td>
                            <td>{id2.phone}</td>
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
        </div>
        
        
        


     );
}
 
export default SellerOrder;