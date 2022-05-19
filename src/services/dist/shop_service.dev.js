"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _formData = _interopRequireDefault(require("form-data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shop_Carservice =
/*#__PURE__*/
function () {
  function Shop_Carservice() {
    _classCallCheck(this, Shop_Carservice);
  }

  _createClass(Shop_Carservice, [{
    key: "getservice",
    value: function getservice(props) {
      return _axios["default"].get('http://localhost:8080/api/v1/Shop_Car/listcar', {
        params: {
          email: props.user
        }
      });
    }
  }]);

  return Shop_Carservice;
}();

var _default = new Shop_Carservice();

exports["default"] = _default;