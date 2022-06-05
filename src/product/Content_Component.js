import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import testservice from '../services/testservice';
import ProductComponent from './ProductComponent.js';


const Content_Component = (props) =>{
    // const user = props.user;
    const [id, setid] = useState([])

    const [Type, setType] = useState('all')
    // useEffect(() =>{
    //     getservice()
    // },[])

    // const getservice = () =>{
        
    //     testservice.getservice().then((response) =>{
    //         setid(response.data);
    //         console.log(response.data)
    //     })
    // }
   
    
    return ( 


        <div className="product_body" style={{width:"80vw" ,'margin-left':'10vw'}}>
            <div className="container-fluid">
                <div className="row side-flex">
                    <div className="col-2">
                        <a className="category_1" alt="" onClick={() => setType("all")}><h2>所有商品</h2></a>
                        <div className="list_category_flex side">
                        
                            <h2>分類(書籍)</h2>
                            <div className="list_category_flex">
                                <a className="category_1" alt="" onClick={() => setType("財經投資")}>財經投資</a>
                                <a className="category_1" alt="" onClick={() => setType("語言學習")}>語言學習</a>
                                <a className="category_1" alt="" onClick={() => setType("行銷企管")}>行銷企管</a>
                                <a className="category_1" alt="" onClick={() => setType("文學小說")}>文學小說</a>
                                <a className="category_1" alt="" onClick={() => setType("自然人文")}>自然人文</a>
                            </div>
                        </div>

                        <div className="list_category_flex side">
                        
                            <h2>分類(雜誌)</h2>
                            <div className="list_category_flex">
                                <a className="category_1" alt="" onClick={() => setType("中文雜誌")}>中文雜誌</a>
                                <a className="category_1" alt="" onClick={() => setType("英文雜誌")}>英文雜誌</a>
                                <a className="category_1" alt="" onClick={() => setType("藝文雜誌")}>藝文雜誌</a>
                                <a className="category_1" alt="" onClick={() => setType("外文雜誌")}>外文雜誌</a>
                                <a className="category_1" alt="" onClick={() => setType("商業週刊")}>商業週刊</a>
                            </div>
                        </div>

                        <div className="list_category_flex side">
                        
                            <h2>分類(CD音樂)</h2>
                            <div className="list_category_flex">
                                <a className="category_1" alt="" onClick={() => setType("古典音樂")}>古典音樂</a>
                                <a className="category_1" alt="" onClick={() => setType("亞洲音樂")}>亞洲音樂</a>
                                <a className="category_1" alt="" onClick={() => setType("西洋音樂")}>西洋音樂</a>
                                <a className="category_1" alt="" onClick={() => setType("爵士音樂")}>爵士音樂</a>
                                <a className="category_1" alt="" onClick={() => setType("黑膠唱片")}>黑膠唱片</a>
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
                            <ProductComponent user = {props.user} type = {Type}className="row_product"/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
      
    );
}
 
export default Content_Component;