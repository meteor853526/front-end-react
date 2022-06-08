import axios from 'axios';
import React from "react";
import { useEffect, useState,useRef  } from "react";
import BuyerNav from './BuyerNav'
import moment from 'moment';

import ReactStars from "react-rating-stars-component";
const $ = require('jquery')
$.DataTable = require('datatables.net')
const Buyer = (props) => {
    
    console.log(props.user.user)
    const [id, setid] = useState([])
    const [orderid, setorderid] = useState()
    const [value, setvalue] =useState(-1)
    const [star, setstar] = useState(0)
    const [content, setcontent] = useState()
  
    const tableRef = useRef()
    

    
    useEffect(() =>{

        axios({
            url: 'http://localhost:8080/api/v1/Order/history',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'buyer':props.user.user
            }
        })
        .then(function (res) {
           
            console.log(res.data)
            console.log("??" + props.user.user)
            setid(res.data);
            
        })
        .catch(function (error) {
            console.log(error);
        });
        
    },[])

    var count = -1;
     $(tableRef.current).DataTable({
            
                data: id,
                columns: [
                    { title: "訂單編號"},
                    { title: "商品編號"},
                    { title: "商品名稱"},
                    { title: "配送方式"},
                    { title: "結帳方式"},
                    { title: "數量"},
                    { title: "日期"},
                    { title: "狀態"},
                    { data : "評論",
                        render:function(data,type,row){
                            
                      
                            count++;
                            count = (count) % id.length
                            
                            if(id[count][7] === "買方已收貨"){

                              
                                return '<button id="'+id[count][0]+'" type="button" value="'+id[count][1]+'"class="btn btn-primary some-class" data-bs-toggle="modal" data-bs-target="#exampleModal">填寫評論</button>'
                            }else{
                                return '<h6 style={{color: "red"}}>訂單完成</h6>'
                            }
                            
                            
                        }
                    }
                ],
                
                
                destroy: true  // I think some clean up is happening here
                
        },
        $(document).on('click', '.some-class', function(event){ 
        
            setorderid(event.target.id)
            setvalue(event.target.value)
          
        }),
    
    )


    const submitHandler = () =>{
        
        
        axios({
            url: 'http://localhost:8080/api/v1/Comment',
            method: "Post",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'id': orderid,
                'productid' :value ,
                'buyer':props.user.user,
                'star' : star,
                'content' : content,
                'time' : moment().format('YYYY-MM-DD'),
            }
        })
        .then(function (res) {
            alert('填寫成功')
            axios({
                url: 'http://localhost:8080/api/v1/Order/history',
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
         
            console.log(res);

        })
        .catch(function (error) {
            console.log(error);
            
        });
    }
    const ratingChanged = (newRating) => {
        console.log(newRating);
        setstar(newRating)
      };

    
    
    return ( 
        <div>
            
            <div className="">
            
            <h5>歷史訂單</h5>
            <BuyerNav/>
            <div style={{backgroundColor:"white" ,width:"85vw", margin:"15px"}}>
                <table className="display" width="85vw" style={{backgroundColor:"white" ,width:"80vw"}} ref={ tableRef }></table>
            </div>
            <button type="button" style={{display:"none"}}>
                nothing
            </button>

           
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">填寫商品評論</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                    />
                    <h6>填寫評論</h6>
                <textarea value ={content}onChange={(e)=>{setcontent(e.target.value)}}></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary"  onClick={submitHandler} data-bs-dismiss="modal">Save changes</button>
                </div>
                </div>
            </div>
            </div>




            {/* <table class="table">
                <thead>
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
                </table> */}
            
            
            </div>
        </div>
        
        
        
        


     );
}
export default Buyer;