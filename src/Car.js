import { Link } from "react-router-dom";
import $ from "jquery";
import Category from './Category';
const Car = () => {
    return ( 
    <div className="" >
        <header className="entry-header has-text-align-center header-footer-group">
            <div className="entry-header-inner section-inner medium entry-header">
                <h1 className="entry-title entry-header">首頁</h1>
            </div>
                
        </header>
        
        <div>
           
            {/* <img src={require('./img/CD-1.jpg') }  style={{width: '100vw', height: '500px', 'object-fit': 'cover'}}alt=""/> */}

                <div className="bod">  
                    <h1 >CD以及書籍商店</h1><br/>  
                    <h2>流行音樂及熱門書籍</h2><br/>
                    <a className="intoshop_btn" href="/product">立即選購</a>
                </div>
            
            <header className="entry-header has-text-align-center header-footer-group">
                <div className="entry-header-inner section-inner medium entry-header">
                    <h3 className="entry-title entry-header" style={{'font-size': '2.2rem','font-weight': '800'}}>關於我們</h3>
                </div>
                    
            </header>

                <div className="content">
                    <img src={require('./img/coffee.jpg')} style={{'width': '40vw'}}  alt=""/>
                    <div className="coffee_contect">
                        <div className="coffee_word">
                        
                            <h3 >每本書跟CD背後都有一個故事。</h3>
                            <cite>在CDBOOK上找到你的故事</cite>
                        </div>
                    </div>
                    
                </div>
            <header className="entry-header has-text-align-center header-footer-group">
                <div className="entry-header-inner section-inner medium entry-header">
                    <h3 className="entry-title entry-header" style={{'font-size': '2.2rem','font-weight': '800'}}>歡迎光臨</h3>
                </div>
                    
            </header>
                <div className="bod1">  
                    <h1 >CDBOOK的商品真的很棒！買完都變帥哥了！</h1><br/>  
                    
                    <a className="intoshop_btn" href="/product">立即選購</a>
                </div>


        </div>
        
        {/* <div className="flex-row">
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
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                    <img src={require('./img/home_2.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src={require('./img/home_3.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
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
            
        </div> */}
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
