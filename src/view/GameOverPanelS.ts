class GameOverPanelS extends egret.Sprite{
    private constructor(textures:egret.SpriteSheet) {
        super();
        var gameOverPanelS:egret.Bitmap = new egret.Bitmap();
        gameOverPanelS.texture = textures.getTexture('victory');
        this.width =448;
        this.height = 338;
        this.x = (egret.MainContext.instance.stage.stageWidth - this.width) / 2;
        this.y = (egret.MainContext.instance.stage.stageHeight - this.height) / 2;
    }
}