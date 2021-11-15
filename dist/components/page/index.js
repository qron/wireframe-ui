"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _view = require("../view");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  page: {
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: 'var(--wireframe-background-color)',
    backgroundImage: 'var(--wireframe-background-image)'
  }
});

const Page = _ref => {
  let {
    children,
    style,
    styleDefinitions = []
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
    styleDefinitions: [styles.page, ...styleDefinitions],
    style: style,
    children: children
  });
};

exports.Page = Page;