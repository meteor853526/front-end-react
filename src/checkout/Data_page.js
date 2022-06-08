import { useLocation,useNavigate } from "react-router-dom";
import React from "react";
import axios from 'axios';

import moment from 'moment';
import { useEffect, useState } from "react";


const DataPage = (props) => {
    const location = useLocation()
    let history=useNavigate();
    const { pay_type, delivery_type} = location.state
    const [Fname, setFname] = useState()
    const [Lname, setLname] = useState()
    const [phone, setphone] = useState()
    const [address, setaddress] = useState()
 
    var count = 0
    

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
            console.log(res.data);
    
        })
        .catch(function (error) {
            console.log(error);
        });

    },[props.user.user])
    
    
    
    const check =()=> {
       
        if(Fname === '' || Lname === '' || phone === '' || address === ''){
            alert('表單請填完整')
        }
    }
    
    
    const submitHandler =(e) =>{
        
        e.preventDefault();
        axios({
            url: 'http://localhost:8080/api/v1/Order/take',
            method: "GET",
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'email' : props.user.user,
                'Fname':Fname,
                'Lname':Lname,
                'phone':phone,
                'address':address,
                'delivery_type':delivery_type,
                'pay_type':pay_type,
                'time':moment().format('YYYY-MM-DD HH:mm:ss'),
            }
        })
        .then(function (response) {
            console.log(response);
            alert("訂單成功建立")
            history('/BuyerOrder')
        })
        .catch(function (error) {
            console.log(error);
        });
        
    }
   
    
       
        
        return ( 
            <div class="data_page" style={{width:"40vw"}}>
                
                {/* <h1>{this.props.pay_type}</h1> */}
                <label for="basic-url" class="form-label"><h2>名字</h2></label>
                <div class="input-group mb-3">
                    
                <span class="input-group-text" id="basic-addon1">姓氏</span>
                <input type="text" class="form-control" placeholder="姓氏" value={Fname}aria-label="Username" aria-describedby="basic-addon1"onChange={e => setFname(e.target.value)}/>
                
                </div>
                {/* <h1>{moment().format('YYYY-MM-DD HH:mm:ss')}</h1> */}
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">名字</span>
                <input type="text" class="form-control" placeholder="名字"value={Lname} aria-label="Recipient's username" aria-describedby="basic-addon2"onChange={e => setLname(e.target.value)}/>
                {/* <span class="input-group-text" id="basic-addon2"></span> */}
              
                </div>

                <label for="basic-url" class="form-label"><h2>聯絡資訊及地址</h2></label>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">手機號碼</span>
                <input type="text" class="form-control" id="basic-url" value={phone}aria-describedby="basic-addon3"onChange={e => setphone(e.target.value)}/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text">收貨地址</span>
                <input type="text" class="form-control" value={address}aria-label="Amount (to the nearest dollar)"onChange={e => setaddress(e.target.value)}/>
                {/* <span class="input-group-text"></span> */}
                </div>

                {/* <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
                </div>

                <div class="input-group">
                <span class="input-group-text">With textarea</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
                </div> */}
                {/* <!-- Button trigger modal --> */}
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={check}>
                點擊送出
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div id = "switch" class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="staticBackdropLabel">訂單</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <p class="mb-1 text-end" style ={{display : 'none'}}>價格 : {count = 0}</p>
                        <div class="modal-body">
                            <h2>名字: {Fname}{Lname}</h2>
                            <h2>地址: {address}</h2>
                            <h2>電話: {phone}</h2> 
                            <h2>結帳方式: {pay_type}</h2>
                            <h2>運送方式: {delivery_type}</h2>  
                            
                            {
                            id.map(
                        
                                id => 
                                <a class="list-group-item list-group-item-action" alt ="" disabled style ={{'height': "20vh"}}>
                                <div class="d-flex w-100 justify-content-between">
                                   
                                    
                                
                                
                                </div>
                                <p class="mb-1 text-end" style ={{display : 'none'}}>價格 : {count += (id.price * id.number)}</p>
                                <h2 class="mb-1" style={{color : 'blue'}}>商品名稱: {id.productName}</h2>
                                <p class="mb-1 text-end"style={{ 'padding' : "1px", color:"red"}} >價格 : {id.price * id.number}</p>
                                <div class="flex_cut">
                                           
                                    <h2 > 數量 : {id.number}</h2>
                                       
                                </div>
                                
                                    
                            
                                </a>

                                    )

                                }
                            <div className="all_price" >
                                <div className=""  style ={{ marginTop:'10px',color:'red'}}>
                                    <h2>總價格: {count}</h2>
                                
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={submitHandler}>送出</button>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );

    

    
}
 
export default DataPage;