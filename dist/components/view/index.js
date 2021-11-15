"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.View = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  view: {
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box',
    position: 'relative'
  }
});

const View = _ref => {
  let {
    children,
    style,
    styleDefinitions = []
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _noImportant.css)(styles.view, ...styleDefinitions),
    style: style,
    children: children
  });
};

exports.View = View;