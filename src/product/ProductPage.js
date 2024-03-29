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