
import { useEffect, useState } from "react";
import React from 'react';
import testservice from '../services/testservice';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BarLoader,DoubleBubble, SlidingPebbles ,DoubleOrbit} from 'react-spinner-animated';


function Wait(){
    return(
        <DoubleOrbit text={"Loading..."} bgColor={"#F0A500"} center={false} width={"150px"} height={"150px"}/>
    )
}



const Product_component =(props)=> {
    
    const [id, setid] = useState([])
    const [msg, setmsg] = useState('')
    useEffect(() =>{
        getservice()
        Wait()
    },[])

    
    const getservice = () =>{
        
        testservice.getservice().then((response) =>{
            setid(response.data);
            console.log(response.data)
        })
    }

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
                'price' :price,
                'number':1
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
        <div>
            <h2> 所有商品: </h2>
        
        <div id="products">
            
            {/* {id === null? <Wait/> : '????'} */}
           
            {
                id.map(
                    id=>    
                    <div>
                        <Link to='/ProductPage' state={{productid: id.id, introduce: id.introduce,name:id.name,price:id.price}}>
                            <div class="img-cover">
                                <img  src={ `data:image/jpeg;base64,${id.image}`}   resizeMode="" alt=""/>
                            </div>
                        </Link>
                            <div class="info">
                                <div class="seller">{id.owner} (owner)</div>
                                <div class="title">{id.name}</div>
                            </div>
                            <span style={{display: "flex"}}>
                                <a onClick={() => {submitHandler(id.id,id.name,id.price);notify() } } alt="" ><img src={require('../img/car.jpg')}alt="" style={{width:'4vw',height: '8vh'}}/></a>
                                {/* <button className="btn1 up_btn"  style={{marginLeft: "10px"}} onClick={() => {submitHandler(id.id,id.name,id.price);notify() } } >加入購物車</button> */}
                                <p className="card-text price" style={{marginLeft: "140px"}}>{id.price} 元</p>
                            </span>
                            
                            
                    </div>
                    

                )




            }

</div>
        </div>




        // <div className="row_product">
        //     {
        //         id.map(
                    
        //             id => 
        //             <div className="try">
                    

                    
        //                 <div className="product_container" >
        //                     <div className="row product_row">
        //                         <div className="col">
        //                         <div className="card" >

        //                         <Link className="try" to='/ListComment' state={{productid: id.id}}>
        //                             <img  className="img_test" src={ `data:image/jpeg;base64,${id.image}`}   resizeMode="" alt=""/></Link>
        //                                 <div className="card-body">

                                        
                                        
        //                                 <h5 className="card-title">{id.name}</h5>
                                        
        //                                 {/* <p className="card-text">{id.introduce}{id.type}</p> */}
                                       
        //                                 {/* <p className="card-text">{id.number}</p> */}
                                        
        //                                 <span style={{display: "flex"}}>
        //                                     <button className="btn1 up_btn"  onClick={() => {submitHandler(id.id,id.name,id.price);notify() } } >加入購物車</button>
        //                                     <p className="card-text price" style={{marginLeft: "130px"}}>{id.price} 元</p>
        //                                 </span>
                                        
                                        
        //                             </div>
        //                             </div>
        //                         </div>
                                
                                
        //                     </div>
        //                     <div className="">
                            
        //                     </div>
        //                 </div>
                    
        //             </div>
                    
        //         )
        //     }
            
        // </div>
        
        
        


     );
}
 
export default Product_component;