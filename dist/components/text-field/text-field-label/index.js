"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldLabel = void 0;

var _text = require("../../text");

var _jsxRuntime = require("react/jsx-runtime");

const TextFieldLabel = _ref => {
  let {
    fieldId,
    children,
    size
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
    for: fieldId,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_text.Text, {
      size: size,
      small: true,
      children: children
    })
  });
};

exports.TextFieldLabel = TextFieldLabel;