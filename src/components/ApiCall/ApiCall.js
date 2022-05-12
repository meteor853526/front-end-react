import axios from 'axios';



import {startlogin,successlogin,failedlogin} from '../Actions/Actions'
export const ApiCall=async(userCredentials,dispatch)=>{
dispatch(startlogin());

        
    try {
        // const user=await axios.post('http://localhost:8080/api/v1/user/checkUser',userCredentials,{
        //     'content-type': 'application/x-www-form-urlencoded'
        // })
        // .then(function (response) {
        //     console.log(response);
        //     dispatch(successlogin(response));
            
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
      

        const user = await axios({
            url: 'http://localhost:8080/api/v1/user/checkUser',
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            data:userCredentials,
            params:{
                'email':userCredentials.email,
                'passwd': userCredentials.passwd,
                
            }
        })
        .then(function (res) {
            console.log(res);

        })
        .catch(function (error) {
            console.log(error);
        });



       

        dispatch(successlogin(userCredentials));
        
        
    } catch (error) {
        dispatch(failedlogin(error));
        console.log(error);

    }
    
}