var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (x) {
            this._x = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (y) {
            this._y = y;
        },
        enumerable: false,
        configurable: true
    });
    Point.prototype.distanceFromOrigin = function () {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    };
    Point.prototype.translate = function (dx, dy) {
        this._x += dx;
        this._y += dy;
    };
    Point.prototype.toString = function () {
        return "[".concat(this._x, ",").concat(this._y, "]");
    };
    Point.prototype.doubleDistance = function (p) {
        return Math.sqrt(((this._x - p.x) * (this._x - p.x)) + ((this._y - p.y) * (this._y - p.y)));
    };
    return Point;
}());
var p1 = new Point(2, 2);
var p2 = new Point(5, 2);
console.log(p1.distanceFromOrigin());
p1.translate(5, 2);
console.log(p1.distanceFromOrigin());
console.log(p1.toString());
console.log(p2.toString());
console.log(p1.doubleDistance(p2));
