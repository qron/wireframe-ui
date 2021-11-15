"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _themeContext = require("../../context/theme-context");

var _view = require("../view");

var _size = require("../../constants/ui/size");

var _colors = require("../../constants/ui/colors");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  iconViewS: {
    width: 'var(--wireframe-dimension-s)',
    height: 'var(--wireframe-dimension-s)'
  },
  iconViewM: {
    width: 'var(--wireframe-dimension-m)',
    height: 'var(--wireframe-dimension-m)'
  },
  iconViewL: {
    width: 'var(--wireframe-dimension-l)',
    height: 'var(--wireframe-dimension-l)'
  },
  iconS: {
    fontSize: 'var(--wireframe-font-size-m-s)'
  },
  iconM: {
    fontSize: 'var(--wireframe-font-size-m-m)'
  },
  iconL: {
    fontSize: 'var(--wireframe-font-size-m-l)'
  },
  icon: {
    color: 'var(--wireframe-icon-color)'
  }
});

const Icon = _ref => {
  let {
    Icon,
    size,
    color,
    style,
    styleDefinitions = [],
    iconStyleDefinitions = []
  } = _ref;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
    styleDefinitions: [styles.iconView, styles["iconView".concat(_size.SIZE[size])], ...styleDefinitions],
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
      className: (0, _noImportant.css)(styles.icon, styles["icon".concat(_size.SIZE[size])], ...iconStyleDefinitions),
      style: {
        '--wireframe-icon-color': theme.colors[_colors.COLORS[color]]
      }
    })
  });
};

exports.Icon = Icon;