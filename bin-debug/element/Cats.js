var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cats = (function (_super) {
    __extends(Cats, _super);
    function Cats() {
        var _this = _super.call(this) || this;
        // 是否播放动画1
        _this._isAction1mc = true;
        var data = RES.getRes('stay_json');
        var texture = RES.getRes('stay_png');
        var mcFactory1 = new egret.MovieClipDataFactory(data, texture);
        _this._action1mc = new egret.MovieClip(mcFactory1.generateMovieClipData('stay'));
        _this._action1mc.gotoAndPlay(0);
        _this._action1mc.play(-1);
        data = RES.getRes('weizhu_json');
        texture = RES.getRes('weizhu_png');
        mcFactory1 = new egret.MovieClipDataFactory(data, texture);
        _this._action2mc = new egret.MovieClip(mcFactory1.generateMovieClipData('weizhu'));
        // this._action1mc.gotoAndPlay('weizhu0000', 3);
        _this._action2mc.play(-1);
        _this.anchorOffsetX = 0.5;
        _this.anchorOffsetY = 1;
        _this.playAction();
        return _this;
    }
    Cats.prototype.init = function () {
        this._isAction1mc = true;
        this.playAction();
    };
    Cats.prototype.playAction = function () {
        if (this.numChildren) {
            this.removeChildAt(0);
        }
        if (this._isAction1mc) {
            this.addChild(this._action1mc);
        }
        else {
            this.addChild(this._action2mc);
        }
    };
    Object.defineProperty(Cats.prototype, "isAction1", {
        get: function () {
            return this._isAction1mc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cats.prototype, "isAction", {
        set: function (val) {
            if (this._isAction1mc !== val) {
                this._isAction1mc = val;
                this.playAction();
            }
        },
        enumerable: true,
        configurable: true
    });
    return Cats;
}(egret.Sprite));
__reflect(Cats.prototype, "Cats");
//# sourceMappingURL=Cats.js.map