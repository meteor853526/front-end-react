
import { useEffect, useState } from "react";
import React from 'react';
import testservice from '../services/testservice';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// class Toast extends React.Component {
//     render() {
//       return (
//         <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
//         <div class="toast-header">
//           {/* <img src="..." class="rounded me-2" alt="..."> */}
//           <strong class="me-auto">Bootstrap</strong>
//           <small>11 mins ago</small>
//           <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//         </div>
//         <div class="toast-body">
//           Hello, world! This is a toast message.
//         </div>
//       </div>
//       );
//     }
//   }


const Product_component =(props)=> {

    const [id, setid] = useState([])
    const [msg, setmsg] = useState('')
    useEffect(() =>{
        getservice()
    },[])

    useEffect(() =>{
        
    })
    const getservice = () =>{
        
        testservice.getservice().then((response) =>{
            setid(response.data);
            console.log(response.data)
        })
    }

    // const toast = <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    //                 <div class="toast-header">
    //                 {/* <img src="..." class="rounded me-2" alt="..."> */}
    //                 <strong class="me-auto">Bootstrap</strong>
    //                 <small>11 mins ago</small>
    //                 <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    //                 </div>
    //                 <div class="toast-body">
    //                 Hello, world! This is a toast message.
    //                 </div>
    //             </div>

    const submitHandler =(id,name,price) =>{
       

        axios({
            url: 'http://localhost:8080/api/v1/Shop_Car/addcar',
            method: "POST",
            
            headers: {
                'content-type': 'application/json'
            },
            params:{
                'email':props.user.user,
                'productid':id,
                'productName' : name,
                'price' :price
            }
        })
        .then(function (response) {
            console.log(response);
            alert('Add Success');
            
        })
        .catch(function (error) {
            console.log(error);
            alert('請先登入會員');

        });
    }

    const notify = () => toast("Wow so easy!");
    return ( 
        <div className="row_product">
            {
                id.map(
                    
                    id => 
                        <div className="product_container" >
                            <div className="row product_row">
                                <div className="col">
                                <div className="card" >
                                    {/* <img  src={ `data:image/jpeg;base64,${id.image}`}  style={{width:100, height:100}} resizeMode="cover" alt=""/> */}
                                    <div className="card-body">
                                        
                                        <h5 className="card-title">{id.id} {id.name}</h5>
                                        <p className="card-text">{id.price}</p>
                                        <p className="card-text">{id.introduce}{id.type}</p>
                                       
                                        <p className="card-text">{id.number}</p>

                                        <button className="btn1"  onClick={() => {submitHandler(id.id,id.name,id.price);notify() } } >加入購物車</button>
                                        
                                    </div>
                                    </div>
                                </div>
                                
                                
                            </div>
                        <div className="">
                        
                        </div>
                    </div>
                    
                    
                )
            }
            
        </div>
        
        
        


     );
}
 
export default Product_component;