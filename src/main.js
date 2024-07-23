var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Parent = /** @class */ (function () {
    function Parent() {
    }
    Parent.prototype.get = function (foo) {
        console.log('Parent', foo);
    };
    Parent.prototype.getTwo = function (foo, bar) {
        console.log('Parent', foo, bar);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.get = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length == 1) {
            _super.prototype.get.call(this, args[0]);
        }
        if (args.length == 2) {
            // Child
            this._get(args[0], args[1]);
            // this.get(args[0], args[1]) // RangeError: Maximum call stack size exceeded
            // Parent
            this.getTwo(args[0], args[1]);
        }
        if (args.length == 3) {
            console.log('Child get three', args[0], args[1], args[2]);
        }
    };
    Child.prototype._get = function (foo, bar) {
        console.log('Child get two', foo, bar);
    };
    return Child;
}(Parent));
var app = new Child();
app.get(0);
app.get(0, 1);
app.get(0, 1, 2);
