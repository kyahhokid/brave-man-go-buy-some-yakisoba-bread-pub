import { Component, EventEmitter, Output, OnChanges, SimpleChanges, Input } from '@angular/core';
import { Subject, interval, takeUntil, timer } from 'rxjs';
import { DirectionType } from 'src/app/domain/model/global/direction';
import { FamiconStyleGameState } from 'src/app/domain/state/famicon-style-game-state';

/**
 * ファミコン風ゲームコントローラーコンポーネント
 */
@Component({
  selector: 'app-famicon-style-game-controller',
  templateUrl: './famicon-style-game-controller.component.html',
  styleUrls: ['./famicon-style-game-controller.component.scss'],
})
export class FamiconStyleGameControllerComponent implements OnChanges {
  // ファミコン風ゲームの状況
  @Input() famiconStyleGameState = new FamiconStyleGameState();
  // 移動ボタンがクリックされたことを通知するイベントエミッター
  @Output() moveButtonClick: EventEmitter<DirectionType> = new EventEmitter();
  // 調べるボタンがクリックされたことを通知するイベントエミッター
  @Output() investigateButtonClick: EventEmitter<void> = new EventEmitter();
  // 方向種別
  directionType = DirectionType;
  // 調べるボタンテキスト
  investigateButtonText = '調べる';
  // 勇者の移動を止めるサブジェクト
  stopBraveManSubject = new Subject();

  ngOnChanges(changes: SimpleChanges): void {
    // アクションボタンテキストを更新する。
    this.updateActionButtonText()
  }

  /**
   * アクションボタンテキストを更新する。
   */
  private updateActionButtonText() {
    if (this.famiconStyleGameState.conversationListId === -1) {
      this.investigateButtonText = '調べる';
    } else {
      this.investigateButtonText = '次へ';
    }
  }

  /**
   * 移動ボタンがクリックされたときに呼ばれる。
   * OUTPUTで移動ボタンがクリックされたことを通知する。
   */
  onClickMoveButton(directionType: DirectionType) {
    this.moveButtonClick.emit(directionType);
  }

  /**
   * 移動ボタンが長押しされたときに呼ばれる。
   * 長押し中、0.2秒ごとに移動ボタンがクリックされた時の処理を実行する。
   */
  onPointerDownMoveButton(directionType: DirectionType) {
    document.addEventListener('pointerup', () => {
      this.stopBraveManSubject.next(null);
    }, { once: true });
    timer(0, 200).pipe(takeUntil(this.stopBraveManSubject)).subscribe(() => {
      this.onClickMoveButton(directionType)
    })
  }

  /**
   * 調べるボタンがクリックされたときに呼ばれる。
   * OUTPUTで調べるボタンがクリックされたことを通知する。
   */
  onClickInvestigateButton() {
    this.investigateButtonClick.emit();
  }
}
