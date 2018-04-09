'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnScreenImage = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OnScreenImage = exports.OnScreenImage = function OnScreenImage(props) {
  return _react2.default.createElement(
    OnScreen,
    null,
    function (_ref) {
      var isOnscreen = _ref.isOnscreen;
      return _react2.default.createElement('img', _extends({}, props, { src: isOnscreen ? props.src : props.placeholderSrc }));
    }
  );
};

OnScreenImage.propTypes = {
  src: _propTypes2.default.string,
  placeholderSrc: _propTypes2.default.string
};

exports.default = OnScreenImage;