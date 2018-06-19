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
// viewmanger可以发送事件能力，继承自egret.EventDispacther，进行视图操作
var ViewManager = (function (_super) {
    __extends(ViewManager, _super);
    function ViewManager(root, textures) {
        var _this = _super.call(this) || this;
        // 创建地图 
        _this._tiles = [];
        _this._rootView = root;
        _this._textures = textures;
        _this._backgroundPanel = new BackgroundPanel(root, textures);
        // 开始界面实例化，并添加事件
        _this._startgeGamePanel = new StartGamePanel(textures);
        _this._startgeGamePanel.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onStartViewClick, _this);
        // 游戏结束界面
        _this._gameOverPanelS = new GameOverPanelS(textures);
        _this._gameOverPanelF = new GameOverPanelF(textures);
        _this._gameOverButtonPanel = new GameOverButtonPanel(textures);
        _this._gameOverButtonPanel.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.onRestartClick, _this);
        return _this;
    }
    ViewManager.prototype.creatCat = function () {
        this._cat = new Cats();
    };
    ViewManager.prototype.showStartGameView = function () {
        if (this._startgeGamePanel) {
            this._rootView.addChild(this._startgeGamePanel);
        }
    };
    // 开始游戏
    ViewManager.prototype.onStartViewClick = function () {
        this._rootView.removeChild(this._startgeGamePanel);
        this._startgeGamePanel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartViewClick, this);
        var evt = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt);
    };
    // 重新玩游戏
    ViewManager.prototype.onRestartClick = function () {
        if (this._gameOverPanelS.parent) {
            this._rootView.removeChild(this._gameOverPanelS);
        }
        else {
            this._rootView.removeChild(this._gameOverPanelF);
        }
        this._rootView.removeChild(this._gameOverButtonPanel);
        var evt = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt);
    };
    ViewManager.prototype.createTiles = function () {
        var len = 81;
        for (var i = 0; i < len; i++) {
            var tile = new Tile(RES.getRes('gameres+json'));
            tile.index = i;
            this._tiles.push(tile);
            tile.addEventListener(GameEvent.OPEN_TILE, this.onOpenTile, this);
        }
    };
    ViewManager.prototype.onOpenTile = function (evt) {
        // 使viewmanger发送‘openTile’事件
        this.dispatchEvent(evt);
    };
    // 设置tile的位置
    ViewManager.prototype.showTiles = function () {
        var len = 81;
        for (var i = 0; i < len; i++) {
            var p = Util.getPointXYByIndex(this._tiles[i].index);
            this._tiles[i].x = p.x;
            this._tiles[i].y = p.y;
            // 添加到试图根容器
            this._rootView.addChild(this._tiles[i]);
        }
    };
    ViewManager.prototype.updateAll = function () {
    };
    return ViewManager;
}(egret.EventDispatcher));
__reflect(ViewManager.prototype, "ViewManager");
//# sourceMappingURL=ViewManager.js.map