"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = void 0;

var _aphrodite = require("aphrodite");

var _themeContext = require("../../context/theme-context");

var _size = require("../../constants/ui/size");

var _view = require("../view");

var _jsxRuntime = require("react/jsx-runtime");

const rotateKeyframes = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
};

const styles = _aphrodite.StyleSheet.create({
  spinnerRing: {
    position: 'relative'
  },
  spinnerRingChild: {
    position: 'absolute',
    borderStyle: 'solid',
    animationName: [rotateKeyframes],
    animationDuration: '1.2s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'cubic-bezier(0.5, 0, 0.5, 1)'
  },
  spinnerRingChild1: {
    animationDelay: '-0.45s'
  },
  spinnerRingChild2: {
    animationDelay: '-0.3s'
  },
  spinnerRingChild3: {
    animationDelay: '-0.15s'
  }
});

const LoadingSpinner = _ref => {
  let {
    size = _size.DEFAULT_SIZE,
    color
  } = _ref;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  const themeDimensionForSize = theme.dimension[_size.SIZE[size]];
  const spinnerRingChildStyle = {
    width: themeDimensionForSize * 0.8,
    height: themeDimensionForSize * 0.8,
    margin: themeDimensionForSize * 0.1,
    borderRadius: themeDimensionForSize * 0.4,
    borderWidth: themeDimensionForSize * 0.1,
    borderColor: "".concat(color ? theme.colors[color] : theme.foregroundColor, " transparent transparent transparent")
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_view.View, {
    styleDefinitions: [styles.spinnerRing],
    style: {
      width: themeDimensionForSize,
      height: themeDimensionForSize
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
      styleDefinitions: [styles.spinnerRingChild, styles.spinnerRingChild1],
      style: spinnerRingChildStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
      styleDefinitions: [styles.spinnerRingChild, styles.spinnerRingChild2],
      style: spinnerRingChildStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
      styleDefinitions: [styles.spinnerRingChild, styles.spinnerRingChild3],
      style: spinnerRingChildStyle
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
      styleDefinitions: [styles.spinnerRingChild],
      style: spinnerRingChildStyle
    })]
  });
};

exports.LoadingSpinner = LoadingSpinner;