import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { GameState } from 'src/app/domain/state/game-state';

/**
 * 会話コンポーネント
 */
@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent {
  // ゲームの状況
  @Input() gameState = new GameState();
  // コンテントがクリックされたことを通知するイベントエミッター
  @Output() contentClick: EventEmitter<null> = new EventEmitter()

  /**
   * コンテントがクリックされたときに呼ばれる。
   * OUTPUTでコンテントが選択されたことを通知する。
   */
  onClickContent() {
    this.contentClick.emit();
  }
}
