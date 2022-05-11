import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import testservice from '../services/testservice';
import ProductComponent from './ProductComponent.js';


function Content_Component() {

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
    // fetch("http://localhost:8080/api/v1/student"),{
    //     method: "GET",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify("id")

    // }).then(() => {
    //     console.log("??")
    // }
    return ( 


        <div className="product_body" style={{width:"80vw"}}>
            <div className="container-fluid">
                <div className="row side-flex">
                    <div className="col-3">
                        <div className="list_category_flex side">
                            <button type="button" className="side col">所有分類</button>
                            <div className="list_category_flex">
                                <a className="category_1" alt="" href="http://">書籍及雜誌期刊</a>
                                <a className="category_1" alt="" href="http://">其他書籍</a>
                                <a className="category_1" alt="" href="http://">商業理財書籍</a>
                                <a className="category_1" alt="" href="http://">文學小說</a>
                                <a className="category_1" alt="" href="http://">漫畫</a>
                            </div>
                        </div>

                        <div className="side">
                            <h5>條件篩選</h5>
                            <font className="">出貨地點</font>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                <label className="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                        <div className="side">
                            
                            <font className="">運送方式</font>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                <label className="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div className="side">
                            
                            <font className="">品牌</font>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                <label className="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
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
                        <Link to="/AddProduct" className="btn1"><button className="btn1">增加</button></Link>
                    </div>
                    
                    
                    <div className="col-9 ">
                        <div className="">
                            <ProductComponent className=""/>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
      
    );
}
 
export default Content_Component;