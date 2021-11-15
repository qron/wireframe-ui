"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardContent = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _view = require("../view");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  cardContent: {
    flexGrow: 1,
    overflow: 'hidden'
  }
});

const CardContent = _ref => {
  let {
    children,
    styleDefinitions = [],
    style
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
    style: style,
    styleDefinitions: [styles.cardContent, ...styleDefinitions],
    children: children
  });
};

exports.CardContent = CardContent;