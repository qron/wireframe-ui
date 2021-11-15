"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _ = require(".");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  title: {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

const Title = _ref => {
  let {
    children,
    size,
    small,
    large,
    style,
    styleDefinitions = []
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_.Text, {
    small: small,
    large: large,
    size: size,
    styleDefinitions: [styles.title, ...styleDefinitions],
    style: style,
    children: children
  });
};

exports.Title = Title;