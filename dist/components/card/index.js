"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Card = void 0;

var _noImportant = require("aphrodite/no-important");

var _elevatedView = require("../elevated-view");

var _headerBar = require("../header-bar");

var _image = require("../image");

var _jsxRuntime = require("react/jsx-runtime");

const Card = _ref => {
  let {
    elevation,
    children,
    style,
    styleDefinitions
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_elevatedView.ElevatedView, {
    elevation: elevation,
    styleDefinitions: styleDefinitions,
    style: style,
    children: children
  });
};

exports.Card = Card;