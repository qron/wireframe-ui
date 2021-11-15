"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchField = void 0;

var _md = require("react-icons/md");

var _textField = require("../text-field");

var _jsxRuntime = require("react/jsx-runtime");

const SearchField = _ref => {
  let {
    id,
    value,
    onChange,
    label,
    size,
    style,
    styleDefinitions
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_textField.TextField, {
    id: id,
    value: value,
    label: label,
    style: style,
    styleDefinitions: styleDefinitions,
    BeforeIcon: _md.MdSearch,
    onChange: onChange,
    size: size
  });
};

exports.SearchField = SearchField;