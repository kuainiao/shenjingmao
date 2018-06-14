class BackgroundPanel extends egret.Bitmap {
    private constructor(root:egret.DisplayObjectContainer, texture:egret.SpriteSheet) {
        super();
        this.texture = texture.getTexture('bg');
        root.addChild(this);
    }
}