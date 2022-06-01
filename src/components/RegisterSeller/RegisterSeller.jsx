import React,{useState} from 'react'
import './Register.css'
import {Link} from 'react-router-dom';
import logo from './head-logo.png';
import registerImg from './registerPng.svg';
import axios from 'axios';
function Register() {
 

const[email,setemail]=useState('');
const[Fusername,setFusername]=useState('');
const[Susername,setSusername]=useState('');
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
            'type' :"seller"
        }
    })
    .then(function (response) {
        console.log(response);
        
    })
    .catch(function (error) {
        console.log(error);
    });
}
    return (
        <div className='main-Register'>
          
            <div className="right-side">
               <div className="top-right">
                       <p>Already have an Account?
                      
                          <Link id='Links-signin' to='/'>Sign In</Link>   
                          </p> 
            </div>
            <div className="body-right">
                        <div className="container_reg">
                        <h1 style={{marginLeft:"5vw"}}>Create Account!</h1>
                        <form onSubmit={handelsubmit}>
                            <div className="input-group">
                            
                            </div>
                            
                            <div className="input-group">
                                <h5> Email</h5>
                                <input type="Email" name="email" value={email} style={{marginLeft:"8vw"}}
                                onChange={(e)=>{setemail(e.target.value)}} id="email1" />
                            </div>
                            <div className="input-group">
                                <h5> Password</h5>
                                <input type="password" value={pwd1} style={{marginLeft:"8vw"}}
                                onChange={(e)=>{setpwd1(e.target.value)}}  name="pwd" id="pwd1" />
                            </div>
                            <div className="input-group">
                                <h5> Confirm Password</h5>
                                <input type="password" value={pwd2} style={{marginLeft:"8vw"}}
                                onChange={(e)=>{setpwd2(e.target.value)}} name="pwd" id="pwd2" />
                            </div>
                                <input type="submit" id='sbtn' value="Submit" style={{marginLeft:"8vw", width: "60%"}}/>
                            </form>
                        </div>

            </div>
           
            </div>
        </div>
    )
}

export default Register;
