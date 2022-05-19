import { Link } from "react-router-dom";
import React,{Component} from "react";
import axios from 'axios';
import FormData from 'form-data'


class AddProduct extends Component {
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
            owner:this.props.user

        }
    }
    
    changeHandler =(e) =>{
        this.setState({[e.target.name]: e.target.value});
        
    }
   
    
    
    submitHandler =(e) =>{
        e.preventDefault();

        const formData = new FormData();
  
        formData.append("image", this.state.image);
        
        
        console.log(...formData)
        
        axios({
            url: 'http://localhost:8080/api/v1/product/addP',
            method: "POST",
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            },
            params:{
                'name':this.state.name,
                'category': this.state.category,
                'price':this.state.price,
                'type': this.state.type,
                'number':this.state.number,
                'introduce':this.state.introduce,
                'owner':this.props.user.user
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const {name, category, price, type, number,introduce,image} = this.state;
        
        return ( 
            <div class="card">
              
                <div class="card-header">
                    <p class="h4 mb-2 text-center">Add Product</p>
                </div>
                <div class="card-body">
                    <form class="text-center border border-light p-5" onSubmit={this.submitHandler}>
    
                    
                        <input type="text" name="name" id="name" class="form-control mb-4" value={name}placeholder="Product Name" onChange={this.changeHandler}/>
                        <input type="text" name="category" id="category" class="form-control mb-4"value={category} placeholder="Product 商品類別"onChange={this.changeHandler}/>
                        <input type="number" name="price" id="price" class="form-control mb-4"value={price} placeholder="Product Price"onChange={this.changeHandler}/>
                        <input type="text" name="type" id="type" class="form-control mb-4"value={type} placeholder="Product Type 款式"onChange={this.changeHandler}/>
                        <input type="number" name="number" id="number" class="form-control mb-4" value={number}placeholder="Product 數量"onChange={this.changeHandler}/>
                        
    
                        <textarea type="text"class="form-control mb-4" id="introduce" name="introduce"value={introduce}placeholder="Product Description"onChange={this.changeHandler}>Product Description</textarea>
                        <div class="custom-file mb-4">
                            <input type="file" name="image"accept="image/png,image/gif,image/jpeg" class="custom-file-input"id="image"value={image}onChange={this.changeHandler}/>
                            <label class="custom-file-label"for="customFile">Product Image</label>
                        </div>
                        
                        <button class="btn btn-info btn-block" type="submit">add</button>
                    </form>
                </div>
            </div>
        );

    }

    
}
 
export default AddProduct;