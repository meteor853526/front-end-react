
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";
const Buyer = (props) => {
    let history=useNavigate();
    const [id, setid] = useState([])
    console.log(props.user)
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
                console.log(res.data);
        
            })
            .catch(function (error) {
                console.log(error);
            });
         
            console.log(res);
            history('/buyer')
        })
        .catch(function (error) {
            console.log(error);
            
        });
        
    }
   
    return ( 
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
                        <button class="btn btn-outline-success" onClick={() => changeHandler(id.id)}>收貨</button>
                        </tr>
                        
                    
                )
            }
                    
                </tbody>
                </table>
            
            
        </div>
        
        
        


     );
}
export default Buyer;