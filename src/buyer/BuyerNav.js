import { Link} from "react-router-dom";
import React from "react";

const Buyer_nav = () => {
    
    return ( 
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
            <Link to="/buyerCenter"><label class="btn btn-primary some-class" for="btnradio1" style={{padding:"20px"}}>個人資訊</label></Link>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
            <Link to="/buyer"><label class="btn btn-primary some-class" for="btnradio2">歷史訂單</label></Link>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
            <Link to="/BuyerOrder"><label class="btn btn-primary some-class" for="btnradio3">當前訂單</label></Link>
            </div>
     );
}
export default Buyer_nav;