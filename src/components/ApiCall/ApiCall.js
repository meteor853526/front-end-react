import axios from 'axios';


import { useNavigate } from 'react-router-dom';
import {startBuyerlogin,successBuyerlogin,failedBuyerlogin} from '../Actions/Actions'
export const ApiCall=async(userCredentials,dispatch)=>{
dispatch(startBuyerlogin(userCredentials));

        
    try {
        

        await axios({
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
            
            dispatch(successBuyerlogin(userCredentials.email));
            alert("登入成功");
        })
        .catch(function (error) {
            console.log(error);
            alert("密碼錯誤");
        });



       

        
        
        
    } catch (error) {
        dispatch(failedBuyerlogin(error));
        console.log(error);

    }
    
}