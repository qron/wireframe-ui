"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _themeContext = require("../../context/theme-context");

var _colors = require("../../constants/ui/colors");

var _size = require("../../constants/ui/size");

var _view = require("../view");

var _text = require("../text");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  progressBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'var(--wireframe-background-color)',
    borderStyle: 'solid',
    borderWidth: 'var(--wireframe-border-width)',
    borderColor: 'var(--wireframe-border-color)',
    borderRadius: 'var(--wireframe-border-radius)',
    overflow: 'hidden'
  },
  progressBarContainerS: {
    height: 'var(--wireframe-dimension-s)'
  },
  progressBarContainerM: {
    height: 'var(--wireframe-dimension-m)'
  },
  progressBarContainerL: {
    height: 'var(--wireframe-dimension-l)'
  },
  progressBarContent: {
    backgroundColor: 'var(--wireframe-progress-bar-content-background-color)',
    width: 'var(--wireframe-progress-bar-content-width)'
  },
  progressBarLabelView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const ProgressBar = _ref => {
  let {
    color = _colors.DEFAULT_COLOR,
    size = _size.DEFAULT_SIZE,
    style,
    styleDefinitions = [],
    progress = 0,
    label
  } = _ref;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_view.View, {
    style: style,
    styleDefinitions: [styles.progressBarContainer, styles["progressBarContainer".concat(_size.SIZE[size])], ...styleDefinitions],
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
      styleDefinitions: [styles.progressBarContent],
      style: {
        '--wireframe-progress-bar-content-background-color': theme.colors[_colors.COLORS[color]],
        '--wireframe-progress-bar-content-width': "".concat(progress * 100, "%")
      }
    }), !!label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
      styleDefinitions: [styles.progressBarLabelView],
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_text.Text, {
        size: size,
        children: label
      })
    })]
  });
};

exports.ProgressBar = ProgressBar;