import React,{useState} from 'react'
import './log.css'
import {Link,useLocation,useNavigate } from 'react-router-dom';
import logo from './head-logo.png';
import registerImg from './registerPng.svg';
import axios from 'axios';
import Login from '../Login/Login';
function Register() {
    let history=useNavigate();
    

const[email,setemail]=useState('');

const[pwd1,setpwd1]=useState('');
const[pwd2,setpwd2]=useState('');

const handelsubmit=(e)=>{
    e.preventDefault();
    axios({
        url: 'http://localhost:8080/api/v1/user/addUser',
        method: "POST",
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        params:{
            'email':email,
            'passwd':pwd1,
            'type':"buyer"
        }
    })
    .then(function (response) {
        console.log(response);
        alert('註冊成功')
        history('/login')
        // <Login state={{email,pwd1}}/>
    })
    .catch(function (error) {
        alert('帳號已存在')
        console.log(error);
    });
}
    return (
        
        <div>
            <div id="panel">
        <div class="selectBar">
            <Link to='/login' >登入</Link>
            <Link to='/Register' class="checked">註冊</Link>
        </div>
        <form className="replace" >
            <div class="inputBlock">
                <input placeholder=" " type="Email" name="email" aria-label="?" value={email} onChange={(e)=>{setemail(e.target.value)}} id="email1" />
        
                <label for="account">帳號</label>
            </div>
    
            <div class="inputBlock">
                
                <input  placeholder=" " aria-label="?"type="password" value={pwd1} onChange={(e)=>{setpwd1(e.target.value)}}  name="pwd" id="pwd1" />
                <label for="password">密碼</label>
            </div>
            <div class="inputBlock">
                <input placeholder=" " aria-label="?" type="password" value={pwd2} onChange={(e)=>{setpwd2(e.target.value)}} name="pwd" id="pwd2" />
           
                <label for="passwordAgain">重複密碼</label>
            </div>
            <div style={{height: "3vh",color: "red"}}>
                * 內容不能為空白
            </div>
            <div class="inputBlock"><button class="btn" type="submit" onClick={handelsubmit}>註冊</button></div>
        </form>
    </div>
        </div>
    )
}

export default Register;
