"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _button = require("../../constants/ui/button");

var _size = require("../../constants/ui/size");

var _ = require(".");

var _icon = require("../icon");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  iconButtonS: {
    width: 'var(--wireframe-dimension-s)'
  },
  iconButtonM: {
    width: 'var(--wireframe-dimension-m)'
  },
  iconButtonL: {
    width: 'var(--wireframe-dimension-l)'
  },
  iconButtonIcon: {
    color: 'currentColor'
  }
});

const IconButton = _ref => {
  let {
    color,
    ButtonIcon,
    size = _size.DEFAULT_SIZE,
    variant,
    onClick,
    styleDefinitions = [],
    style,
    isDisabled
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
    style: style,
    styleDefinitions: [styles["iconButton".concat(_size.SIZE[size])], ...styleDefinitions],
    size: size,
    variant: variant,
    color: color,
    isDisabled: isDisabled,
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.Icon, {
      Icon: ButtonIcon,
      size: size,
      iconStyleDefinitions: [styles.iconButtonIcon]
    })
  });
};

exports.IconButton = IconButton;