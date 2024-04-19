
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameState } from '../domain/state/game-state';
import { ChapterType } from '../domain/model/chapter/chapter-type';
import { Position } from '../domain/model/global/position';
import { FamiconStyleGameState } from '../domain/state/famicon-style-game-state';
import { ConversationManager } from './managers/conversation-manager';
import { FamiconStyleGameManager } from './managers/famicon-style-game-manager';
import { DirectionType } from '../domain/model/global/direction';

/**
 * ゲームマスター
 */
@Injectable({
  providedIn: 'root'
})
export class GameMaster {
  // ストア
  private store = new BehaviorSubject<GameState>(new GameState());

  constructor(
    private conversationManager: ConversationManager,
    private famiconStyleGameManager: FamiconStyleGameManager,
  ) { }

  // ゲームの状況
  get gameState$() {
    return this.store.asObservable();
  }

  /**
   * セットアップを行う。
   * ゲームの状態を初期化してチャプターセットアップを実行する。
   */
  setUp() {
    this.store.next(new GameState());
    this.setUpChapter();
  }

  /**
   * チャプターセットアップを行う。
   */
  setUpChapter() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    switch (gameState.chapterType) {
      case ChapterType.FirstYakisobaBreadConversation: {
        this.conversationManager.setStore(this.store);
        this.conversationManager.startConversation();
        break;
      }
      case ChapterType.FirstYakisobaBread: {
        this.famiconStyleGameManager.setStore(this.store);
        this.famiconStyleGameManager.setup();
        break;
      }
    }
  }

  /**
   * チャプターを進める。
   */
  advanceChapter = () => {
    const gameState = Object.assign(new GameState, this.store.getValue());
    switch (gameState.chapterType) {
      case ChapterType.FirstYakisobaBreadConversation: {
        gameState.chapterType = ChapterType.FirstYakisobaBread;
        break;
      }
    }
    this.store.next(gameState);
    this.setUpChapter();
  }

  /**
   * 会話を進める。
   */
  advanceConversation() {
    this.conversationManager.advanceConversation(this.advanceChapter);
  }

  /**
   * 勇者を動かす。(ファミコン風ゲーム用)
   * @param directionType 方向種別
   */
  moveBraveManInFamiconStyleGame(directionType: DirectionType) {
    this.famiconStyleGameManager.moveBraveMan(directionType);
  }
}