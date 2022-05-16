import { Link } from "react-router-dom";
import React,{Component} from "react";



class Check_type extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            name:'',
            category: '',
            price: 0,
            type: '',
            number: 0,
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

            <ul class="list-group">
                <li class="list-group-item">
                    <div class="form-check">
                    <input class="form-check-input" type="radio"value="" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Default radio
                    </label>
                    </div>
                </li>
                
                <li class="list-group-item">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"checked/>
                    <label class="form-check-label" for="flexRadioDefault2">
                        Default radio
                    </label>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"checked/>
                    <label class="form-check-label" for="flexRadioDefault3">
                        Default radio
                    </label>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"checked/>
                    <label class="form-check-label" for="flexRadioDefault4">
                        Default radio
                    </label>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"checked/>
                    <label class="form-check-label" for="flexRadioDefault5">
                        Default radio
                    </label>
                    </div>
                </li>
                <li class="list-group-item">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault6"checked/>
                    <label class="form-check-label" for="flexRadioDefault6">
                        Default radio
                    </label>
                    </div>
                </li>
                <button className="btn1"  onClick={() => this.submitHandler()}>下一步</button>
            </ul>
                
        );
    }
    
}
 
export default Check_type;