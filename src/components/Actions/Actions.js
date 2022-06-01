export const startBuyerlogin=(userCredentials)=>{
    return {
        type:"STARTBUYER_LOGIN",
        payload: userCredentials
    };
   
}

export const successBuyerlogin=(email)=>{
    return{
       
        type:"SUCCESSBUYER_LOGIN",
        payload:email
    };
}

export const failedBuyerlogin=(error)=>{
    return{
        type:"FAILEDBUYER_LOGIN",
        payload:error
    };
}

export const startSellerlogin=(userCredentials)=>{
    return {
        type:"STARTSELLER_LOGIN",
        payload: userCredentials
    };
   
}

export const successSellerlogin=(email)=>{
    return{
       
        type:"SUCCESSSELLER_LOGIN",
        payload:email
    };
}

export const failedSellerlogin=(error)=>{
    return{
        type:"FAILEDSELLER_LOGIN",
        payload:error
    };
}