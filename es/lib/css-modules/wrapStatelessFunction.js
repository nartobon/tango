import linkElement from './linkElement';

export default (function (Component, styles, options) {
  var WrappedComponent = function WrappedComponent() {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var props = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var renderResult = Component.apply(undefined, [props].concat(args));

    if (renderResult) {
      return linkElement(renderResult, styles, options);
    }
    return renderResult;
  };

  return WrappedComponent;
})