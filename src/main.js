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
    Parent.prototype.setComboBox = function (foo, bar) {
        console.log('Parent', foo, bar);
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.print = function () {
        this.setComboBox(0);
    };
    Child.prototype.setComboBox = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length == 1) {
            return this.__setComboBox(args[0]);
        }
        else if (args.length == 2) {
            return _super.prototype.setComboBox.call(this, args[0], args[1]);
        }
        else {
            throw new Error('[error]');
        }
    };
    Child.prototype.__setComboBox = function (foo) {
        console.log('=== Child');
        // this.setComboBox(foo)
        this.setComboBox(foo, 3);
        console.log('===');
    };
    return Child;
}(Parent));
var app = new Child();
app.print();
// app.print.call({})
