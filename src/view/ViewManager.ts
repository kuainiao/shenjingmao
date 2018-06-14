class ViewManager extends egret.EventDispatcher {
    private _rootView: egret.DisplayObjectContainer;
    private _textures: egret.SpriteSheet;
    private _backgroundPanel:BackgroundPanel;
    private _stageGamePanel:StartGamePanel;
    private _gameOverPanelS:GameOverPanelS;
    private _gameOverPanelF:GameOverPanelF;

    public constructor(root: egret.DisplayObjectContainer, textures: egret.SpriteSheet) {
        super();
        this._rootView = root;
        this._textures = textures;

        var bg: egret.Bitmap = new egret.Bitmap();
        bg.texture = this._textures.getTexture('bg');
        this._rootView.addChild(bg);
    }

    private _title: Array<any> = [];
    private createTiles() {
        var len: number = 81;
        for (var i: number = 0; i < len; i++) {
            var tile: Tile = new Tile(RES.getRes('gameres+json'));
            tile.index = i;
            this._title.push(tile);
            tile.addEventListener(GameEvent.OPEN_TILE, this.onOpenTile, this);

        }
    }
    private onOpenTile(evt: GameEvent) {
        this.dispatchEvent(evt)

    }

    private showTiles() {
        var len: number = 81;
        for (var i: number = 0; i < len; i++) {
            var p:egret.Point = Util.getPointXYByIndex(this._title[i].index);
            this._title[i].x = p.x;
            this._title[i].y = p.y;
            this._rootView.addChild(this._title[i]);
        }
    }
}