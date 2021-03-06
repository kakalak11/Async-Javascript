System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Label, Reel, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, Table;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfReel(extras) {
    _reporterNs.report("Reel", "./Reel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Reel = _unresolved_2.Reel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bbf30ByE4JDVLIYf+ZpWc8O", "Table", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Table", Table = (_dec = ccclass('Table'), _dec2 = property({
        type: Label
      }), _dec(_class = (_class2 = (_temp = class Table extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "_reels", []);

          _initializerDefineProperty(this, "status", _descriptor, this);

          _defineProperty(this, "_stop", 0);
        }

        onLoad() {
          this._reels = this.getComponentsInChildren(_crd && Reel === void 0 ? (_reportPossibleCrUseOfReel({
            error: Error()
          }), Reel) : Reel);
        }

        spin() {
          this.status.string = 'Table Spinning';
          if (this._stop === this._reels.length) return this.onTableStop();
          return this._reels[this._stop].startSpin().then(() => {
            this._stop++;
            this.spin();
          });
        }

        onTableStop() {
          this._stop = 0;
          this.status.string = 'Table Stopped';
        }
        /*
        Quest 1: Implement function spin table 5 reel c??ng l??c, s??? d???ng promise, tr??? v??? call back khi t???t c??? reel c??ng d???ng l???i
        c?? th??? update l???i function spin, kh??ng ???????c update Reel.ts
        
        onTableStop() {
            this.status.string = 'Table Stopped';
        }
        */

        /*
        Quest 2: T??? quest 1, ki???m tra n???u c?? m???t trong nh???ng reel ch???y qu?? 10s ch??a d???ng trigger function onTableTimeout
         onTableTimout() {
            this.status.string = 'Table Timeout';
        }
        */

        /*
        Quest 3: Implement function ????? table spin t???ng reel theo th??? t??? 1->5 l???n l?????t reel n??y d???ng ?????n reel ti???p theo,
        sau khi t???t c??? c??c reel ???? d???ng th?? trigger function onTableStop
         onTableStop() {
            log('onTableStop');
        }
        */

        /*
        Quest 4: Update Reel.ts ????? m???i function startSpin l?? 1 promise, sau ???? l??m l???i c??c quest 1,2,3
        */


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=Table.js.map