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
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager(root, textures) {
        var _this = _super.call(this) || this;
        _this._title = [];
        _this._rootView = root;
        _this._textures = textures;
        var bg = new egret.Bitmap();
        bg.texture = _this._textures.getTexture('bg');
        _this._rootView.addChild(bg);
        return _this;
    }
    ViewManager.prototype.createTiles = function () {
        var len = 81;
        for (var i = 0; i < len; i++) {
            var tile = new Tile(RES.getRes('gameres+json'));
            tile.index = i;
            this._title.push(tile);
            tile.addEventListener(GameEvent.OPEN_TILE, this.onOpenTile, this);
        }
    };
    ViewManager.prototype.onOpenTile = function (evt) {
        this.dispatchEvent(evt);
    };
    ViewManager.prototype.showTiles = function () {
        var len = 81;
        for (var i = 0; i < len; i++) {
            var p = Util.getPointXYByIndex(this._title[i].index);
            this._title[i].x = p.x;
            this._title[i].y = p.y;
            this._rootView.addChild(this._title[i]);
        }
    };
    return ViewManager;
}(egret.EventDispatcher));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map