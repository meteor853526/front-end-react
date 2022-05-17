import { Link,useLocation } from "react-router-dom";
import React,{Component} from "react";
import axios from 'axios';
import FormData from 'form-data'
import moment from 'moment';
import { useEffect, useState } from "react";
import testservice from '../services/testservice';

const DataPage = (props) => {
    const location = useLocation()
    const { pay_type, delivery_type} = location.state
    const [Fname, setFname] = useState()
    const [Lname, setLname] = useState()
    const [phone, setphone] = useState()
    const [address, setaddress] = useState()
    const [time, settime] = useState()
    const [productid, setproductid] = useState()

    console.log(pay_type)
    console.log(delivery_type)

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
    //var {id,name,age} = data;
    // constructor(props) {
    //     super(props);
        
    //     console.log(this.props.location.state)
    //     this.state = {
    //         Fname:'',
    //         Lname:'',
    //         phone:0,
    //         address:'',
    //         type:'',
    //         Pay_type:'',
    //         time:'',
    //         productid:0,

    //     }
    // }
    
  
        //var data = this.props.location.state;
    

    const changeHandler =(e) =>{
        //this.setState({[e.target.name]: e.target.value});
        
    }
   
    
    
    const submitHandler =(e) =>{
        e.preventDefault();
        
        
    }

    
       
        
        return ( 
            <div class="">
                {/* <h1>{this.props.pay_type}</h1> */}
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">姓氏</span>
                <input type="text" class="form-control" placeholder="Username" value={Fname}aria-label="Username" aria-describedby="basic-addon1"onChange={e => setFname(e.target.value)}/>
                <h1>{Fname}</h1>
                </div>
                {/* <h1>{moment().format('YYYY-MM-DD HH:mm:ss')}</h1> */}
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">名字</span>
                <input type="text" class="form-control" placeholder="Recipient's username"value={Lname} aria-label="Recipient's username" aria-describedby="basic-addon2"onChange={() => setLname(this.value)}/>
                {/* <span class="input-group-text" id="basic-addon2"></span> */}
                </div>

                <label for="basic-url" class="form-label">聯絡資訊及地址</label>
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
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
                </button>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                        {
                        id.map(
                    
                            id => 
                                <h1>{id.id}</h1>

                                )

                            }
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={submitHandler}>Understood</button>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
        );

    

    
}
 
export default DataPage;