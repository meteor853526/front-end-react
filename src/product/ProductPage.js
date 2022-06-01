import { Link } from "react-router-dom";
import React,{Component} from "react";
import axios from 'axios';
import FormData from 'form-data'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ListComment from './ListComment'
const ProduntPage =(props)=> {
    const location = useLocation();
    const { productid ,introduce,name,price} = location.state;
    console.log(productid); // output: "the-page-id"
    // const [id, setid] = useState([])
    // const [msg, setmsg] = useState('')



    useEffect(() =>{
        

    },[])

    
    

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

    // const submitHandler =(id,name,price) =>{
       

    //     axios({
    //         url: 'http://localhost:8080/api/v1/Shop_Car/addcar',
    //         method: "POST",
            
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         params:{
    //             'email':props.user.user,
    //             'productid':id,
    //             'productName' : name,
    //             'price' :price
    //         }
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //         alert('Add Success');
            
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //         alert('請先登入會員');

    //     });
    // }

    //const notify = () => toast("Wow so easy!");
    return ( 
        <div>
            <div id="img_over">
                <img src="" alt=""/>
            </div>

            <div>
                <div class="top">
                    <div class="image-line">
                        <img src="https://picsum.photos/1000/500?random=1" alt=""/>
                        <img src="https://picsum.photos/1000/800?random=2" alt=""/>
                        <img src="https://picsum.photos/1000/600?random=3" alt=""/>
                        <img src="https://picsum.photos/1000/500?random=4" alt=""/>
                        <img src="https://picsum.photos/1000/800?random=5" alt=""/>
                    </div>
                    <div class="info2">
                        <div>
                            <div class="info2-inner">
                                <a href="" class="seller">Natural rubber outsoles</a>
                                <h1 class="name">{productid}.{name}</h1>
                                <span class="price">NT${price}</span>
                                <p class="excerpt">
                                    {introduce}
                                </p>
                                <a class="more-information" href="#more_info">More information</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="more_info">
                    The style that started it all. Never changed, but constantly improved. A modern reinterpretation of a classic tennis sneaker. This rendition is made from premium butter-soft suede. Instead of splitting the leather into three parts, we keep it in a thick, single layer. This enables us to use the entire leather hide, skipping the need to make a lining and delivering maximum comfort. A simple luxury.
                </div>
                <div id="review_comments">
                    <div id="review_summary">
                        <div class="review-summary-group">
                            <div class="review-summary-bar">
                                <div>5</div>
                                <div class="review-summary-bar-line">
                                    <div></div>
                                </div>
                            </div>
                            <div class="review-summary-bar">
                                <div>4</div>
                                <div class="review-summary-bar-line">
                                    <div></div>
                                </div>
                            </div>
                            <div class="review-summary-bar">
                                <div>3</div>
                                <div class="review-summary-bar-line">
                                    <div></div>
                                </div>
                            </div>
                            <div class="review-summary-bar">
                                <div>2</div>
                                <div class="review-summary-bar-line">
                                    {/* <div style="transform: scaleX(0);"></div> */}
                                </div>
                            </div>
                            <div class="review-summary-bar">
                                <div>1</div>
                                <div class="review-summary-bar-line">
                                    {/* <div style="transform: scaleX(0);"></div> */}
                                </div>
                            </div>
                        </div>
                        <div class="review-summary-text-group">
                            <div class="review-summary-point">4.0</div>
                            <div class="review-summary-count">三則評論</div>
                        </div>
                    </div>
                    

                    <ListComment state={productid} />
                    {/* <div class="li">
                        <div class="user">
                            <img class="user-img" src="https://static.shoplineapp.com/web/assets/misc/product-review-default-avatar.svg" alt=""/>
                            <div>
                                <div>G****y</div>
                                <div>March 18, 2022</div>
                            </div>
                        </div>
                        <div class="comment">
                            <div>
                            <ReactStars
                                count={5}
                                value={4}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                            />
                                <img class="star" src="media/star-full.svg" alt=""/>
                                <img class="star" src="media/star-full.svg" alt=""/>
                                <img class="star" src="media/star-empty.svg" alt=""/>
                                <img class="star" src="media/star-empty.svg" alt=""/>
                            </div>
                            <div>滿意 衣服很舒服</div>
                        </div>
                    </div> */}
                </div>
            </div>
            
            
        </div>
        
        
        


     );
}
 
export default ProduntPage;