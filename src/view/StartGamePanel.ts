// 开始游戏面板界面
class StartGamePanel extends egret.Sprite{
    public constructor(textures:egret.SpriteSheet){
        super();
        var startgameBitmap:egret.Bitmap = new egret.Bitmap();
        startgameBitmap.texture = textures.getTexture('btn_start');
        this.height = 588;
        this.width = 400;
        this.touchEnabled = true;
        this.x = (egret.MainContext.instance.stage.stageWidth - this.width) / 2;
        this.y = (egret.MainContext.instance.stage.stageHeight - this.height) / 2;

    }
}