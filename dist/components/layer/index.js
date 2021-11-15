"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layer = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _view = require("../view");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  layer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'var(--wireframe-color-layer)'
  }
});

const Layer = _ref => {
  let {
    children,
    styleDefinitions = [],
    style
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
    style: style,
    styleDefinitions: [styles.layer, ...styleDefinitions],
    children: children
  });
};

exports.Layer = Layer;