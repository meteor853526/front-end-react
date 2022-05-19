"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiCall = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _Actions = require("../Actions/Actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ApiCall = function ApiCall(userCredentials, dispatch) {
  var user;
  return regeneratorRuntime.async(function ApiCall$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch((0, _Actions.startlogin)());
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _axios["default"])({
            url: 'http://localhost:8080/api/v1/user/checkUser',
            method: "POST",
            headers: {
              'content-type': 'application/json'
            },
            data: userCredentials,
            params: {
              'email': userCredentials.email,
              'passwd': userCredentials.passwd
            }
          }).then(function (res) {
            console.log(res);
            dispatch((0, _Actions.successlogin)(userCredentials));
          })["catch"](function (error) {
            console.log(error);
          }));

        case 4:
          user = _context.sent;
          _context.next = 11;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](1);
          dispatch((0, _Actions.failedlogin)(_context.t0));
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.ApiCall = ApiCall;