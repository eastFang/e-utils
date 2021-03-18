"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noop = exports.isEmptyObj = exports.isUndefined = exports.isNull = exports.isBoolean = exports.isString = exports.isNumber = exports.isFunction = exports.isArray = exports.isObject = exports.isType = void 0;
function isType(type) {
    return function isParamType(param) {
        return Object.prototype.toString.call(param) === "[object " + type + "]";
    };
}
exports.isType = isType;
exports.isObject = isType('Object');
exports.isArray = isType('Array');
exports.isFunction = isType('Function');
exports.isNumber = isType('Number');
exports.isString = isType('String');
exports.isBoolean = isType('Boolean');
exports.isNull = isType('Null');
var isUndefined = function (param) { return typeof param === 'undefined'; };
exports.isUndefined = isUndefined;
var isEmptyObj = function (param) { return exports.isObject(param) && !Object.keys(param).length; };
exports.isEmptyObj = isEmptyObj;
// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function () { };
exports.noop = noop;
