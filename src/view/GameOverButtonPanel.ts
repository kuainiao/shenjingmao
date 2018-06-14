class GameOverButtonPanel extends egret.Sprite{
    private _reStartBtn: egret.Sprite;
    private constructor(textures: egret.SpriteSheet) {
        super();
        this._reStartBtn = new egret.Sprite();
        this._reStartBtn.width = 200;
        this._reStartBtn.height = 103;
        var bitMap: egret.Bitmap = new egret.Bitmap();
        bitMap.texture = textures.getTexture('replay');
        this._reStartBtn.addChild(bitMap);
        this._reStartBtn.touchEnabled = true;
        this.addChild(this._reStartBtn);
        this._reStartBtn.x = (egret.MainContext.instance.stage.stageWidth - this._reStartBtn.width) / 2;
        this._reStartBtn.y = (egret.MainContext.instance.stage.stageHeight - this._reStartBtn.height) / 2;

    }
}