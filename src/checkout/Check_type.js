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
    submitHandler = () => {

    }
    render() {
        return ( 

            <div className="">
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label class="form-check-label" for="flexRadioDefault1">
                    Default radio
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
                <label class="form-check-label" for="flexRadioDefault2">
                    Default checked radio
                </label>
                </div>
                <button className="btn1"  onClick={() => this.submitHandler()}>下一步</button>
            </div>
                
        );
    }
    
}
 
export default Check_type;