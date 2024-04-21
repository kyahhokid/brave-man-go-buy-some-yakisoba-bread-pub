import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GameState } from "src/app/domain/state/game-state";
import { ConversationController } from "./controller/conversation-controller";

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
    private conversationController: ConversationController,
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
    this.conversationController.startConversation(gameState.conversationState, gameState.chapterType, -1);
    this.store.next(gameState);
  }

  /**
   * 会話を進める。
   * @param advanceChapter チャプターを進めるコールバック関数
   */
  advanceConversation(advanceChapter: () => void) {
    const gameState = Object.assign(new GameState, this.store.getValue());
    this.conversationController.advanceConversation(gameState.conversationState, gameState.chapterType, -1, () => { this.store.next(gameState) }, advanceChapter);
  }
}