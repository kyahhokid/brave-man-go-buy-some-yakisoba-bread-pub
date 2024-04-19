import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { ChapterType } from 'src/app/domain/model/chapter/chapter-type';
import { GameState } from 'src/app/domain/state/game-state';

/**
 * ゲームエリアコンポーネント 
 */
@Component({
  selector: 'app-game-area',
  templateUrl: './game-area.component.html',
  styleUrls: ['./game-area.component.scss']
})
export class GameAreaComponent implements OnChanges {
  // ゲームの状況
  @Input() gameState = new GameState();
  // 会話コンテントがクリックされたことを通知するイベントエミッター
  @Output() conversationContentClick: EventEmitter<null> = new EventEmitter()
  // 会話コンポーネントを表示するか
  isShowConversationComponent = false;
  // チャプター種別
  readonly chapterType = ChapterType;

  ngOnChanges() {
    this.updateIsShowConversationComponent()
  }

  /**
   * 会話コンポーネント表示フラグを更新する。
   */
  updateIsShowConversationComponent() {
    switch (this.gameState.chapterType) {
      case ChapterType.FirstYakisobaBreadConversation: {
        this.isShowConversationComponent = true;
        break;
      }
      default: this.isShowConversationComponent = false;
    }
  }

  /**
   * 会話コンテントがクリックされたときに呼ばれる。
   * OUTPUTで会話コンテントが選択されたことを通知する。
   */
  onClickConversationContent() {
    this.conversationContentClick.emit();
  }
}
