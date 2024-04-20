import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Conversation } from "src/app/domain/model/conversation/conversation";
import { GameState } from "src/app/domain/state/game-state";
import { ConversationService } from "src/app/service/conversation/conversation.service";

/**
 * 会話マネージャー
 */
@Injectable({
  providedIn: 'root'
})
export class ConversationManager {
  // ストア
  private store = new BehaviorSubject<GameState>(new GameState());

  constructor(
    private conversationService: ConversationService,
  ) { }

  /**
   * ストアをセットする。
   * @param store ストア
   */
  setStore(store: BehaviorSubject<GameState>) {
    this.store = store;
  }

  /**
   * 会話を始める。
   */
  startConversation() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    gameState.conversationState.isShowConversation = true;
    gameState.conversationState.conversationIndex = 0;
    gameState.conversationState.conversation = this.conversationService.get(gameState.chapterType, gameState.conversationState.conversationIndex) || new Conversation('', '', null);
    if (gameState.conversationState.conversation.backgroundType !== null) {
      gameState.conversationState.conversationBackgroundStyle = this.conversationService.getBackgroundStyle(gameState.conversationState.conversation.backgroundType);
    }
    this.store.next(gameState);
  }

  /**
   * 会話を進める。
   * @param advanceChapter チャプターを進めるコールバック関数
   */
  advanceConversation(advanceChapter: () => void) {
    const gameState = Object.assign(new GameState, this.store.getValue());
    gameState.conversationState.conversationIndex++;
    const conversation = this.conversationService.get(gameState.chapterType, gameState.conversationState.conversationIndex);
    if (conversation) {
      gameState.conversationState.conversation = conversation;
      if (gameState.conversationState.conversation.backgroundType !== null) {
        gameState.conversationState.conversationBackgroundStyle = this.conversationService.getBackgroundStyle(gameState.conversationState.conversation.backgroundType);
      }
      this.store.next(gameState);
    } else {
      gameState.conversationState.isShowConversation = false;
      advanceChapter();
    }
  }
}