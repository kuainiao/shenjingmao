// 创建自定义事件
// 继承自egret.Event
class GameEvent extends egret.Event{
    public static OPEN_TILE:string = 'open_tile';
    public static START_GAME = 'start_game';
    public open_tile_index:number = 0;
    public constructor(type:string, bubbles:boolean = false,cancelable:boolean = false){
        super(type,bubbles,cancelable);
    }
}