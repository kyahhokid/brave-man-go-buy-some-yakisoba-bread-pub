import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CharacterDirectionType } from "src/app/domain/model/famicon-style-game/character-direction-type";
import { DirectionType } from "src/app/domain/model/global/direction";
import { GameState } from "src/app/domain/state/game-state";
import { ConversationManager } from "./conversation-manager";
import { ConversationController } from "./controller/conversation-controller";
import { FamiconStyleGameState } from "src/app/domain/state/famicon-style-game-state";

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
    if (gameState.famiconStyleGameState.conversationListId !== -1) {
      this.advanceConversation(() => {
        switch (gameState.famiconStyleGameState.conversationListId) {
          case 0: {
            gameState.famiconStyleGameState.firstYakisobaBreadState.isGottenYakisobaBread = true;
            break;
          }
          case 1: {

          }
        }
        gameState.famiconStyleGameState.conversationListId = -1;
        // 各コンポーネントに状態更新を検知させるためにオブジェクトを再生成している。
        gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState(), gameState.famiconStyleGameState);
        this.store.next(gameState);
      })
    } else if (braveMan.position.x === 9 && braveMan.position.y === 2 && braveMan.direction === CharacterDirectionType.Up) {
      if (!gameState.famiconStyleGameState.firstYakisobaBreadState.isGottenYakisobaBread) {
        gameState.famiconStyleGameState.conversationListId = 0;
        this.conversationController.startConversation(gameState.famiconStyleGameState.conversationState, gameState.chapterType, gameState.famiconStyleGameState.conversationListId);
        // 各コンポーネントに状態更新を検知させるためにオブジェクトを再生成している。
        gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState(), gameState.famiconStyleGameState);
        this.store.next(gameState);
      }
    } else if (braveMan.position.x === 4 && braveMan.position.y === 5 && braveMan.direction === CharacterDirectionType.Left) {
      if (gameState.famiconStyleGameState.firstYakisobaBreadState.isGottenYakisobaBread) {
        gameState.famiconStyleGameState.conversationListId = 1;
        this.conversationController.startConversation(gameState.famiconStyleGameState.conversationState, gameState.chapterType, gameState.famiconStyleGameState.conversationListId);
        // 各コンポーネントに状態更新を検知させるためにオブジェクトを再生成している。
        gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState(), gameState.famiconStyleGameState);
        this.store.next(gameState);
      }
    }
  }

  /**
   * 会話を進める。
   * @param advanceChapter チャプターを進めるコールバック関数
   */
  advanceConversation(advanceChapter: () => void) {
    const gameState = Object.assign(new GameState, this.store.getValue());
    this.conversationController.advanceConversation(gameState.famiconStyleGameState.conversationState, gameState.chapterType, gameState.famiconStyleGameState.conversationListId, () => { this.store.next(gameState) }, advanceChapter);
  }
}