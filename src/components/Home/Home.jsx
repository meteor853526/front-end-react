import React from 'react'
import NavBar from '../../NavBar';
import {useSelector} from 'react-redux';
function Home() {
    const state = useSelector(state => state.UserReducer);
   
    return (
      
        <div>
          <NavBar/>
          <h1>{state.user}</h1>
          <h1>welcomeimg</h1>

        </div>
    )
}

export default Home;
