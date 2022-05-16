import { Link } from "react-router-dom";
import React,{Component} from "react";



class Check_type extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            id:'',
            Fname: '',
            Lname: 0,
            phone: '',
            ni: 0,
            introduce:'',
            image:null,


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
                        <input class="form-check-input" type="radio"value="" name="type" id="flexRadioDefault1"/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            信用卡一次付清
                        </label>
                        </div>
                    </li>
                    
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="flexRadioDefault2"checked/>
                        <label class="form-check-label" for="flexRadioDefault2">
                        AFTEE先享後付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="flexRadioDefault3"checked/>
                        <label class="form-check-label" for="flexRadioDefault3">
                        悠遊付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="flexRadioDefault4"checked/>
                        <label class="form-check-label" for="flexRadioDefault4">
                        超商取貨付款
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="flexRadioDefault5"checked/>
                        <label class="form-check-label" for="flexRadioDefault5">
                        ATM付款
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="flexRadioDefault6"checked/>
                        <label class="form-check-label" for="flexRadioDefault6">
                        街口支付
                        </label>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="type" id="flexRadioDefault7"checked/>
                        <label class="form-check-label" for="flexRadioDefault7">
                            LINE Pay
                        </label>
                        </div>
                    </li>
                    
                </ul>
                    <button className="btn1"  onClick={() => this.submitHandler()}>下一步</button>
                
            </div>
            <div class="">
                <ul class="list-group">
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="" name="1" id="flexRadioDefault11"checked/>
                            <label class="form-check-label" for="flexRadioDefault8">
                                宅配
                            </label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio"value="" name="1" id="flexRadioDefault8"disabled/>
                            <label class="form-check-label" for="flexRadioDefault8">
                                7-ELEVEN取貨
                            </label>
                            </div>
                        </li>
                        
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="1" id="flexRadioDefault9"disabled/>
                            <label class="form-check-label" for="flexRadioDefault9">
                                萊爾富取貨
                            </label>
                            </div>
                        </li>
                        <li class="list-group-item">
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="1" id="flexRadioDefault10"disabled/>
                            <label class="form-check-label" for="flexRadioDefault10">
                                全家取貨
                            </label>
                            </div>
                        </li>  
                    </ul>
            </div>
        </div>
        );
    }
    
}
 
export default Check_type;