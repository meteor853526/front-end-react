"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _RootReducer = _interopRequireDefault(require("./components/Reducers/RootReducer"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const persistConfig={
//     key:'main-root',
//     storage,
// }
// const persistedReducer=persistReducer(persistConfig,rootReducer);
var store = (0, _redux.createStore)(_RootReducer["default"]); // const store = createStore(persistedReducer,applyMiddleware);
// const Persistor = createStore(store);
// export{Persistor};

var _default = store;
exports["default"] = _default;