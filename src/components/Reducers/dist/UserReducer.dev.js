"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  user: null,
  isFetch: false,
  isError: false
};

var UserReducer = function UserReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "START_LOGIN":
      return {
        user: null,
        isFetch: true,
        isError: false
      };

    case "SUCCESS_LOGIN":
      return {
        isFetch: false,
        isError: false,
        user: action.payload.email
      };

    case "FAILED_LOGIN":
      return {
        user: null,
        isFetch: false,
        isError: action.payload.email
      };

    default:
      return state;
  }
};

var _default = UserReducer;
exports["default"] = _default;