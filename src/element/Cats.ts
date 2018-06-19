// 神经猫
class Cats extends egret.Sprite{
    private _action1mc: egret.MovieClip;
    private _action2mc: egret.MovieClip;
    // 是否播放动画1
    public _isAction1mc: boolean = true;

    public constructor() {
        super();
        var data = RES.getRes('stay_json');
        var texture = RES.getRes('stay_png');
        var mcFactory1:egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data, texture);
        this._action1mc = new egret.MovieClip(mcFactory1.generateMovieClipData('stay'));
        this._action1mc.gotoAndPlay(0);
        this._action1mc.play(-1);

        data = RES.getRes('weizhu_json');
        texture = RES.getRes('weizhu_png');
        mcFactory1 = new egret.MovieClipDataFactory(data, texture);
        this._action2mc = new egret.MovieClip(mcFactory1.generateMovieClipData('weizhu'));
        // this._action1mc.gotoAndPlay('weizhu0000', 3);
        this._action2mc.play(-1);
        this.anchorOffsetX = 0.5;
        this.anchorOffsetY = 1;
        this.playAction();
    }

    public init() {
        this._isAction1mc = true;
        this.playAction();
    }

    public playAction() {
        if(this.numChildren){
            this.removeChildAt(0);
        }
        if(this._isAction1mc) {
            this.addChild(this._action1mc);
        }else{
            this.addChild(this._action2mc);
        }
    }

    public isAction1(): Boolean{
        return this._isAction1mc;
    }
    public set isAction(val: boolean) {
        if(this._isAction1mc !== val) {
            this._isAction1mc = val;
            this.playAction();
        }
    }
}