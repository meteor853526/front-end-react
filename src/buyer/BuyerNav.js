
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import React,{Component} from "react";

import { useEffect, useState,useRef  } from "react";
const $ = require('jquery')
$.DataTable = require('datatables.net')
const Buyer_nav = (props) => {
    let history=useNavigate();
    const [id, setid] = useState([])
    console.log(props.user)
    const tableRef = useRef()
    
    useEffect(() => {
        
},[])

   
   
    return ( 
     
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
            <Link to="/buyerCenter"><label class="btn btn-outline-primary" for="btnradio1">Radio 1</label></Link>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
            <Link to="/buyer"><label class="btn btn-outline-primary" for="btnradio2">Radio 2</label></Link>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
            <Link to="/BuyerOrder"><label class="btn btn-outline-primary" for="btnradio3">Radio 3</label></Link>
            </div>
  
        
        
        


     );
}
export default Buyer_nav;