"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElevatedView = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _view = require("../view");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  elevatedView: {
    borderStyle: 'solid',
    borderWidth: 'var(--wireframe-border-width)',
    borderColor: 'var(--wireframe-border-color)',
    borderRadius: 'var(--wireframe-border-radius)',
    backgroundColor: 'var(--wireframe-background-color)'
  },
  elevatedView0: {
    boxShadow: 'var(--wireframe-elevation-0)'
  },
  elevatedView1: {
    boxShadow: 'var(--wireframe-elevation-1)'
  },
  elevatedView2: {
    boxShadow: 'var(--wireframe-elevation-2)'
  },
  elevatedView3: {
    boxShadow: 'var(--wireframe-elevation-3)'
  },
  elevatedView4: {
    boxShadow: 'var(--wireframe-elevation-4)'
  }
});

const ElevatedView = _ref => {
  let {
    elevation = 0,
    style,
    styleDefinitions = [],
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
    styleDefinitions: [styles.elevatedView, styles["elevatedView".concat(elevation)], ...styleDefinitions],
    style: style,
    children: children
  });
};

exports.ElevatedView = ElevatedView;