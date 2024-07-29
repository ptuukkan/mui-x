"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cumsum;
function cumsum(values, valueof) {
  var sum = 0,
    index = 0;
  return Float64Array.from(values, valueof === undefined ? v => sum += +v || 0 : v => sum += +valueof(v, index++, values) || 0);
}