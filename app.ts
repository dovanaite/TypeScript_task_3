
class Point{

    constructor(
        private _x:number,
        private _y:number
    ){}

    get x(){
        return this._x;
    }
    get y(){
        return this._y;
    }
    set x(x:number){
        this._x=x;
    }
    set y(y:number){
        this._y=y;
    }

public distanceFromOrigin(){
    return Math.sqrt(this._x**2 + this._y**2);
}

public translate(dx:number, dy:number){
    this._x += dx;
    this._y += dy;
}

public toString():string{
    return `[${this._x},${this._y}]`
}

public doubleDistance(p: Point) {
    return Math.sqrt((this._x - p.x)**2 + (this._y - p.y)**2);
}

}


let p1 = new Point(2,2);
let p2 = new Point(5,2);


console.log(p1.distanceFromOrigin());
p1.translate(5,2)
console.log(p1.distanceFromOrigin());
console.log(p1.toString());
console.log(p2.toString());
console.log(p1.doubleDistance(p2));
