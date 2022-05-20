
import { _decorator, Component, Node, log, Label } from 'cc';
import { Reel } from './Reel';
const { ccclass, property } = _decorator;

 
@ccclass('Table')
export class Table extends Component {

    _reels = [];
    _promiseList = [];

    @property({type: Label})
    status = null;

    onLoad() {
        this._reels = this.getComponentsInChildren(Reel);
    }

    spin() {
        this.status.string = 'Table Spinning';
        this._reels.forEach(reel => {
            const resolve = () => true;
            const promise = new Promise(resolve => {
                reel.startSpin(resolve);
            })
            this._promiseList.push(promise);
        });
        const callbackComplete = this.onTableStop.bind(this);
        Promise.all(this._promiseList).then(callbackComplete);
    }

    onTableStop() {
        this.status.string = 'Table Stopped';
        console.log('Table Stop');
    }

    /*
    Quest 1: Implement function spin table 5 reel cùng lúc, sử dụng promise, trả về call back khi tất cả reel cùng dừng lại
    có thể update lại function spin, không được update Reel.ts
    
    onTableStop() {
        this.status.string = 'Table Stopped';
    }
    */

    /*
    Quest 2: Từ quest 1, kiểm tra nếu có một trong những reel chạy quá 10s chưa dừng trigger function onTableTimeout

    onTableTimout() {
        this.status.string = 'Table Timeout';
    }
    */

    /*
    Quest 3: Implement function để table spin từng reel theo thứ tự 1->5 lần lượt reel này dừng đến reel tiếp theo,
    sau khi tất cả các reel đã dừng thì trigger function onTableStop

    onTableStop() {
        log('onTableStop');
    }
    */

    /*
    Quest 4: Update Reel.ts để mỗi function startSpin là 1 promise, sau đó làm lại các quest 1,2,3
    */
}