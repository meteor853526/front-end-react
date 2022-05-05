import { Link } from "react-router-dom";
import $ from "jquery";
import Category from './Category';
const Car = () => {
    return ( 
    <div className="" style={{backgroundColor:"#fdfafa"}}>

    
        <div className="flex-row">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={require('./img/home_1.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={require('./img/home_2.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={require('./img/home_3.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        {/* <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="vert">
                <img src={require('./img/home_side1.png')}  alt="..." style={{width:"75%"}}/>
                <img src={require('./img/home_side2.png')}  alt="..." style={{width:"75%"}}/>
            </div>
            
        </div>
        <Category/>               
    </div>
        
        // <div className="wrap">
        //     <div className="carousel">
        //         {/* <!--左箭頭--> */}
        //         <div className="arrow arrow-l">&lt;</div>
        //         {/* <!--右箭頭--> */}
        //         <div className="arrow arrow-r">&gt;</div>
        //         {/* <!--輪播圖--> */}
        //         <div className="imgs">
        //             <img src={require('./img/cat_1.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_2.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_3.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_4.jpg')} alt="Background"/>
        //             <img src={require('./img/cat_5.jpg')} alt="Background"/>
        //         </div>
        //         {/* <!--圓點--> */}
        //         <div className="circle">
        //             <ul>
        //                 <li className="active"></li>
        //                 <li className="point"></li>
        //                 <li className="point"></li>
        //                 <li className="point"></li>
        //                 <li className="point"></li>
        //             </ul>
        //         </div>
        //     </div>

        // </div>
    );
}


export default Car;
