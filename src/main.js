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
        if (typeof foo === 'number') {
            console.log('Parent number', foo);
        }
        else if (typeof foo === 'string') {
            console.log('Parent string', foo);
        }
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
        if (args.length === 1) {
            _super.prototype.get.call(this, args[0]);
        }
        else if (args.length === 2) {
            _super.prototype.get.call(this, args[0]);
        }
    };
    Child.prototype._get = function (foo, bar) {
        console.log('Child get two', foo, bar);
    };
    return Child;
}(Parent));
var app = new Child();
app.get(0);
app.get('string');
