import { Link } from "react-router-dom";
import $ from "jquery";
const Car = () => {
    return ( 
        <div class="flex-row">
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="10000">
                    <img src={require('./img/cat_4.jpg')} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                    <img src={require('./img/cat_5.jpg')} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src={require('./img/cat_3.jpg')} class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="vert">
                <img src={require('./img/cat_4.jpg')} class="d-block w-100" alt="..."/>
                <img src={require('./img/cat_5.jpg')} class="d-block w-100" alt="..."/>
            </div>
        </div>

        
        // <div class="wrap">
        //     <div class="carousel">
        //         {/* <!--左箭頭--> */}
        //         <div class="arrow arrow-l">&lt;</div>
        //         {/* <!--右箭頭--> */}
        //         <div class="arrow arrow-r">&gt;</div>
        //         {/* <!--輪播圖--> */}
        //         <div class="imgs">
        //             <img src={require('./img/cat_1.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_2.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_3.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_4.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_5.jpg')} alt="Background"/>
        //         </div>
        //         {/* <!--圓點--> */}
        //         <div class="circle">
        //             <ul>
        //                 <li class="active"></li>
        //                 <li class="point"></li>
        //                 <li class="point"></li>
        //                 <li class="point"></li>
        //                 <li class="point"></li>
        //             </ul>
        //         </div>
        //     </div>

        // </div>
    );
}


export default Car;
