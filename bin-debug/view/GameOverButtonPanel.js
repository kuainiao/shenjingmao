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
// gameOver 再来一次按钮
var GameOverButtonPanel = (function (_super) {
    __extends(GameOverButtonPanel, _super);
    function GameOverButtonPanel(textures) {
        var _this = _super.call(this) || this;
        _this._reStartBtn = new egret.Sprite();
        _this._reStartBtn.width = 200;
        _this._reStartBtn.height = 103;
        var bitMap = new egret.Bitmap();
        bitMap.texture = textures.getTexture('replay');
        _this._reStartBtn.addChild(bitMap);
        _this._reStartBtn.touchEnabled = true;
        _this.addChild(_this._reStartBtn);
        _this._reStartBtn.x = (egret.MainContext.instance.stage.stageWidth - _this._reStartBtn.width) / 2;
        _this._reStartBtn.y = (egret.MainContext.instance.stage.stageHeight - _this._reStartBtn.height) / 2;
        return _this;
    }
    return GameOverButtonPanel;
}(egret.Sprite));
__reflect(GameOverButtonPanel.prototype, "GameOverButtonPanel");
//# sourceMappingURL=GameOverButtonPanel.js.map