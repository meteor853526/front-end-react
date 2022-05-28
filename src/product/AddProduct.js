import { Link } from "react-router-dom";
import React,{Component} from "react";
import axios from 'axios';
import FormData from 'form-data'


class AddProduct extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name:'',
            category: "書籍",
            price: 1,
            type: "財經投資",
            number: 1,
            introduce:'',
            file:'',
            owner:this.props.user.user2,
            
           
        }
    }
    switchType = ["財經投資","語言學習","行銷企管","自然人文","健康養生"]
    Magazine = ["中文雜誌","英文雜誌","藝文雜誌","外文雜誌","商業週刊"]
    book     = ["財經投資","語言學習","行銷企管","自然人文","健康養生"]
    CD       = ["古典音樂","亞洲音樂","西洋音樂","爵士音樂","黑膠唱片"]
    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value});
        // if(this.state.type !== '' && e.target.name === 'category'){
        //     if(e.target.value === "書籍"){
        //         this.setState({type:"財經投資"})
        //     }
        //     if(e.target.value === "雜誌"){
        //         this.setState({type:"中文雜誌"})
        //     }
        //     if(e.target.value === "CD唱片"){
        //         this.setState({type:"古典音樂"})
        //     }
        // }
        console.log(e.target.name)
        console.log(e.target.value)
   
 
       
    }
    changeType =(e) =>{
        if(e.target.value === "書籍"){     
            this.switchType = this.book;
        }
        if(e.target.value === "雜誌"){
            this.switchType = this.Magazine;
            
        }
        if(e.target.value === "CD唱片"){
            this.switchType = this.CD ;
        }
 
    }

    onImageChange = e => {

        this.setState({[e.target.name]:e.target.files[0]})
        console.log(e.target.files[0])

        
        // if (event.target.files && event.target.files[0]) {
        //   let img = event.target.files[0];
        //   this.setState({
        //     image: URL.createObjectURL(img)
        //   });
        // }
      };
    
    submitHandler =(e) =>{
        e.preventDefault();

        const formData = new FormData();
  
        formData.append("file", this.state.file);
        formData.append("name", this.state.name);
        formData.append("category", this.state.category);
        formData.append("price", this.state.price);
        formData.append("type", this.state.type);
        formData.append("number", this.state.number);
        formData.append("introduce", this.state.introduce);
        formData.append("owner", this.props.user.user2);
        //console.log(...formData)
        
        axios({
            url: 'http://localhost:8080/api/v1/product/addP',
            method: "Post",
            data: formData,
            // params:{
            //     // 'name':this.state.name,
            //     'category': this.state.category,
            //     'price':this.state.price,
            //     'type': this.state.type,
            //     'number':this.state.number,
            //     'introduce':this.state.introduce,
            //     'owner':this.props.user.user2,
            //     'file':this.state.file
            // }
        })
        .then(function (response) {
            console.log(response);
            alert('Add success')
        })
        .catch(function (error) {
            alert('DataBase connect fail')
            console.log(error);
        });
    }

    render() {
        const {name, category, price, type, number,introduce,file,switchType} = this.state;
        
        return ( 
        <div style={{display : "flex", justifyContent:"center"}}>
            <div class="card ">
                {this.props.user.user2}
                <div class="card-header">
                    <p class="h4 mb-2 text-center">Add Product</p>
                </div>
                <div class="card-body">
                    <form class="text-center border border-light p-5" onSubmit={this.submitHandler}>
    
                    
                        <input type="text" name="name" id="name" class="form-control mb-4" value={name}placeholder="Product Name" onChange={this.changeHandler}/>
                        <select class="form-select  form-control mb-4" aria-label=".form-select-sm example"name="category"onChange={e => { this.changeHandler(e); this.changeType(e)}}>
                            
                            <option value="書籍" name="category">書籍</option>
                            <option value="雜誌" name="category">雜誌</option>
                            <option value="CD唱片"name="category">CD唱片</option>
                        </select>
                        {/* <input type="text" name="category" id="category" class="form-control mb-4"value={category} placeholder="Product 商品類別"onChange={this.changeHandler}/> */}
                        <input type="number" name="price" id="price" class="form-control mb-4"value={price}min="1" placeholder="Product Price"onChange={this.changeHandler}/>
                        
                        {/* <input type="text" name="type" id="type" class="form-control mb-4"value={type} placeholder="Product Type 款式"onChange={this.changeHandler}/> */}
                        <select class="form-select  form-control mb-4" aria-label=".form-select-sm example" name="type" onChange={e => { this.changeHandler(e); this.changeType(e)}}>
                            
                            <option  value={this.switchType[0]} >{this.switchType[0]}</option>
                            <option  value={this.switchType[1]} >{this.switchType[1]}</option>
                            <option  value={this.switchType[2]}>{this.switchType[2]}</option>
                            <option  value={this.switchType[3]}>{this.switchType[3]}</option>
                            <option  value={this.switchType[4]}>{this.switchType[4]}</option>
                        </select>
                        
                        <input type="number" name="number" id="number" class="form-control mb-4" value={number} min="1" placeholder="Product 數量"onChange={this.changeHandler}/>
                        
    
                        <textarea type="text"class="form-control mb-4" id="introduce" name="introduce"value={introduce}placeholder="Product Description"onChange={this.changeHandler}>Product Description</textarea>
                        <div class="custom-file mb-4">
                            <input type="file" name="file"accept="image/png,image/gif,image/jpeg" class="custom-file-input"id="file"onChange={this.onImageChange} multiple/>
                            <label class="custom-file-label"for="customFile">Product Image</label>
                            
                        </div>
                        
                        <button class="btn btn-info btn-block" type="submit">add</button>
                    </form>
                </div>
            </div>
            </div>
        );

    }

    
}
 
export default AddProduct;