import { Link } from "react-router-dom";

const Card = () => {
    return ( 
        <div class="container">
        <div class="row">
            <div class="col">
            <div class="card" >
                <img src={require('./img/test.jpg')} alt="Background"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn1"><button className="btn1">Sign in</button></Link>
                </div>
                </div>
            </div>
            <div class="col">
            <div class="card" >
                <img src={require('./img/test.jpg')} alt="Background"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="#" className="btn1"><button className="btn1">Sign in</button></Link>
                </div>
                </div>
            </div>
            <div class="col">
            <div class="card" >
                <img src={require('./img/test.jpg')} alt="Background"/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Card;