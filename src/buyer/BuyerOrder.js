import axios from 'axios';
import React from "react";
import { useEffect, useState } from "react";
import BuyerNav from './BuyerNav'
const BuyerOrder = (props) => {

    const [id, setid] = useState([])
    const [id2, setid2] = useState([])
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
         
        })
        .catch(function (error) {
            console.log(error);
            
        });
        
    }
   
    return ( 
        <div className="row_product " style={{display: 'flex',flexDirection: 'column'}}>
            <BuyerNav/>

            <h2>???????????????: </h2>
            <table class="table" style={{backgroundColor:"white" ,width:"80vw"}}>
                <thead style={{padding:"2px"}}>
                    <tr>
                   
                    <th scope="col">????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">??????????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">??????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">??????</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                        id.map(
                            
                            id => 
                                <tr>
                                <td>{id.id}</td>
                                <td>{id.address}</td>
                                <td>{id.type}</td>
                                <td>{id.pay_type}</td>
                                <td>{id.time}</td>
                                <td>{id.productid}</td>
                                <td>{id.productname}</td>
                                <td>{id.number}</td>
                                <td style={{color: 'red'}}>{id.state}</td>
                                <button class="btn btn-outline-success" onClick={() => changeHandler(id.id)}>????????????</button>
                                </tr>
                            )
                        }
                        
                    </tbody>
            </table>
            <h2>?????????:</h2>
            <table class="table" style={{backgroundColor:"white",width:"80vw"}}>
                <thead style={{padding:"2px"}}>
                    <tr>
                
                    <th scope="col">????????????</th>
                    
                   
                    <th scope="col">????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">??????????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">????????????</th>
                    <th scope="col">??????</th>
                    <th scope="col">??????</th>
                    </tr>
                </thead>
                    <tbody>
                        {
                        id2.map(
                            
                            id2 => 
                                <tr>
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