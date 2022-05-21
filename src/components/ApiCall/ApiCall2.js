import axios from 'axios';



import {startSellerlogin,successSellerlogin,failedSellerlogin} from '../Actions/Actions'
export const ApiCall2=async(userCredentials2,dispatch2)=>{
dispatch2(startSellerlogin());

        
    try {
        

        const user = await axios({
            url: 'http://localhost:8080/api/v1/user/checkUser',
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            data:userCredentials2,
            params:{
                'email':userCredentials2.email,
                'passwd': userCredentials2.passwd,
                'type' : userCredentials2.type
            }
        })
        .then(function (res) {
            console.log(res);
            dispatch2(successSellerlogin(userCredentials2.email));

        })
        .catch(function (error) {
            console.log(error);
        });



       

        
        
        
    } catch (error) {
        dispatch2(failedSellerlogin(error));
        console.log(error);

    }
    
}