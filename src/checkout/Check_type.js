import { Link } from "react-router-dom";
import React,{Component} from "react";



class Check_type extends Component{
    constructor() {
        super();
        this.state = {
            pay_type:'',
            delivery_type:''
        }
    }
    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value});
        
    }

    submitHandler = () => {

    }
    render() {
        return ( 
        <div class="">

        
            <div>
                <ul class="list-group">
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio"value="信用卡一次付清" name="pay_type" id="flexRadioDefault1" onChange={this.changeHandler}/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            信用卡一次付清
                        </label>
                        </div>
                    </li>
                    
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="AFTEE先享後付"name="pay_type" id="flexRadioDefault2"checked onChange={this.changeHandler}/>
                        <label class="form-check-label" for="flexRadioDefault2">
                        AFTEE先享後付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio"value="悠遊付" name="pay_type" id="flexRadioDefault3"checked onChange={this.changeHandler}/>
                        <label class="form-check-label" for="flexRadioDefault3">
                        悠遊付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="超商取貨付款"name="pay_type" id="flexRadioDefault4"checked onChange={this.changeHandler}/>
                        <label class="form-check-label" for="flexRadioDefault4">
                        超商取貨付款
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="ATM付款"name="pay_type" id="flexRadioDefault5"checked onChange={this.changeHandler}/>
                        <label class="form-check-label" for="flexRadioDefault5">
                        ATM付款
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" value="街口支付"name="pay_type" id="flexRadioDefault6"checked onChange={this.changeHandler}/>
                        <label class="form-check-label" for="flexRadioDefault6">
                        街口支付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio"value="LINE Pay" name="pay_type" id="flexRadioDefault7"checked onChange={this.changeHandler}/>
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
                            <input class="form-check-input" type="radio"value="宅配" name="delivery_type" id="flexRadioDefault11"checked onChange={this.changeHandler}/>
                            <label class="form-check-label" for="flexRadioDefault8">
                                宅配
                            </label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="7-ELEVEN取貨" name="delivery_type" id="flexRadioDefault8"disabled onChange={this.changeHandler}/>
                            <label class="form-check-label" for="flexRadioDefault8">
                                7-ELEVEN取貨
                            </label>
                            </div>
                        </li>
                        
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="萊爾富取貨" name="delivery_type" id="flexRadioDefault9"disabled onChange={this.changeHandler}/>
                            <label class="form-check-label" for="flexRadioDefault9">
                                萊爾富取貨
                            </label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="全家取貨" name="delivery_type" id="flexRadioDefault10"disabled onChange={this.changeHandler}/>
                            <label class="form-check-label" for="flexRadioDefault10">
                                全家取貨
                            </label>
                            </div>
                        </li>  
                    </ul>
                    <Link to='/Data_page' className="btn1"><button className="btn1"  onClick={() => this.submitHandler()}>下一步</button></Link>
            </div>
        </div>
        );
    }
    
}
 
export default Check_type;