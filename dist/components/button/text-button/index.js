"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextButton = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _themeContext = require("../../../context/theme-context");

var _colors = require("../../../constants/ui/colors");

var _size = require("../../../constants/ui/size");

var _button = require("../../../constants/ui/button");

var _ = require("..");

var _textButtonLabel = require("./text-button-label");

var _icon = require("../../icon");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  textButtonLabel: {
    color: 'currentColor'
  },
  textButtonPaddingLeftS: {
    paddingLeft: 'var(--wireframe-dimension-s)'
  },
  textButtonPaddingLeftM: {
    paddingLeft: 'var(--wireframe-dimension-m)'
  },
  textButtonPaddingLeftL: {
    paddingLeft: 'var(--wireframe-dimension-l)'
  },
  textButtonPaddingRightS: {
    paddingRight: 'var(--wireframe-dimension-s)'
  },
  textButtonPaddingRightM: {
    paddingRight: 'var(--wireframe-dimension-m)'
  },
  textButtonPaddingRightL: {
    paddingRight: 'var(--wireframe-dimension-l)'
  },
  textButtonIcon: {
    color: 'currentColor',
    flexShrink: 0
  }
});

const TextButton = _ref => {
  let {
    children,
    color,
    BeforeIcon,
    AfterIcon,
    onClick,
    size = _size.DEFAULT_SIZE,
    variant = _button.DEFAULT_VARIANT,
    style,
    isDisabled,
    styleDefinitions = []
  } = _ref;
  const {
    theme
  } = (0, _themeContext.useTheme)();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Button, {
    style: style,
    styleDefinitions: [!BeforeIcon && styles["textButtonPaddingLeft".concat(_size.SIZE[size])], !AfterIcon && styles["textButtonPaddingRight".concat(_size.SIZE[size])], ...styleDefinitions],
    size: size,
    variant: variant,
    color: color,
    isDisabled: isDisabled,
    onClick: onClick,
    children: [!!BeforeIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.Icon, {
      Icon: BeforeIcon,
      size: size,
      iconStyleDefinitions: [styles.textButtonIcon]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_textButtonLabel.TextButtonLabel, {
      size: size,
      styleDefinitions: [styles.textButtonLabel],
      children: children
    }), !!AfterIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.Icon, {
      Icon: AfterIcon,
      size: size,
      iconStyleDefinitions: [styles.textButtonIcon]
    })]
  });
};

exports.TextButton = TextButton;