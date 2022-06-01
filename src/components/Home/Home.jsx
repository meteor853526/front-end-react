import React from 'react'
import NavBar from '../../NavBar';
import {useSelector} from 'react-redux';
import ContentComponent from '../../product/Content_Component';
function Home() {
    const state = useSelector(state => state.UserReducer);
   
    return (
      
        <div>
          
          <h5>你好,使用者: {state.user}</h5>
          <ContentComponent user={state}/>
          {/* <h1>{state.user}</h1> */}
          <h1>welcomeimg</h1>

        </div>
    )
}

export default Home;
