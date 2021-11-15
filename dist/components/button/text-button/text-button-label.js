"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextButtonLabel = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _text = require("../../text");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  textButtonLabel: {
    flexGrow: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }
});

const TextButtonLabel = _ref => {
  let {
    children,
    size,
    color,
    styleDefinitions = []
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_text.Text, {
    color: color,
    size: size,
    styleDefinitions: [styles.textButtonLabel, ...styleDefinitions],
    children: children
  });
};

exports.TextButtonLabel = TextButtonLabel;