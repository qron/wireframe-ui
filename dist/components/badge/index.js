"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _view = require("../view");

var _chip = require("../chip");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  badgeChip: {
    position: 'absolute',
    top: 'calc(var(--wireframe-spacing-element) * -1)',
    right: 'calc(var(--wireframe-spacing-element) * -1)'
  }
});

const Badge = _ref => {
  let {
    children,
    size,
    color,
    style,
    styleDefinitions,
    chipStyleDefinitions = [],
    BadgeIcon,
    badgeContent
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_view.View, {
    style: style,
    styleDefinitions: styleDefinitions,
    children: [children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_chip.Chip, {
      size: size,
      color: color,
      ChipIcon: BadgeIcon,
      styleDefinitions: [styles.badgeChip, ...chipStyleDefinitions],
      children: badgeContent
    })]
  });
};

exports.Badge = Badge;