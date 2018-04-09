"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OnScreen = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OnScreen = exports.OnScreen = function (_React$Component) {
  _inherits(OnScreen, _React$Component);

  function OnScreen(props) {
    _classCallCheck(this, OnScreen);

    var _this = _possibleConstructorReturn(this, (OnScreen.__proto__ || Object.getPrototypeOf(OnScreen)).call(this, props));

    _this.state = {
      isOnscreen: false
    };
    return _this;
  }

  _createClass(OnScreen, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if ("IntersectionObserver" in window) {
        var onScreenObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var lazyImage = entry.target;
              onScreenObserver.unobserve(lazyImage);
              _this2.setState({ isOnscreen: true });
            }
          });
        });

        onScreenObserver.observe(this.offscreenRef);
      }
    }
  }, {
    key: "getChildProps",
    value: function getChildProps() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      var childProps = {};
      Object.keys(props).forEach(function (key) {
        if (!{}.hasOwnProperty.call(OnScreen.defaultProps, key)) {
          childProps[key] = props[key];
        }
      });
      return childProps;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        "div",
        _extends({ ref: function ref(el) {
            return _this3.offscreenRef = el;
          } }, this.props),
        this.props.children(_extends({}, this.getChildProps(), { isOnscreen: this.state.isOnscreen }))
      );
    }
  }]);

  return OnScreen;
}(_react2.default.Component);

OnScreen.defaultProps = {};