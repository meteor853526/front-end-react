
import { useEffect, useState } from "react";
import React from 'react';
import testservice from '../services/testservice';
import { Link } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { BarLoader,DoubleBubble, SlidingPebbles ,DoubleOrbit,Spinner} from 'react-spinner-animated';


function Wait(){
    return(
        <Spinner className="waiting" text={"Loading..."} bgColor={"white"} center={true} width={"150px"} height={"150px"}/>
    )
}



const Product_component =(props)=> {
    
    console.log(props.type)
    const [id, setid] = useState(null)
    const [space, setspace] = useState("?")
    const [msg, setmsg] = useState('')
    useEffect(() =>{
        getservice()
        Wait()
        console.log('???')
    },[props.type])

    useEffect(() => {
        reset()
    }, []);

    useEffect(() => {
        respace()
    }, []);
    const getservice = () =>{
        

        if(props.type === "all"){
            testservice.getservice().then((response) =>{
                reset();
                setid(response.data);
                console.log(response.data)
                respace("have")
            })
        }else{
            reset();
            setid(null);
            if(id === null){
                console.log("try")
            }else{
                setid(null);
            }
            console.log("wgat")
            axios({
                url: 'http://localhost:8080/api/v1/product/Type',
                method: "Get",
                
                headers: {
                    'content-type': 'application/json'
                },
                params:{  
                    'Type':props.type,
                    
                }
            })
            .then(function (response) {
                console.log(response);
                setid(response.data)
                console.log(response.data.length);
                if(response.data.length === 0){
                    respace("nothing")
                    console.log("test")
                }else{
                    respace("have")
                }
            })
            .catch(function (error) {
                console.log(error);
      
    
            });

        }
        
    }

    const reset =() =>{
        setid(null);
        
    }
    const respace =(props)=>{
        setspace(props);
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
            <h2> 商品類別: {props.type}</h2>
            
            <div id="products">
                
            
                {/* {id === null? <Wait/> : '????'} */}
            
                {
                    id !== null ?
                        
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
                        : Wait()
                }
                {
                    space !== "nothing" && id !== null? "" :<h2>暫無商品 </h2>
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