"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _themeContext = require("../../context/theme-context");

var _size = require("../../constants/ui/size");

var _colors = require("../../constants/ui/colors");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = _noImportant.StyleSheet.create({
  text: {
    fontFamily: 'var(--wireframe-font-family)',
    color: 'var(--wireframe-text-color)'
  },
  textSS: {
    fontSize: 'var(--wireframe-font-size-s-s)'
  },
  textSM: {
    fontSize: 'var(--wireframe-font-size-s-m)'
  },
  textSL: {
    fontSize: 'var(--wireframe-font-size-s-l)'
  },
  textMS: {
    fontSize: 'var(--wireframe-font-size-m-s)'
  },
  textMM: {
    fontSize: 'var(--wireframe-font-size-m-m)'
  },
  textML: {
    fontSize: 'var(--wireframe-font-size-m-l)'
  },
  textLS: {
    fontSize: 'var(--wireframe-font-size-l-s)'
  },
  textLM: {
    fontSize: 'var(--wireframe-font-size-l-m)'
  },
  textLL: {
    fontSize: 'var(--wireframe-font-size-l-l)'
  }
});

const getFontSizeStyleDefinition = _ref => {
  let {
    size,
    small,
    large
  } = _ref;

  if (small) {
    return styles["textS".concat(_size.SIZE[size])];
  }

  if (large) {
    return styles["textL".concat(_size.SIZE[size])];
  }

  return styles["textM".concat(_size.SIZE[size])];
};

const Text = _ref2 => {
  let {
    children,
    size = _size.DEFAULT_SIZE,
    small,
    large,
    color,
    style,
    styleDefinitions = []
  } = _ref2;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  const fontSizeStyleDefinition = getFontSizeStyleDefinition({
    size,
    small,
    large
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: (0, _noImportant.css)(styles.text, fontSizeStyleDefinition, ...styleDefinitions),
    style: _objectSpread({
      '--wireframe-text-color': color ? theme.colors[_colors.COLORS[color]] : theme.foregroundColor
    }, style),
    children: children
  });
};

exports.Text = Text;