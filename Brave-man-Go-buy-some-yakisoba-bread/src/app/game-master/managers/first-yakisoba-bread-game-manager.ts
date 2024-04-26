import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CharacterDirectionType } from "src/app/domain/model/famicon-style-game/character-direction-type";
import { DirectionType } from "src/app/domain/model/global/direction";
import { GameState } from "src/app/domain/state/game-state";
import { ConversationManager } from "./conversation-manager";
import { ConversationController } from "./controller/conversation-controller";

/**
 *  最初の焼きそばパンのゲームマネージャー
 */
@Injectable({
  providedIn: 'root'
})
export class FirstYakisobaBreadGameManager {
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

  investigate() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    const braveMan = gameState.famiconStyleGameState.braveMan;
    if (braveMan.position.x === 9 && braveMan.position.y === 2 && braveMan.direction === CharacterDirectionType.Up) {
      gameState.famiconStyleGameState.conversationId = 0;
      this.conversationController.startConversation(gameState.famiconStyleGameState.conversationState, gameState.chapterType, 0);
      this.store.next(gameState);
    }
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