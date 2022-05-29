import { Link } from "react-router-dom";
import React,{Component} from "react";
import axios from 'axios';
import FormData from 'form-data'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const ListComment =()=> {
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
            alert('請先登入會員');

        });
    },[])

    
   

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
    {
        id.map(
            id=>

            <div class="li">
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
            </div>   
        )
    }
    </div>
        


     );
}
 
export default ListComment;