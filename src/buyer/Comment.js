
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";

import { useEffect, useState,useRef  } from "react";

const Comment = (props) => {
    let history=useNavigate();
    const [id, setid] = useState([])
    console.log(props.user)
    const tableRef = useRef()
    
    useEffect(() => {
        
    },[])

   
   
    return ( 
     
            <div>
        
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{display: "none"}}>
                    
                </button>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">填寫商品評論</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ...
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
  
        
        
        


     );
}
export default Comment;