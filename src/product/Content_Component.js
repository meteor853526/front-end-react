import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import testservice from '../services/testservice';
import ProductComponent from './ProductComponent.js';


const Content_Component = (props) =>{
    // const user = props.user;
    const [id, setid] = useState([])

    useEffect(() =>{
        getservice()
    },[])

    const getservice = () =>{
        
        testservice.getservice().then((response) =>{
            setid(response.data);
            console.log(response.data)
        })
    }
   
    
    return ( 


        <div className="product_body" style={{width:"80vw" ,'margin-left':'10vw'}}>
            <div className="container-fluid">
                <div className="row side-flex">
                    <div className="col-2">
                        <div className="list_category_flex side">
                        
                            <h2>分類(書籍)</h2>
                            <div className="list_category_flex">
                                <a className="category_1" alt="" >財經投資</a>
                                <a className="category_1" alt="" >語言學習</a>
                                <a className="category_1" alt="" >行銷企管</a>
                                <a className="category_1" alt="" >文學小說</a>
                                <a className="category_1" alt="" >自然人文</a>
                            </div>
                        </div>

                        <div className="list_category_flex side">
                        
                            <h2>分類(雜誌)</h2>
                            <div className="list_category_flex">
                                <a className="category_1" alt="" >中文雜誌</a>
                                <a className="category_1" alt="" >英文雜誌</a>
                                <a className="category_1" alt="">藝文雜誌</a>
                                <a className="category_1" alt="" >外文雜誌</a>
                                <a className="category_1" alt="" >商業週刊</a>
                            </div>
                        </div>

                        <div className="list_category_flex side">
                        
                            <h2>分類(CD音樂)</h2>
                            <div className="list_category_flex">
                                <a className="category_1" alt="" >古典音樂</a>
                                <a className="category_1" alt="" >亞洲音樂</a>
                                <a className="category_1" alt="" >西洋音樂</a>
                                <a className="category_1" alt="" >爵士音樂</a>
                                <a className="category_1" alt="" >黑膠唱片</a>
                            </div>
                        </div>
                        <div className="side">
                            
                            <font className="">價格篩選</font>
                            <div className="">
                                <input className="" style={{width:"3vw"}}></input>
                                <font>-----</font>
                                <input className="" style={{width:"3vw"}}></input>
                            </div>
                            
                        </div>
                      
                    </div>
                    
                    
                    <div className="col-10 ">
                        <div className="">
                            <ProductComponent user = {props.user}className="row_product"/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
      
    );
}
 
export default Content_Component;