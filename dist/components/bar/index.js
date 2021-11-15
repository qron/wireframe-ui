"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _colors = require("../../constants/ui/colors");

var _size = require("../../constants/ui/size");

var _view = require("../view");

var _themeContext = require("../../context/theme-context");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = _noImportant.StyleSheet.create({
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'var(--wireframe-header-bar-background-color)',
    color: 'var(--wireframe-foreground-color)'
  },
  barS: {
    height: 'var(--wireframe-dimension-s)'
  },
  barM: {
    height: 'var(--wireframe-dimension-m)'
  },
  barL: {
    height: 'var(--wireframe-dimension-l)'
  }
});

const Bar = _ref => {
  let {
    size = _size.DEFAULT_SIZE,
    color = _colors.DEFAULT_COLOR,
    children,
    styleDefinitions = [],
    style
  } = _ref;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
    styleDefinitions: [styles.bar, styles["bar".concat(_size.SIZE[size])], ...styleDefinitions],
    style: _objectSpread({
      '--wireframe-header-bar-background-color': theme.colors[_colors.COLORS[color]]
    }, style),
    children: children
  });
};

exports.Bar = Bar;