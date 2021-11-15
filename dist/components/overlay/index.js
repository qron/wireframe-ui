"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Overlay = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _layer = require("../layer");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  overlay: {
    position: 'fixed',
    overflow: 'auto',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});

const Overlay = _ref => {
  let {
    children,
    style,
    styleDefinitions = []
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_layer.Layer, {
    styleDefinitions: [styles.overlay, ...styleDefinitions],
    style: style,
    children: children
  });
};

exports.Overlay = Overlay;