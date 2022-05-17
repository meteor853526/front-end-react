import { Link ,useLocation} from "react-router-dom";
import React,{Component} from "react";
import { useEffect, useState } from "react";


const Check_type =() =>{


    const [pay_type, setpay_type] = useState()
    const [delivery_type, setdelivery_type] = useState()
    

    
    //navigate = useNavigate();
    // const changeHandler1 =(value) =>{
    //     setpay_type(value);
    //     //this.setState({[e.target.name]: e.target.value});
    //     console.log(value)
    //     console.log(value)
    // }
    const changeHandler2 =(e) =>{
        // this.setState({[e.target.name]: e.target.value});
        //this.setState({[e.target.name]: e.target.value});
        // console.log(e.target.name)
        // console.log(e.target.value)
    }

    const submitHandler = () => {
        // const path = {
        //     pathname:'/Data_page',
        //     state:{ pay_type : this.state.pay_type,
        //             delivery_type:this.state.delivery_type }   
        // }
        // console.log(path.state)
        //this.props.navigate('/Data_page',{state:{pay_type:this.state.pay_type,delivery_type:this.state.delivery_type}});
        
    }
   
    // path = {
    //     pathname:'/Data_page',
    //     state:{ pay_type : this.state.pay_type,
    //             delivery_type:this.state.delivery_type }   
    // }
    
        
    return ( 
        <div class="">

        
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio"value="信用卡一次付清" name="pay_type" id="flexRadioDefault1" onChange={() => setpay_type("信用卡一次付清")}/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            信用卡一次付清
                        </label>
                        </div>
                    </li>
                    
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="AFTEE先享後付"name="pay_type" id="flexRadioDefault2"onChange={() => setpay_type("AFTEE先享後付")}/>
                        <label class="form-check-label" for="flexRadioDefault2">
                        AFTEE先享後付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio"value="悠遊付" name="pay_type" id="flexRadioDefault3"onChange={() => setpay_type("悠遊付")}/>
                        <label class="form-check-label" for="flexRadioDefault3">
                        悠遊付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="超商取貨付款"name="pay_type" id="flexRadioDefault4"onChange={() => setpay_type("超商取貨付款")}/>
                        <label class="form-check-label" for="flexRadioDefault4">
                        超商取貨付款
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="ATM付款"name="pay_type" id="flexRadioDefault5"onChange={() => setpay_type("ATM付款")}/>
                        <label class="form-check-label" for="flexRadioDefault5">
                        ATM付款
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="街口支付"name="pay_type" id="flexRadioDefault6"onChange={() => setpay_type("街口支付")}/>
                        <label class="form-check-label" for="flexRadioDefault6">
                        街口支付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio"value="LINE Pay" name="pay_type" id="flexRadioDefault7"onChange={() => setpay_type("LINE Pay")}/>
                        <label class="form-check-label" for="flexRadioDefault7">
                            LINE Pay
                        </label>
                        </div>
                    </li>
                    
                </ul>
                    
                
            </div>
            <h1>------------------</h1>
            <div class="">
                <ul class="list-group">
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="宅配" name="delivery_type" id="flexRadioDefault11"onChange={() => setdelivery_type("宅配")}/>
                            <label class="form-check-label" for="flexRadioDefault8">
                                宅配
                            </label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="7-ELEVEN取貨" name="delivery_type" id="flexRadioDefault8"onChange={() => setdelivery_type("7-ELEVEN取貨")}/>
                            <label class="form-check-label" for="flexRadioDefault8">
                                7-ELEVEN取貨
                            </label>
                            </div>
                        </li>
                        
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="萊爾富取貨" name="delivery_type" id="flexRadioDefault9"onChange={() => setdelivery_type("萊爾富取貨")}/>
                            <label class="form-check-label" for="flexRadioDefault9">
                                萊爾富取貨
                            </label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="全家取貨" name="delivery_type" id="flexRadioDefault10"disabled onChange={() => setdelivery_type("全家取貨")}/>
                            <label class="form-check-label" for="flexRadioDefault10">
                                全家取貨
                            </label>
                            </div>
                        </li>  
                    </ul>
                    <h1>{pay_type}</h1>

                    <Link to='/Data_page'
                          state={{ pay_type : pay_type, delivery_type:delivery_type }} className="btn1"><button className="btn1"  onClick={() => submitHandler()}>下一步</button></Link>
            </div>
        </div>
        );
    
    
}
 
export default Check_type;