"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _button = require("../../constants/ui/button");

var _colors = require("../../constants/ui/colors");

var _size = require("../../constants/ui/size");

var _themeContext = require("../../context/theme-context");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = _noImportant.StyleSheet.create({
  button: {
    all: 'unset',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 'var(--wireframe-border-radius)',
    borderWidth: 'var(--wireframe-border-width)',
    ':disabled': {
      borderColor: 'var(--wireframe-color-disabled-foreground)',
      color: 'var(--wireframe-color-disabled-foreground)'
    }
  },
  buttonS: {
    minWidth: 'var(--wireframe-dimension-s)',
    height: 'var(--wireframe-dimension-s)'
  },
  buttonM: {
    minWidth: 'var(--wireframe-dimension-m)',
    height: 'var(--wireframe-dimension-m)'
  },
  buttonL: {
    minWidth: 'var(--wireframe-dimension-l)',
    height: 'var(--wireframe-dimension-l)'
  },
  contained: {
    borderStyle: 'solid',
    boxShadow: 'var(--wireframe-elevation-1)',
    borderColor: 'var(--wireframe-foreground-color)',
    backgroundColor: 'var(--wireframe-button-color)',
    ':disabled': {
      backgroundColor: 'var(--wireframe-color-disabled-background)'
    },
    color: 'var(--wireframe-foreground-color)'
  },
  outlined: {
    borderStyle: 'solid',
    borderColor: 'var(--wireframe-button-color)',
    color: 'var(--wireframe-button-color)'
  },
  text: {
    borderStyle: 'none',
    color: 'var(--wireframe-button-color)'
  }
});

const Button = _ref => {
  let {
    children,
    onClick,
    color = _colors.DEFAULT_COLOR,
    size = _size.DEFAULT_SIZE,
    variant = _button.DEFAULT_VARIANT,
    style,
    styleDefinitions = [],
    isDisabled // name,
    // id,
    // value
    // autoFocus

  } = _ref;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    disabled: isDisabled,
    className: (0, _noImportant.css)(styles.button, styles[variant], styles["button".concat(_size.SIZE[size])], ...styleDefinitions),
    style: _objectSpread({
      '--wireframe-button-color': theme.colors[_colors.COLORS[color]]
    }, style),
    onClick: onClick,
    children: children
  });
};

exports.Button = Button;