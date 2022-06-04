import { Link } from "react-router-dom";
import React,{Component} from "react";
import axios from 'axios';
import FormData from 'form-data'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const ListComment =()=> {
    var count = 0;
    var total = 0;
    var stars = 0;
    const location = useLocation();
    const { productid } = location.state;
    console.log(productid); // output: "the-page-id"
    const [id, setid] = useState([])
    // const [msg, setmsg] = useState('')
    useEffect(() =>{
        axios({
            url: 'http://localhost:8080/api/v1/Comment',
            method: "Get",
            
            headers: {
                'content-type': 'application/json'
            },
            params:{  
                'productid':productid,
                
            }
        })
        .then(function (response) {
            console.log(response);
            setid(response.data)
            
        })
        .catch(function (error) {
            console.log(error);
  

        });
    },[])
    
    return ( 

    <div>
        {
            id.map(
                id=> 
                <div>

                    <div style={{display:"none"}}>{count += 1}</div>
                    <div style={{display:"none"}}>{total += id.star}</div>
                    <div >{stars = (total/count)}</div>
                </div>
            )
        }
        <div id="review_summary">
            <ReactStars
                count={5}
                value={stars}
                edit={false}
                size={38}
                activeColor="#ffd700"
            />
            <div class="review-summary-group">
                            
            </div>
            <div class="review-summary-text-group">
                
            <div class="review-summary-point">{}</div>
            
                <div class="review-summary-count">{count}則評論</div>
            </div>
        </div>
    {
        id.map(
            id=>

            <div class="li" style={{width : "55vw"}}>
                <div class="user">
                    <img class="user-img" src="https://static.shoplineapp.com/web/assets/misc/product-review-default-avatar.svg" alt=""/>
                        <div>
                            <div>{id.buyer}</div>
                            <div>{id.time}</div>
                        </div>
                        </div>
                        <div class="comment">
                        <div>
                            <ReactStars
                                count={5}
                                value={id.star}
                                edit={false}
                                size={24}
                                activeColor="#ffd700"
                            />
                            
                        </div>
                    <div>{id.content}</div>
                </div>
            </div>   
        )
    }
    </div>
        


     );
}
 
export default ListComment;