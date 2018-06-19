// viewmanger可以发送事件能力，继承自egret.EventDispacther，进行视图操作
class ViewManager extends egret.EventDispatcher {
    private _rootView: egret.DisplayObjectContainer;
    private _textures: egret.SpriteSheet;
    private _backgroundPanel:BackgroundPanel;
    private _startgeGamePanel:StartGamePanel;
    private _gameOverPanelS:GameOverPanelS;
    private _gameOverPanelF:GameOverPanelF;
    private _gameOverButtonPanel:GameOverButtonPanel;

    public constructor(root: egret.DisplayObjectContainer, textures: egret.SpriteSheet) {
        super();
        this._rootView = root;
        this._textures = textures;

        this._backgroundPanel = new BackgroundPanel(root, textures);
        // 开始界面实例化，并添加事件
        this._startgeGamePanel = new StartGamePanel(textures);
        this._startgeGamePanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartViewClick, this);
        // 游戏结束界面
        this._gameOverPanelS = new GameOverPanelS(textures);
        this._gameOverPanelF = new GameOverPanelF(textures);
        this._gameOverButtonPanel = new GameOverButtonPanel(textures);
        this._gameOverButtonPanel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRestartClick, this);
    }


    private _cat:Cats;
    private creatCat () :void{
        this._cat = new Cats();
    }
    private showStartGameView() {
        if (this._startgeGamePanel) {
            this._rootView.addChild(this._startgeGamePanel);
        }
    }
    // 开始游戏
    private onStartViewClick() {
        this._rootView.removeChild(this._startgeGamePanel);
        this._startgeGamePanel.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onStartViewClick, this);
        var evt:GameEvent = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt);
    }
    // 重新玩游戏
    private onRestartClick () {
        if (this._gameOverPanelS.parent) {
            this._rootView.removeChild(this._gameOverPanelS);
        } else {
            this._rootView.removeChild(this._gameOverPanelF);
        }
        this._rootView.removeChild(this._gameOverButtonPanel);
        var evt:GameEvent = new GameEvent(GameEvent.START_GAME);
        this.dispatchEvent(evt);
    }

    // 创建地图 
    private _tiles: Array<any> = [];
    private createTiles() {
        var len: number = 81;
        for (var i: number = 0; i < len; i++) {
            var tile: Tile = new Tile(RES.getRes('gameres+json'));
            tile.index = i;
            this._tiles.push(tile);
            tile.addEventListener(GameEvent.OPEN_TILE, this.onOpenTile, this);

        }
    }
    private onOpenTile(evt: GameEvent) {
        // 使viewmanger发送‘openTile’事件
        this.dispatchEvent(evt)
    }

    // 设置tile的位置
    private showTiles() {
        var len: number = 81;
        for (var i: number = 0; i < len; i++) {
            var p:egret.Point = Util.getPointXYByIndex(this._tiles[i].index);
            this._tiles[i].x = p.x;
            this._tiles[i].y = p.y;
            // 添加到试图根容器
            this._rootView.addChild(this._tiles[i]);
        }
    }

    public updateAll () {

    }
}