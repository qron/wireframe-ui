"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextField = void 0;

var _noImportant = require("aphrodite/no-important");

var _size = require("../../constants/ui/size");

var _icon = require("../icon");

var _text = require("../text");

var _view = require("../view");

var _textFieldLabel = require("./text-field-label");

var _jsxRuntime = require("react/jsx-runtime");

const styles = _noImportant.StyleSheet.create({
  textField: {
    all: 'unset',
    display: 'flex',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 'var(--wireframe-border-width)',
    borderColor: 'var(--wireframe-border-color)',
    borderRadius: 'var(--wireframe-border-radius)',
    fontFamily: 'var(--wireframe-font-family)',
    boxSizing: 'border-box',
    color: 'var(--wireframe-foreground-color)'
  },
  textFieldS: {
    height: 'var(--wireframe-dimension-s)',
    paddingLeft: 'var(--wireframe-spacing-element)',
    paddingRight: 'var(--wireframe-spacing-element)',
    fontSize: 'var(--wireframe-font-size-m-s)'
  },
  textFieldM: {
    height: 'var(--wireframe-dimension-m)',
    paddingLeft: 'var(--wireframe-spacing-element)',
    paddingRight: 'var(--wireframe-spacing-element)',
    fontSize: 'var(--wireframe-font-size-m-m)'
  },
  textFieldL: {
    height: 'var(--wireframe-dimension-l)',
    paddingLeft: 'var(--wireframe-spacing-element)',
    paddingRight: 'var(--wireframe-spacing-element)',
    fontSize: 'var(--wireframe-font-size-m-l)'
  },
  textFieldWithBeforeIconS: {
    paddingLeft: 'var(--wireframe-dimension-s)'
  },
  textFieldWithBeforeIconM: {
    paddingLeft: 'var(--wireframe-dimension-m)'
  },
  textFieldWithBeforeIconL: {
    paddingLeft: 'var(--wireframe-dimension-l)'
  },
  textFieldWithAfterIconS: {
    paddingRight: 'var(--wireframe-dimension-s)'
  },
  textFieldWithAfterIconM: {
    paddingRight: 'var(--wireframe-dimension-m)'
  },
  textFieldWithAfterIconL: {
    paddingRight: 'var(--wireframe-dimension-l)'
  },
  textFieldIcon: {
    color: 'var(--wireframe-foreground-color)',
    position: 'absolute',
    bottom: 0
  },
  textFieldBeforeIcon: {
    left: 0
  },
  textFieldAfterIcon: {
    position: 'absolute',
    right: 0
  }
});

const TextField = _ref => {
  let {
    id,
    value,
    onChange,
    label,
    size = _size.DEFAULT_SIZE,
    style,
    styleDefinitions,
    BeforeIcon,
    AfterIcon,
    list
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_view.View, {
    style: style,
    styleDefinitions: styleDefinitions,
    children: [!!label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_textFieldLabel.TextFieldLabel, {
      fieldId: id,
      size: size,
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      id: id,
      type: "text",
      className: (0, _noImportant.css)(styles.textField, styles["textField".concat(_size.SIZE[size])], !!BeforeIcon && styles["$textFieldWithBeforeIcon".concat(_size.SIZE[size])], !!AfterIcon && styles["$textFieldWithAfterIcon".concat(_size.SIZE[size])]),
      value: value,
      list: list,
      onChange: onChange
    }), !!BeforeIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.Icon, {
      Icon: BeforeIcon,
      size: size,
      styleDefinitions: [styles.textFieldIcon, styles.textFieldBeforeIcon]
    }), !!AfterIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_icon.Icon, {
      Icon: AfterIcon,
      size: size,
      styleDefinitions: [styles.textFieldIcon, styles.textFieldAfterIcon]
    })]
  });
};

exports.TextField = TextField;