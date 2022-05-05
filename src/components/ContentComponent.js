import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react';
import testservice from '../services/testservice';



function ContentComponent() {

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
            <div class="container-fluid">
                <div class="row side-flex">
                    <div class="col-3">
                        <div class="list_category_flex side">
                            <button type="button" class="side col">所有分類</button>
                            <div class="list_category_flex">
                                <a class="category_1" alt="" href="http://">書籍及雜誌期刊</a>
                                <a class="category_1" alt="" href="http://">其他書籍</a>
                                <a class="category_1" alt="" href="http://">商業理財書籍</a>
                                <a class="category_1" alt="" href="http://">文學小說</a>
                                <a class="category_1" alt="" href="http://">漫畫</a>
                            </div>
                        </div>

                        <div class="side">
                            <h5>條件篩選</h5>
                            <font class="">出貨地點</font>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                        <div class="side">
                            
                            <font class="">運送方式</font>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div class="side">
                            
                            <font class="">品牌</font>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked></input>
                                <label class="form-check-label" for="flexCheckChecked">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                        <div class="side">
                            
                            <font class="">價格篩選</font>
                            <div class="">
                                <input class="" style={{width:"3vw"}}></input>
                                <font>-----</font>
                                <input class="" style={{width:"3vw"}}></input>
                            </div>
                            
                        </div>
                        
                    </div>

                    
                    <div class="col-9">
                        {
                            id.map(
                                id => 
                                <h1>id.id</h1>
                            )
                        }
                    </div>
                    
                </div>
            </div>
        </div>
        
      
    );
}
 
export default ContentComponent;