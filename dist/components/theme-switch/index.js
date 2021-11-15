"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeSwitch = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _md = require("react-icons/md");

var _themeContext = require("../../context/theme-context");

var _iconButton = require("../button/icon-button");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  iconButton: {
    color: 'var(--wireframe-background-color)'
  }
});

const ThemeSwitch = _ref => {
  let {
    style,
    styleDefinitions = []
  } = _ref;
  const {
    toggleDarkMode,
    isDarkMode
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconButton.IconButton, {
    color: isDarkMode ? 'LIGHT' : 'DARK',
    ButtonIcon: isDarkMode ? _md.MdLightMode : _md.MdDarkMode,
    onClick: toggleDarkMode,
    style: style,
    styleDefinitions: [styles.iconButton, ...styleDefinitions]
  });
};

exports.ThemeSwitch = ThemeSwitch;