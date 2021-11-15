"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardBar = void 0;

var _headerBar = require("../header-bar");

var _jsxRuntime = require("react/jsx-runtime");

const CardBar = _ref => {
  let {
    size,
    CardBarTitleIcon,
    cardBarTitle,
    color,
    children,
    style,
    styleDefinitions
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_headerBar.HeaderBar, {
    size: size,
    TitleIcon: CardBarTitleIcon,
    title: cardBarTitle,
    color: color,
    style: style,
    styleDefinitions: styleDefinitions,
    children: children
  });
};

exports.CardBar = CardBar;