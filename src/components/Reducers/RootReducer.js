import UserReducer from "./UserReducer";
import UserReducer2 from "./UserReducer2";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    UserReducer,UserReducer2
});

export default rootReducer;