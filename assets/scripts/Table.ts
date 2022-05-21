
import { _decorator, Component, Node, log, Label, tween, Tween } from 'cc';
import { Reel } from './Reel';
const { ccclass, property } = _decorator;


@ccclass('Table')
export class Table extends Component {

    _reels = [];
    _promiseList = [];
    _tweenList: Tween<Table>[] = [];

    @property({ type: Label })
    status = null;

    private _stopIndex: number = 0;

    onLoad() {
        this._reels = this.getComponentsInChildren(Reel);
    }

    spin() {
        this.status.string = 'Table Spinning';
        this._stopIndex = 0;
        this._promiseList = [];

        for (let index = 0; index < this._reels.length; index++) {
            const reel = this._reels[index];

            const spinPromise = new Promise((resolve) => {
                const callbackStop = this.onCallbackStop.bind(this, index, resolve);
                setTimeout(() => reel.startSpin(callbackStop), 250 * index);
            })

            this._promiseList.push(spinPromise);
        }

        Promise.all(this._promiseList).then(() => this.onTableStop());
    }

    onCallbackStop(index, resolve) {
        if (index !== this._stopIndex) {
            this._reels[index]['_spinning'] = true;
            this._reels[index]['_rollCount'] = 0;
            this._reels[index]['_rollTarget'] = Math.random() * 10 + index;
            return;
        }

        this._stopIndex++;
        resolve();
        return true;
    }

    onTableStop() {
        this.status.string = 'Table Stopped';
    }

    onTableTimeout() {
        this.status.string = 'Table Timeout';
    }

    /*
    DONE

    Quest 1: Implement function spin table 5 reel cùng lúc, sử dụng promise, trả về call back khi tất cả reel cùng dừng lại
    có thể update lại function spin, không được update Reel.ts
    
    onTableStop() {
        this.status.string = 'Table Stopped';
    }
    */

    /*
    DONE

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
