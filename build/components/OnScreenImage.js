'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnScreenImage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnScreenImage = exports.OnScreenImage = function OnScreenImage(props) {
  return _react2.default.createElement(
    OnScreen,
    null,
    function (_ref) {
      var isOnscreen = _ref.isOnscreen;
      return _react2.default.createElement('img', _extends({}, undefined.props, { src: isOnscreen ? undefined.props.src : undefined.props.placeholderSrc }));
    }
  );
};

OnScreenImage.propTypes = {
  src: PropTypes.string,
  placeholderSrc: PropTypes.string
};