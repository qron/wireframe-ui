"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chip = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _themeContext = require("../../context/theme-context");

var _colors = require("../../constants/ui/colors");

var _size = require("../../constants/ui/size");

var _text = require("../text");

var _view = require("../view");

var _icon = require("../icon");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = _noImportant.StyleSheet.create({
  chip: {
    display: 'inline-flex',
    borderRadius: 'var(--wireframe-border-radius)',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 'var(--wireframe-spacing-element)',
    backgroundColor: 'var(--wireframe-chip-background-color)',
    color: 'var(--wireframe-foreground-color)'
  },
  chipS: {
    height: 'var(--wireframe-dimension-s)'
  },
  chipM: {
    height: 'var(--wireframe-dimension-m)'
  },
  chipL: {
    height: 'var(--wireframe-dimension-l)'
  },
  chipIcon: {
    // margin: 'var(--wireframe-spacing-element)',
    color: 'currentColor'
  },
  chipText: {
    margin: 'var(--wireframe-spacing-element)',
    color: 'currentColor'
  }
});

const Chip = _ref => {
  let {
    children,
    size = _size.DEFAULT_SIZE,
    color = _colors.DEFAULT_COLOR,
    style,
    styleDefinitions = [],
    ChipIcon
  } = _ref;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_view.View, {
    styleDefinitions: [styles.chip, styles["chip".concat(_size.SIZE[size])], ...styleDefinitions],
    style: _objectSpread({
      '--wireframe-chip-background-color': theme.colors[_colors.COLORS[color]]
    }, style),
    children: [!!ChipIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.Icon, {
      iconStyleDefinitions: [styles.chipIcon],
      Icon: ChipIcon,
      size: size
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_text.Text, {
      styleDefinitions: [styles.chipText],
      size: size,
      small: true,
      children: children
    })]
  });
};

exports.Chip = Chip;