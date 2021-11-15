"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _elevatedView = require("../elevated-view");

var _overlay = require("../overlay");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  modal: {
    marginTop: 'calc(var(--wireframe-dimension-m) * 2)',
    marginBottom: 'calc(var(--wireframe-dimension-m) * 2)'
  }
});

const Modal = _ref => {
  let {
    size,
    style,
    styleDefinitions = [],
    children,
    onClose,
    modalTitle,
    ModalTitleIcon
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_overlay.Overlay, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_elevatedView.ElevatedView, {
      elevation: 4,
      styleDefinitions: [styles.modal, ...styleDefinitions],
      style: style,
      children: children
    })
  });
};

exports.Modal = Modal;