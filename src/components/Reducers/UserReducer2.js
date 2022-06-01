const initialState = {
    user2:null,
    isFetch:false,
    isError:false,
}
const UserReducer2=(state2=initialState, action)=>{
    switch (action.type){
        case "STARTSELLER_LOGIN":
            return {
                user2:null,
                isFetch:true,
                isError:false,
            };

              case  "SUCCESSSELLER_LOGIN":
                  console.log(action.payload);
                return {
                    isFetch:false,
                    isError:false,
                    user2:action.payload,
                };
                case  "FAILEDSELLER_LOGIN":
                    return {
                    user2:null,
                    isFetch:false,
                    isError:action.payload,
                };
              default: return state2;
    }

};

export default UserReducer2;