"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 基础类型
// number, boolean, string, undefined, null, symbol, bigint， 一定要跟Number，Boolean，String区分开来
var a = 10000;
var b;
b = 'hello world';
// 其他类型
// any，unknown, never, 数组，元组，object
var c = 1000;
c = 'wangzhan';
var d = 1000;
d = 'wangzhan';
// console.log(c.name, c(), new c(), d.name, d(), new d());
var e;
var f;
// f = [1,2,3,4,'hello'];
// let g: [number, string, object];
// g = [100, 'hello', 'world'];
// 接口
var h = {
    code: 200,
    data: {},
    msg: '请求成功'
};
// var i = {} as AjaxType;
// setTimeout(()=>{
//     i = h;
//     i.code = 300;
//     i.msg = '';
// })
var C = /** @class */ (function () {
    function C() {
        var _this = this;
        this.a = 100;
        this.b = 100;
        this.c = 100;
        this.func = function () {
            console.log('a...', _this.a);
        };
    }
    return C;
}());
new C().func();
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.func2 = function () {
            console.log('c....', _this.c);
        };
        return _this;
    }
    return D;
}(C));
new D().func2();
var add = function (a, b) { return Boolean(a + b); };
var add2 = function (a, b) {
    return false;
};
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var s = swap([function () { console.log('美股连续熔断三次'); }, { name: '特朗普' }]);
console.log('s...', s);
var x = [];
var ;
