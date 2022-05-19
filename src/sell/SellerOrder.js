
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";





const SellerOrder = (props) => {

    const [id, setid] = useState([])
    console.log(props.user)
    useEffect(() =>{
        // getservice()
        axios({
            url: 'http://localhost:8080/api/v1/Order/owner',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'owner':props.user.user
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

    return ( 
        <div className="row_product">
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
                        <td>{id.Fname}{id.Lname}</td>
                        <td>{id.buyer}</td>
                        </tr>
                    
                    
                )
            }
                    
                </tbody>
                </table>
            
            
        </div>
        
        
        


     );
}
 
export default SellerOrder;