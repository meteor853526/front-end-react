const initialState = {
    user:null,
    isFetch:false,
    isError:false,
}
const UserReducer=(state=initialState, action)=>{
    switch (action.type){
        case "START_LOGIN":
            return {
                user:null,
                isFetch:true,
                isError:false,
            };

              case  "SUCCESS_LOGIN":
                return {
                    isFetch:false,
                    isError:false,
                    user:action.payload.email,
                };
                case  "FAILED_LOGIN":
                    return {
                    user:null,
                    isFetch:false,
                    isError:action.payload.email,
                };
              default: return state;
    }

};

export default UserReducer;