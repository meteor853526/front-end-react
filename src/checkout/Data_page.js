import { Link } from "react-router-dom";
import React,{Component} from "react";
import axios from 'axios';
import FormData from 'form-data'




class DataPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            Fname:'',
            Lname:'',
            phone:0,
            address:'',
            type:'',
            Pay_type:'',
            time:'',
            productid:0,

        }
    }
    
    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value});
        
    }
   
    
    
    submitHandler =(e) =>{
        e.preventDefault();

        // const formData = new FormData();
  
        // formData.append("image", this.state.image);
        
        
        // console.log(...formData)
        
        // axios({
        //     url: 'http://localhost:8080/api/v1/product/addP',
        //     method: "POST",
        //     data: formData,
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     },
        //     params:{
        //         'name':this.state.name,
        //         'category': this.state.category,
        //         'price':this.state.price,
        //         'type': this.state.type,
        //         'number':this.state.number,
        //         'introduce':this.state.introduce,
        //     }
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

    render() {
        const {Fname, Lname, phone, address, type,Pay_type,time} = this.state;
        
        return ( 
            <div class="">
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">姓氏</span>
                <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">名字</span>
                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                {/* <span class="input-group-text" id="basic-addon2"></span> */}
                </div>

                <label for="basic-url" class="form-label">聯絡資訊及地址</label>
                <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">手機號碼</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
                </div>

                <div class="input-group mb-3">
                <span class="input-group-text">收貨地址</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
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

                
            </div>
        );

    }

    
}
 
export default DataPage;