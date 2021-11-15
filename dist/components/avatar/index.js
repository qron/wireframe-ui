"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

require("core-js/modules/es.regexp.to-string.js");

require("core-js/modules/web.dom-collections.iterator.js");

var _noImportant = require("aphrodite/no-important");

var _view = require("../view");

var _text = require("../text");

var _size = require("../../constants/ui/size");

var _jsxRuntime = require("react/jsx-runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const styles = _noImportant.StyleSheet.create({
  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 'var(--wireframe-border-width)',
    borderColor: 'var(--wireframe-border-color)',
    backgroundColor: 'var(--wireframe-avatar-view-color)',
    flexShrink: 0
  },
  avatarViewS: {
    width: 'var(--wireframe-dimension-s)',
    height: 'var(--wireframe-dimension-s)',
    borderRadius: 'calc(var(--wireframe-dimension-s) / 2)'
  },
  avatarViewM: {
    width: 'var(--wireframe-dimension-m)',
    height: 'var(--wireframe-dimension-m)',
    borderRadius: 'calc(var(--wireframe-dimension-m) / 2)'
  },
  avatarViewL: {
    width: 'var(--wireframe-dimension-l)',
    height: 'var(--wireframe-dimension-l)',
    borderRadius: 'calc(var(--wireframe-dimension-l) / 2)'
  },
  avatarText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'var(--wireframe-foreground-color)'
  },
  avatarTextS: {
    fontSize: 'var(--wireframe-font-size-l-s)'
  },
  avatarTextM: {
    fontSize: 'var(--wireframe-font-size-l-m)'
  },
  avatarTextL: {
    fontSize: 'var(--wireframe-font-size-l-l)'
  }
});

const getColorFromString = string => {
  let hash = 0;

  for (let i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (let i = 0; i < 3; i++) {
    const value = hash >> i * 8 & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }

  return color;
};

const Avatar = _ref => {
  let {
    size = _size.DEFAULT_SIZE,
    userName,
    avatarViewBackgroundColor,
    style,
    styleDefinitions = []
  } = _ref;
  const userNameColor = userName && getColorFromString(userName);
  const userNameFirstLetter = userName && userName[0];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_view.View, {
    styleDefinitions: [styles.avatarView, styles["avatarView".concat(_size.SIZE[size])], ...styleDefinitions],
    style: _objectSpread({
      '--wireframe-avatar-view-color': avatarViewBackgroundColor || userNameColor
    }, style),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_text.Text, {
      styleDefinitions: [styles.avatarText, styles["avatarText".concat(_size.SIZE[size])]],
      children: userNameFirstLetter
    })
  });
};

exports.Avatar = Avatar;