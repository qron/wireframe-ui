"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderBar = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _colors = require("../../constants/ui/colors");

var _size = require("../../constants/ui/size");

var _title = require("../text/title");

var _bar = require("../bar");

var _icon = require("../icon");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  headerBarPaddingLeftS: {
    paddingLeft: 'var(--wireframe-dimension-s)'
  },
  headerBarPaddingLeftM: {
    paddingLeft: 'var(--wireframe-dimension-m)'
  },
  headerBarPaddingLeftL: {
    paddingLeft: 'var(--wireframe-dimension-l)'
  },
  headerBarPaddingRightS: {
    paddingRight: 'var(--wireframe-dimension-s)'
  },
  headerBarPaddingRightM: {
    paddingRight: 'var(--wireframe-dimension-m)'
  },
  headerBarPaddingRightL: {
    paddingRight: 'var(--wireframe-dimension-l)'
  },
  headerBarTitleIcon: {
    color: 'currentColor'
  },
  headerBarTitle: {
    flexGrow: 1,
    color: 'currentColor'
  },
  headerBarActionIconButton: {
    color: 'currentColor'
  }
});

const HeaderBar = _ref => {
  let {
    size = _size.DEFAULT_SIZE,
    TitleIcon,
    title,
    color,
    children,
    style,
    styleDefinitions = []
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_bar.Bar, {
    size: size,
    styleDefinitions: [!TitleIcon && styles["headerBarPaddingLeft".concat(_size.SIZE[size])], !children && styles["headerBarPaddingRight".concat(_size.SIZE[size])], ...styleDefinitions],
    color: color,
    children: [!!TitleIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.Icon, {
      Icon: TitleIcon,
      size: size,
      iconStyleDefinitions: [styles.headerBarTitleIcon]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_title.Title, {
      styleDefinitions: [styles.headerBarTitle],
      size: size,
      children: title
    }), children]
  });
};

exports.HeaderBar = HeaderBar;