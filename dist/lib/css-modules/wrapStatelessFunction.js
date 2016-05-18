'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _linkElement = require('./linkElement');

var _linkElement2 = _interopRequireDefault(_linkElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component, styles, options) {
  var WrappedComponent = function WrappedComponent() {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var renderResult = Component.apply(undefined, [props].concat(args));

    if (renderResult) {
      return (0, _linkElement2.default)(renderResult, styles, options);
    }
    return renderResult;
  };

  return WrappedComponent;
};

module.exports = exports['default'];