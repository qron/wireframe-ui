"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  image: {
    backgroundColor: 'var(--wireframe-color-layer)'
  }
});

const Image = _ref => {
  let {
    alt,
    src,
    styleDefinitions = [],
    style
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    alt: alt,
    src: src,
    style: style,
    className: (0, _noImportant.css)(styles.image, ...styleDefinitions)
  });
};

exports.Image = Image;