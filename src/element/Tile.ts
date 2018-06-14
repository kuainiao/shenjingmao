class Tile extends egret.Sprite{

    public index:number = 0;
    private _redSkin:egret.Bitmap;
    private _blackSkin:egret.Bitmap;
    public constructor(textures:egret.SpriteSheet){
        super();
        this._redSkin = new egret.Bitmap();
        this._redSkin.texture = textures.getTexture('pot2');
        this._blackSkin = new egret.Bitmap();
        this._blackSkin.texture = textures.getTexture('pot1');

        this.anchorOffsetX = 0.5;
        this.anchorOffsetY = 0.5;

        this.width = 45;
        this.height = 45;
        this.touchEnabled = true;
        this.addChild(this._blackSkin);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick,this);
        
    }

    // 控制显示灰色位图或者红色位图
    private _isOpen:boolean = true;
    public getStatus():boolean{
        return this._isOpen;
    }
    public open(){
        if(!this._isOpen){
            this._isOpen = true;
            this.removeChild(this._redSkin);
            this.addChild(this._blackSkin);
        }
    }
    public close(){
        if(this._isOpen){
            this.removeChild(this._blackSkin);
            this.addChild(this._redSkin);
        }
    }
    private onClick(){
        if(this._isOpen){
            // 逻辑运算

            var evt:GameEvent = new GameEvent(GameEvent.OPEN_TILE);
            evt.open_tile_index = this.index;
            this.dispatchEvent(evt);
        }
        this.close();
    }
}