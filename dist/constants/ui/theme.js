"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LIGHT_THEME = exports.DARK_THEME = void 0;

var _lightBlueprint = _interopRequireDefault(require("../../assets/svg/pattern/light-blueprint.svg"));

var _darkBlueprint = _interopRequireDefault(require("../../assets/svg/pattern/dark-blueprint.svg"));

var _size = require("./size");

var _colors = require("./colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_SHADOW_COLOR = 'rgba(0, 0, 0, 0.5)';
const DEFAULT_DARK_COLOR = '#111';
const DEFAULT_LIGHT_COLOR = '#eee';
const DEFAULT_THEME = {
  dimension: {
    [_size.SIZE.S]: 24,
    [_size.SIZE.M]: 40,
    [_size.SIZE.L]: 64
  },
  borderWidth: 3,
  borderRadius: 3,
  spacing: {
    element: 5,
    content: 40
  },
  fontSize: {
    S: {
      [_size.SIZE.S]: 10,
      [_size.SIZE.M]: 16,
      [_size.SIZE.L]: 22
    },
    M: {
      [_size.SIZE.S]: 12,
      [_size.SIZE.M]: 18,
      [_size.SIZE.L]: 24
    },
    L: {
      [_size.SIZE.S]: 14,
      [_size.SIZE.M]: 20,
      [_size.SIZE.L]: 26
    }
  },
  fontFamily: 'monospace'
};

const LIGHT_THEME = _objectSpread(_objectSpread({}, DEFAULT_THEME), {}, {
  colors: {
    [_colors.COLORS.PRIMARY]: '#9c9ccf',
    [_colors.COLORS.TRANSPARENT]: 'rgba(0, 0, 0, 0)',
    [_colors.COLORS.DARK]: '#333',
    [_colors.COLORS.LIGHT]: '#FAFAFA',
    [_colors.COLORS.INFO]: '#69CFFF',
    [_colors.COLORS.ERROR]: '#FF6969',
    [_colors.COLORS.WARNING]: '#FF9c69',
    [_colors.COLORS.SUCCESS]: '#69FF99',
    [_colors.COLORS.TIP]: '#FFFF69',
    [_colors.COLORS.DISABLED_BACKGROUND]: '#E0E0E0',
    [_colors.COLORS.DISABLED_FOREGROUND]: '#BDBDBD',
    [_colors.COLORS.SHADOW]: 'rgba(0, 0, 0, 0.5)',
    [_colors.COLORS.LAYER]: 'rgba(255, 255, 255, 0.75)'
  },
  borderColor: '#444',
  backgroundColor: '#FAFAFA',
  foregroundColor: '#333',
  backgroundImage: "url(.".concat(_lightBlueprint.default, ")"),
  elevation: ['0px 0px 0 0px rgba(0, 0, 0, 0.5)', '0px 4px 0 -2px rgba(0, 0, 0, 0.5)', '0px 10px 0 -5px rgba(0, 0, 0, 0.5)', '0px 24px 0 -12px rgba(0, 0, 0, 0.5)', '0px 48px 0 -24px rgba(0, 0, 0, 0.5)']
});

exports.LIGHT_THEME = LIGHT_THEME;

const DARK_THEME = _objectSpread(_objectSpread({}, DEFAULT_THEME), {}, {
  colors: {
    [_colors.COLORS.PRIMARY]: '#69699c',
    [_colors.COLORS.TRANSPARENT]: 'rgba(0, 0, 0, 0)',
    [_colors.COLORS.DARK]: '#212121',
    [_colors.COLORS.LIGHT]: '#EEE',
    [_colors.COLORS.INFO]: '#03639C',
    [_colors.COLORS.ERROR]: '#9c0303',
    [_colors.COLORS.WARNING]: '#9c6903',
    [_colors.COLORS.SUCCESS]: '#036966',
    [_colors.COLORS.TIP]: '#9c9c03',
    [_colors.COLORS.DISABLED_BACKGROUND]: '#424242',
    [_colors.COLORS.DISABLED_FOREGROUND]: '#616161',
    [_colors.COLORS.SHADOW]: 'rgba(0, 0, 0, 0.75)',
    [_colors.COLORS.LAYER]: 'rgba(0, 0, 0, 0.75)'
  },
  borderColor: '#CCC',
  backgroundColor: '#212121',
  foregroundColor: '#EEE',
  backgroundImage: "url(.".concat(_darkBlueprint.default, ")"),
  elevation: ['0px 0px 0 0px rgba(0, 0, 0, 0.75)', '0px 4px 0 -2px rgba(0, 0, 0, 0.75)', '0px 10px 0 -5px rgba(0, 0, 0, 0.75)', '0px 24px 0 -12px rgba(0, 0, 0, 0.75)', '0px 48px 0 -24px rgba(0, 0, 0, 0.75)']
});

exports.DARK_THEME = DARK_THEME;