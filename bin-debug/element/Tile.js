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
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(textures) {
        var _this = _super.call(this) || this;
        _this.index = 0;
        // 控制显示灰色位图或者红色位图
        _this._isOpen = true;
        _this._redSkin = new egret.Bitmap();
        _this._redSkin.texture = textures.getTexture('pot2');
        _this._blackSkin = new egret.Bitmap();
        _this._blackSkin.texture = textures.getTexture('pot1');
        _this.anchorOffsetX = 0.5;
        _this.anchorOffsetY = 0.5;
        _this.width = 45;
        _this.height = 45;
        _this.touchEnabled = true;
        _this.addChild(_this._blackSkin);
        _this.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onClick, _this);
        return _this;
    }
    Tile.prototype.getStatus = function () {
        return this._isOpen;
    };
    Tile.prototype.open = function () {
        if (!this._isOpen) {
            this._isOpen = true;
            this.removeChild(this._redSkin);
            this.addChild(this._blackSkin);
        }
    };
    Tile.prototype.close = function () {
        if (this._isOpen) {
            this.removeChild(this._blackSkin);
            this.addChild(this._redSkin);
        }
    };
    Tile.prototype.onClick = function () {
        if (this._isOpen) {
            // 逻辑运算
            var evt = new GameEvent(GameEvent.OPEN_TILE);
            evt.open_tile_index = this.index;
            this.dispatchEvent(evt);
        }
        this.close();
    };
    return Tile;
}(egret.Sprite));
__reflect(Tile.prototype, "Tile");
//# sourceMappingURL=Tile.js.map