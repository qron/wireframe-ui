"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalBar = void 0;

var _md = require("react-icons/md");

var _button = require("../../constants/ui/button");

var _headerBar = require("../header-bar");

var _iconButton = require("../button/icon-button");

var _jsxRuntime = require("react/jsx-runtime");

const ModalBar = _ref => {
  let {
    size,
    color,
    ModalTitleIcon,
    modalTitle,
    onClose,
    style,
    styleDefinitions
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_headerBar.HeaderBar, {
    size: size,
    color: color,
    TitleIcon: ModalTitleIcon,
    title: modalTitle,
    style: style,
    styleDefinitions: styleDefinitions,
    children: onClose && /*#__PURE__*/(0, _jsxRuntime.jsx)(_iconButton.IconButton, {
      variant: _button.VARIANT.TEXT,
      ButtonIcon: _md.MdClose,
      onClick: onClose,
      style: {
        '--wireframe-button-color': 'var(--wireframe-foreground-color)'
      }
    })
  });
};

exports.ModalBar = ModalBar;