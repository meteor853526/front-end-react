import { Link } from "react-router-dom";
import $ from "jquery";
const Car = () => {
    return ( 
        <div class="wrap">
            <div class="carousel">
                {/* <!--左箭頭--> */}
                <div class="arrow arrow-l">&lt;</div>
                {/* <!--右箭頭--> */}
                <div class="arrow arrow-r">&gt;</div>
                {/* <!--輪播圖--> */}
                <div class="imgs">
                    <img src={require('./img/test.jpg')} alt="Background"/>
                    <img src={require('./img/test.jpg')} alt="Background"/>
                    <img src={require('./img/test.jpg')} alt="Background"/>
                    <img src={require('./img/test.jpg')} alt="Background"/>
                    <img src={require('./img/test.jpg')} alt="Background"/>
                </div>
                {/* <!--圓點--> */}
                <div class="circle">
                    <ul>
                        <li class="active"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>

        </div>
    );
}
 
export default Car;
