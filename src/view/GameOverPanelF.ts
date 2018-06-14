class GameOverPanelF extends egret.Sprite{
    private constructor(textures:egret.SpriteSheet) {
        super();
        var gameOverPanelF:egret.Bitmap = new egret.Bitmap();
        gameOverPanelF.texture = textures.getTexture('failed');
        this.width =448;
        this.height = 361;
        this.x = (egret.MainContext.instance.stage.stageWidth - this.width) / 2;
        this.y = (egret.MainContext.instance.stage.stageHeight - this.height) / 2;
    }
}