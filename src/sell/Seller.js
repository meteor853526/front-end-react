import { Link } from "react-router-dom";

const Seller = () => {
    return ( 
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col">
                    <div className="card" >
                        {/* <img src={require('./img/test.jpg')} alt="Background"/> */}
                        <div className="card-body">
                            <h5 className="card-title">上架商品</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/SellerProduct" className="btn1"><button className="btn1">點擊</button></Link>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        {/* <img src={require('./img/test.jpg')} alt="Background"/> */}
                        <div className="card-body">
                            <h5 className="card-title">查看當前訂單</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/SellerOrder" className="btn1"><button className="btn1">Sign in</button></Link>
                        </div>
                        </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        {/* <img src={require('./img/test.jpg')} alt="Background"/> */}
                        <div className="card-body">
                            <h5 className="card-title">目前</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="#" className="btn1"><button className="btn1">Sign in</button></Link>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="">
                
                </div>
            </div>
        </div>
        
        
        


     );
}
 
export default Seller;