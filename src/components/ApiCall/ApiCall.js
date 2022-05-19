import axios from 'axios';



import {startlogin,successlogin,failedlogin} from '../Actions/Actions'
export const ApiCall=async(userCredentials,dispatch)=>{
dispatch(startlogin());

        
    try {
        

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
                'type' : userCredentials.type
            }
        })
        .then(function (res) {
            console.log(res);
            dispatch(successlogin(userCredentials));

        })
        .catch(function (error) {
            console.log(error);
        });



       

        
        
        
    } catch (error) {
        dispatch(failedlogin(error));
        console.log(error);

    }
    
}