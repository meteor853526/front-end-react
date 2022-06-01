import React,{useState,useEffect,useRef} from 'react';
import './log.css';
//import styles from './log.module.css'
import {Link,useLocation } from 'react-router-dom';
import logo from './logoPng.png';
import welcomeimg from './welcomeback.svg';
import { ApiCall } from '../ApiCall/ApiCall';
import {useSelector,useDispatch} from 'react-redux';
// import {useHistory} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login() {


const state = useSelector(state => state.UserReducer);

const dispatch = useDispatch();
const initialValue = useRef(true);

let history=useNavigate();

useEffect(() => {


    if(!initialValue.current){
        console.log(state);
        
    }else{
        initialValue.current=false;
    }

    // return()=>{
    //     history('/');
    // }
}, [state,history])




    const [emailval,setemailval]= useState("");
    const [passval,setpassval]= useState("");
    

    const handlesubmit= (event)=>{
        event.preventDefault();
      if(emailval!=="" || passval!==""){
          console.log(emailval + passval )
         ApiCall({"email":emailval,"passwd":passval, "type" : "buyer"},dispatch);
         setemailval("");
         setpassval("");
        }


  
       
    }

    return (
        // <div className='main-login'>
        //         <div className="login-contain">
        //          <div className="left-side">
        //                  <div className="img-class">
        //                       <img src={logo} id="img-id" alt="" />
        //                   </div>
                 
        //                 <form onSubmit={handlesubmit}>
        //                 <label htmlFor="emil1">Email</label>
        //                     <input placeholder="Enter your email..." type="email" value={emailval} 
        //                     onChange={(e)=>{setemailval(e.target.value)}} id="emil1"/>
        //                 <label htmlFor="pwd1">Password</label>
        //                     <input placeholder="Enter password" type="password" autoComplete="false"
        //                     value={passval} onChange={(e)=>{setpassval(e.target.value)}}
        //                      id="pwd1"/>
        //                     <button type="submit" id="sub_butt">Login</button>
        //                  </form>

        //                  <div className="footer">
        //                      <h4>Don't have an Account ? <Link className='link' to='/Register'>Register Now</Link></h4>
        //                  </div>

        //          </div>
        //           <div className="right-side">
        //             <div className="welcomeNote">
        //                 <h3>Welcome Back!</h3>
        //             </div>
        //             <div className="welcomeImg">
        //                 <img src={welcomeimg} id='wel-img-id' alt=""  />
        //             </div>
        //           </div>

        //         </div>
        // </div>
        <div>
        <div id="panel">
        <div class="selectBar">
            <Link to='/login' class="checked">登入</Link>
            <Link to='/Register'>註冊</Link>
        </div>
        <form className="replace" action="" onSubmit={handlesubmit} >
            <div class="inputBlock">
                <input placeholder=" " aria-label="?" type="email" value={emailval} onChange={(e)=>{setemailval(e.target.value)}} id="emil1" />

                
                <label for="account">信箱</label>
            </div>
            <div class="inputBlock">
            <input placeholder=" "aria-label="?" type="password" autoComplete="false"value={passval} onChange={(e)=>{setpassval(e.target.value)}}id="pwd1"/>
              
                <label for="password">密碼</label>
            </div>
            <div style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
                <input type="checkbox" name="remember" id="remember"/>
                <label for="remember">記住帳號</label>
            </div>
           
            <div id="errorMsg" style={{"height": "3vh",color: "red",display: "none"}}>
                * 帳號或密碼錯誤
            </div>
            <div class="inputBlock"><button class="btn" type="submit">登入</button></div>
        </form>
    </div>
    </div>
    )
}

export default Login;
