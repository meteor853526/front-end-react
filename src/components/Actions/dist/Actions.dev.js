"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failedlogin = exports.successlogin = exports.startlogin = void 0;

var startlogin = function startlogin() {
  return {
    type: "START_LOGIN"
  };
};

exports.startlogin = startlogin;

var successlogin = function successlogin(user) {
  return {
    type: "SUCCESS_LOGIN",
    payload: user
  };
};

exports.successlogin = successlogin;

var failedlogin = function failedlogin(error) {
  return {
    type: "FAILED_LOGIN",
    payload: error
  };
};

exports.failedlogin = failedlogin;