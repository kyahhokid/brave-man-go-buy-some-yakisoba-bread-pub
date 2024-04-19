import { Component, EventEmitter, Output } from '@angular/core';
import { DirectionType } from 'src/app/domain/model/global/direction';

/**
 * ファミコン風ゲームコントローラーコンポーネント
 */
@Component({
  selector: 'app-famicon-style-game-controller',
  templateUrl: './famicon-style-game-controller.component.html',
  styleUrls: ['./famicon-style-game-controller.component.scss'],
})
export class FamiconStyleGameControllerComponent {
  // 移動ボタンがクリックされたことを通知するイベントエミッター
  @Output() moveButtonClick: EventEmitter<DirectionType> = new EventEmitter();
  // 方向種別
  directionType = DirectionType;

  /**
   * 移動ボタンがクリックされたときに呼ばれる。
   * OUTPUTで移動ボタンがクリックされたことを通知する。
   */
  onClickMoveButton(directionType: DirectionType) {
    this.moveButtonClick.emit(directionType);
  }
}
