import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ConversationState } from 'src/app/domain/state/conversation-state';
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
  // 会話の状況
  @Input() conversationState = new ConversationState();
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
