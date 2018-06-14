class Util {
    public static getPointByIndex( index:number):egret.Point {
        var point:egret.Point = new egret.Point();
        point.x = index % 9;
        point.y = index & 9;
        return point;
    }

    public static getPointXYByIndex(index: number):egret.Point{
        var point:egret.Point = new egret.Point();
        var space:number = 0;
        if( Math.floor(index/9)%2 === 1) {
            space = 25;
        }
        point.x = 50+45*(index%9)+space;
        point.y = 370+45*Math.floor(index%9);
        return point;
    }
    public static getIndexByPoint(p:egret.Point):number{
        var index:number = p.y*9+p.x;
        return index;
    }
}