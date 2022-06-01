const initialState = {
    user:null,
    isFetch:false,
    isError:false,
}
const UserReducer=(state=initialState, action)=>{
    switch (action.type){
        case "STARTBUYER_LOGIN":
            return {
                user:null,
                isFetch:true,
                isError:false,
            };

              case  "SUCCESSBUYER_LOGIN":
                console.log(action.payload);
                return {
                    isFetch:false,
                    isError:false,
                    user:action.payload,
                };
                case  "FAILEDBUYER_LOGIN":
                    return {
                    user:null,
                    isFetch:false,
                    isError:action.payload,
                };
              default: return state;
    }

};

export default UserReducer;