"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const genStepsLabelPlacementStyle = token => {
  const {
    componentCls,
    stepsIconSize,
    lineHeight,
    stepsSmallIconSize
  } = token;
  return {
    [`&${componentCls}-label-vertical`]: {
      [`${componentCls}-item`]: {
        overflow: 'visible',
        '&-tail': {
          marginInlineStart: stepsIconSize / 2 + token.controlHeightLG,
          padding: `${token.paddingXXS}px ${token.paddingLG}px`
        },
        '&-content': {
          display: 'block',
          width: (stepsIconSize / 2 + token.controlHeightLG) * 2,
          marginTop: token.marginSM,
          textAlign: 'center'
        },
        '&-icon': {
          display: 'inline-block',
          marginInlineStart: token.controlHeightLG
        },
        '&-title': {
          paddingInlineEnd: 0,
          paddingInlineStart: 0,
          '&::after': {
            display: 'none'
          }
        },
        '&-subtitle': {
          display: 'block',
          marginBottom: token.marginXXS,
          marginInlineStart: 0,
          lineHeight
        }
      },
      [`&${componentCls}-small:not(${componentCls}-dot)`]: {
        [`${componentCls}-item`]: {
          '&-icon': {
            marginInlineStart: token.controlHeightLG + (stepsIconSize - stepsSmallIconSize) / 2
          }
        }
      }
    }
  };
};
var _default = genStepsLabelPlacementStyle;
exports.default = _default;