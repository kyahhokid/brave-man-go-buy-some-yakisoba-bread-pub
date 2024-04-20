import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DirectionType } from 'src/app/domain/model/global/direction';
import { FamiconStyleGameState } from 'src/app/domain/state/famicon-style-game-state';

/**
 * ファミコン風ゲームコンポーネント
 */
@Component({
  selector: 'app-famicon-style-game',
  templateUrl: './famicon-style-game.component.html',
  styleUrls: ['./famicon-style-game.component.scss'],
})
export class FamiconStyleGameComponent {
  // ファミコン風ゲームの状況
  @Input() famiconStyleGameState = new FamiconStyleGameState();
  // 移動ボタンがクリックされたことを通知するイベントエミッター
  @Output() moveButtonClick: EventEmitter<DirectionType> = new EventEmitter();
  // 調べるボタンがクリックされたことを通知するイベントエミッター
  @Output() investigateButtonClick: EventEmitter<void> = new EventEmitter();

  /**
   * 移動ボタンがクリックされたときに呼ばれる。
   * OUTPUTで移動ボタンがクリックされたことを通知する。
   */
  onClickMoveButton(directionType: DirectionType) {
    this.moveButtonClick.emit(directionType);
  }

  /**
   * 調べるボタンがクリックされたときに呼ばれる。
   * OUTPUTで調べるボタンがクリックされたことを通知する。
   */
  onClickInvestigateButton() {
    this.investigateButtonClick.emit();
  }
}
