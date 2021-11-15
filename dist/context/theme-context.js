"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("react");

var _colors = require("../constants/ui/colors");

var _size = require("../constants/ui/size");

var _theme = require("../constants/ui/theme");

var _jsxRuntime = require("react/jsx-runtime");

const initialState = {
  darkMode: false,
  theme: _theme.LIGHT_THEME,
  toggleDarkMode: () => {}
};
const ThemeContext = /*#__PURE__*/(0, _react.createContext)(initialState);
exports.ThemeContext = ThemeContext;

const useTheme = () => {
  return (0, _react.useContext)(ThemeContext);
};

exports.useTheme = useTheme;

const ThemeProvider = _ref => {
  let {
    children,
    theme: {
      light = _theme.LIGHT_THEME,
      dark = _theme.DARK_THEME
    } = {}
  } = _ref;
  const [isDarkMode, setIsDarkMode] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    setIsDarkMode(!!localStorage.getItem('isDarkMode'));
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(isDarkMode => {
      localStorage.setItem('isDarkMode', !isDarkMode);
      return !isDarkMode;
    });
  };

  const theme = isDarkMode ? dark : light;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(ThemeContext.Provider, {
    value: {
      theme,
      isDarkMode,
      toggleDarkMode
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      children: "\n\t\t\t:root {\n\t\t\t\t--wireframe-dimension-s: ".concat(theme.dimension[_size.SIZE.S], "px;\n\t\t\t\t--wireframe-dimension-m: ").concat(theme.dimension[_size.SIZE.M], "px;\n\t\t\t\t--wireframe-dimension-l: ").concat(theme.dimension[_size.SIZE.L], "px;\n\n\t\t\t\t--wireframe-spacing-element: ").concat(theme.spacing.element, "px;\n\t\t\t\t--wireframe-spacing-content: ").concat(theme.spacing.content, "px;\n\n\t\t\t\t--wireframe-foreground-color: ").concat(theme.foregroundColor, ";\n\t\t\t\t--wireframe-background-color: ").concat(theme.backgroundColor, ";\n\t\t\t\t--wireframe-background-image: ").concat(theme.backgroundImage, ";\n\n\t\t\t\t--wireframe-border-radius: ").concat(theme.borderRadius, "px;\n\t\t\t\t--wireframe-border-width: ").concat(theme.borderWidth, "px;\n\t\t\t\t--wireframe-border-color: ").concat(theme.borderColor, ";\n\n\t\t\t\t--wireframe-font-family: ").concat(theme.fontFamily, ";\n\n\t\t\t\t--wireframe-font-size-m-s: ").concat(theme.fontSize[_size.SIZE.M][_size.SIZE.S], "px;\n\t\t\t\t--wireframe-font-size-m-m: ").concat(theme.fontSize[_size.SIZE.M][_size.SIZE.M], "px;\n\t\t\t\t--wireframe-font-size-m-l: ").concat(theme.fontSize[_size.SIZE.M][_size.SIZE.L], "px;\n\n\t\t\t\t--wireframe-font-size-s-s: ").concat(theme.fontSize[_size.SIZE.S][_size.SIZE.S], "px;\n\t\t\t\t--wireframe-font-size-s-m: ").concat(theme.fontSize[_size.SIZE.S][_size.SIZE.M], "px;\n\t\t\t\t--wireframe-font-size-s-l: ").concat(theme.fontSize[_size.SIZE.S][_size.SIZE.L], "px;\n\n\t\t\t\t--wireframe-font-size-l-s: ").concat(theme.fontSize[_size.SIZE.L][_size.SIZE.S], "px;\n\t\t\t\t--wireframe-font-size-l-m: ").concat(theme.fontSize[_size.SIZE.L][_size.SIZE.M], "px;\n\t\t\t\t--wireframe-font-size-l-l: ").concat(theme.fontSize[_size.SIZE.L][_size.SIZE.L], "px;\n\n\t\t\t\t--wireframe-elevation-0: ").concat(theme.elevation[0], ";\n\t\t\t\t--wireframe-elevation-1: ").concat(theme.elevation[1], ";\n\t\t\t\t--wireframe-elevation-2: ").concat(theme.elevation[2], ";\n\t\t\t\t--wireframe-elevation-3: ").concat(theme.elevation[3], ";\n\t\t\t\t--wireframe-elevation-4: ").concat(theme.elevation[4], ";\n\n\t\t\t\t--wireframe-color-primary: ").concat(theme.colors[_colors.COLORS.PRIMARY], ";\n\t\t\t\t--wireframe-color-transparent: ").concat(theme.colors[_colors.COLORS.TRANSPARENT], ";\n\t\t\t\t--wireframe-color-dark: ").concat(theme.colors[_colors.COLORS.DARK], ";\n\t\t\t\t--wireframe-color-light: ").concat(theme.colors[_colors.COLORS.LIGHT], ";\n\t\t\t\t--wireframe-color-info: ").concat(theme.colors[_colors.COLORS.INFO], ";\n\t\t\t\t--wireframe-color-error: ").concat(theme.colors[_colors.COLORS.ERROR], ";\n\t\t\t\t--wireframe-color-warning: ").concat(theme.colors[_colors.COLORS.WARNING], ";\n\t\t\t\t--wireframe-color-success: ").concat(theme.colors[_colors.COLORS.SUCCESS], ";\n\t\t\t\t--wireframe-color-tip: ").concat(theme.colors[_colors.COLORS.TIP], ";\n\t\t\t\t--wireframe-color-disabled-background: ").concat(theme.colors[_colors.COLORS.DISABLED_BACKGROUND], ";\n\t\t\t\t--wireframe-color-disabled-foreground: ").concat(theme.colors[_colors.COLORS.DISABLED_FOREGROUND], ";\n\t\t\t\t--wireframe-color-shadow: ").concat(theme.colors[_colors.COLORS.SHADOW], ";\n\t\t\t\t--wireframe-color-layer: ").concat(theme.colors[_colors.COLORS.LAYER], ";\n\t\t\t\t}\t\n\t\t\t\t")
    }), children]
  });
};

exports.ThemeProvider = ThemeProvider;