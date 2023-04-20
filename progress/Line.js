"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sortGradient = exports.handleGradient = exports.default = void 0;
var _colors = require("@ant-design/colors");
var React = _interopRequireWildcard(require("react"));
var _warning = _interopRequireDefault(require("../_util/warning"));
var _utils = require("./utils");
var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/**
 * @example
 *   {
 *     "0%": "#afc163",
 *     "75%": "#009900",
 *     "50%": "green", // ====> '#afc163 0%, #66FF00 25%, #00CC00 50%, #009900 75%, #ffffff 100%'
 *     "25%": "#66FF00",
 *     "100%": "#ffffff"
 *   }
 */
const sortGradient = gradients => {
  let tempArr = [];
  Object.keys(gradients).forEach(key => {
    const formattedKey = parseFloat(key.replace(/%/g, ''));
    if (!isNaN(formattedKey)) {
      tempArr.push({
        key: formattedKey,
        value: gradients[key]
      });
    }
  });
  tempArr = tempArr.sort((a, b) => a.key - b.key);
  return tempArr.map(_ref => {
    let {
      key,
      value
    } = _ref;
    return `${value} ${key}%`;
  }).join(', ');
};
/**
 * Then this man came to realize the truth: Besides six pence, there is the moon. Besides bread and
 * butter, there is the bug. And... Besides women, there is the code.
 *
 * @example
 *   {
 *     "0%": "#afc163",
 *     "25%": "#66FF00",
 *     "50%": "#00CC00", // ====>  linear-gradient(to right, #afc163 0%, #66FF00 25%,
 *     "75%": "#009900", //        #00CC00 50%, #009900 75%, #ffffff 100%)
 *     "100%": "#ffffff"
 *   }
 */
exports.sortGradient = sortGradient;
const handleGradient = (strokeColor, directionConfig) => {
  const {
      from = _colors.presetPrimaryColors.blue,
      to = _colors.presetPrimaryColors.blue,
      direction = directionConfig === 'rtl' ? 'to left' : 'to right'
    } = strokeColor,
    rest = __rest(strokeColor, ["from", "to", "direction"]);
  if (Object.keys(rest).length !== 0) {
    const sortedGradients = sortGradient(rest);
    return {
      backgroundImage: `linear-gradient(${direction}, ${sortedGradients})`
    };
  }
  return {
    backgroundImage: `linear-gradient(${direction}, ${from}, ${to})`
  };
};
exports.handleGradient = handleGradient;
const Line = props => {
  const {
    prefixCls,
    direction: directionConfig,
    percent,
    size,
    strokeWidth,
    strokeColor,
    strokeLinecap = 'round',
    children,
    trailColor = null,
    success
  } = props;
  const backgroundProps = strokeColor && typeof strokeColor !== 'string' ? handleGradient(strokeColor, directionConfig) : {
    backgroundColor: strokeColor
  };
  const borderRadius = strokeLinecap === 'square' || strokeLinecap === 'butt' ? 0 : undefined;
  const trailStyle = {
    backgroundColor: trailColor || undefined,
    borderRadius
  };
  const mergedSize = size !== null && size !== void 0 ? size : [-1, strokeWidth || (size === 'small' ? 6 : 8)];
  const [width, height] = (0, _utils.getSize)(mergedSize, 'line', {
    strokeWidth
  });
  if (process.env.NODE_ENV !== 'production') {
    process.env.NODE_ENV !== "production" ? (0, _warning.default)(!('strokeWidth' in props), 'Progress', '`strokeWidth` is deprecated. Please use `size` instead.') : void 0;
  }
  const percentStyle = Object.assign({
    width: `${(0, _utils.validProgress)(percent)}%`,
    height,
    borderRadius
  }, backgroundProps);
  const successPercent = (0, _utils.getSuccessPercent)(props);
  const successPercentStyle = {
    width: `${(0, _utils.validProgress)(successPercent)}%`,
    height,
    borderRadius,
    backgroundColor: success === null || success === void 0 ? void 0 : success.strokeColor
  };
  const outerStyle = {
    width: width < 0 ? '100%' : width,
    height
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-outer`,
    style: outerStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-inner`,
    style: trailStyle
  }, /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-bg`,
    style: percentStyle
  }), successPercent !== undefined ? /*#__PURE__*/React.createElement("div", {
    className: `${prefixCls}-success-bg`,
    style: successPercentStyle
  }) : null)), children);
};
var _default = Line;
exports.default = _default;