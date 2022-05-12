import axios from 'axios';



import {startlogin,successlogin,failedlogin} from '../Actions/Actions'
export const ApiCall=async(userCredentials,dispatch)=>{
dispatch(startlogin());

        
    try {
        const user=await axios.post('http://localhost:8080/api/v1/user/checkUser',userCredentials,{
            'content-type': 'application/x-www-form-urlencoded'
        })
        .then(function (response) {
            console.log(response);
            dispatch(successlogin(response));
            
        })
        .catch(function (error) {
            console.log(error);
        });
      

        // const user=await axios({
        //     url: 'http://localhost:8080/api/v1/product/addP',
        //     method: "POST",
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     },
        //     params:{
        //         'email':this.state.name,
        //         'category': this.state.category,
        //         'price':this.state.price,
        //         'type': this.state.type,
        //         'number':this.state.number,
        //         'introduce':this.state.introduce,
        //     }
        // })
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });



       

        dispatch(successlogin(user));
        
        
    } catch (error) {
        dispatch(failedlogin(error));
        console.log(error);

    }
    
}