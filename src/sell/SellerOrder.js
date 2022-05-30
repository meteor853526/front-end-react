
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";





const SellerOrder = (props) => {
    let history=useNavigate();
    const [id, setid] = useState([])
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

    },[props.user.user])



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
        
        <div className="row_product">
            <h1>當前訂單</h1>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
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
                id.map(
                    
                    id => 
                        <tr>
                        <th scope="row">1</th>
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
                        <button class="btn btn-outline-success" onClick={() => changeHandler(id.id)}>出貨</button>
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