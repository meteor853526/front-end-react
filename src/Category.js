import { Link } from "react-router-dom";
import logo from './img/文具.svg';
import girls from './img/女生衣著.svg';
import boys from './img/男生衣著.svg';
import sport from './img/運動鞋.svg'
import glass from './img/眼鏡.svg'
import pen from './img/文具.svg'
import workthing from './img/上班族用品.svg'
import homething from './img/居家小物.svg'
import climb from './img/爬山用具.svg'
import shot from './img/相機.svg'
import travle from './img/旅行用品.svg'
import book from './img/書本.svg'
import sportthing from './img/運動配件.svg'
import computer from './img/電腦.svg'
import work from './img/辦公用品.svg'
import enjoy from './img/露營用品.svg'
const Category = () => {
    return ( 
      <div className="all_category">
        <div className="box">
            <a> .</a>
          </div>
          <div className="flex_title">
            <font className="title">分類</font>
          </div>
              <ul class="category">
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="/#">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={girls} alt="Background" />
                      </div>
                      <div className="list-text" >
                          <font className="list-sub" >
                                女姓衣著
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img className="book"src={book} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            書本
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={boys} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                          男性衣著
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={homething} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            居家小物
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={sport} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                運動鞋
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            文具
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={climb} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                登山用具
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={shot} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            相機
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={travle} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                旅行用品
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={workthing} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            上班族用品
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img className="computer"src={computer} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                電腦配件
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img className="work" src={work} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            辦公用品
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                文具
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            文具
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                文具
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            文具
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                文具
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            文具
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
              <li className="list">
                <div className="group">
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                      <div className="list-text">
                          <font className="">
                                文具
                          </font>
                      </div>
                    </div>
                  </a>
                  <a className="photo-text" href="..">
                    <div className="vert-photo-text">
                      <div className="list-photo">
                          <img src={logo} alt="Background"/>
                      </div>
                          <div className="list-text">
                      <font className="">
                            文具
                      </font>
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          
      </div>
      
        
    );
}
 
export default Category;