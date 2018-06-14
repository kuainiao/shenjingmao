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
var GameOverPanelF = (function (_super) {
    __extends(GameOverPanelF, _super);
    function GameOverPanelF(textures) {
        var _this = _super.call(this) || this;
        var gameOverPanelF = new egret.Bitmap();
        gameOverPanelF.texture = textures.getTexture('failed');
        _this.width = 448;
        _this.height = 361;
        _this.x = (egret.MainContext.instance.stage.stageWidth - _this.width) / 2;
        _this.y = (egret.MainContext.instance.stage.stageHeight - _this.height) / 2;
        return _this;
    }
    return GameOverPanelF;
}(egret.Sprite));
__reflect(GameOverPanelF.prototype, "GameOverPanelF");
//# sourceMappingURL=GameOverPanelF.js.map