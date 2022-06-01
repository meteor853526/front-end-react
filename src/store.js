import { applyMiddleware} from 'redux';
import {createStore} from "redux";
import rootReducer from "./components/Reducers/RootReducer";
import {persistStore ,persistReducer } from 'redux-persist';
import storage from  "redux-persist/lib/storage";


// const persistConfig={
//     key:'main-root',
//     storage,
// }

// const persistedReducer=persistReducer(persistConfig,rootReducer);

const store = createStore(rootReducer);
// const store = createStore(persistedReducer,applyMiddleware);
// const Persistor = createStore(store);

// export{Persistor};
export default store;