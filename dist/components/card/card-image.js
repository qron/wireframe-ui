"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardImage = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _elevatedView = require("../elevated-view");

var _headerBar = require("../header-bar");

var _image = require("../image");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  cardImage: {
    width: '100%',
    objectFit: 'cover',
    height: 'auto'
  }
});

const CardImage = _ref => {
  let {
    src,
    styleDefinitions = [],
    style
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_image.Image, {
    src: src,
    style: style,
    styleDefinitions: [styles.cardImage, ...styleDefinitions],
    style: style
  });
};

exports.CardImage = CardImage;