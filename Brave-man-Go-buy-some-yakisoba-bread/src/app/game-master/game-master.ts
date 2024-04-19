
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameState } from '../domain/state/game-state';
import { ConversationService } from '../service/conversation/conversation.service';
import { Conversation } from '../domain/model/conversation/conversation';
import { BackgroundType } from '../domain/model/conversation/background-type';
import { ChapterType } from '../domain/model/chapter/chapter-type';

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
    private conversationService: ConversationService,
  ) { }

  // ゲームの状況
  get gameState$() {
    return this.store.asObservable();
  }

  /**
   * 会話を始める。
   */
  startConversation() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    gameState.conversationIndex = 0;
    gameState.conversation = this.conversationService.get(gameState.chapterType, gameState.conversationIndex) || new Conversation('', '', null);
    if (gameState.conversation.backgroundType !== null) {
      gameState.conversationBackgroundStyle = this.conversationService.getBackgroundStyle(gameState.conversation.backgroundType);
    }
    this.store.next(gameState);
  }

  /**
   * 会話を進める。
   */
  advanceConversation() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    gameState.conversationIndex++;
    const conversation = this.conversationService.get(gameState.chapterType, gameState.conversationIndex);
    if (conversation) {
      gameState.conversation = conversation;
      if (gameState.conversation.backgroundType !== null) {
        gameState.conversationBackgroundStyle = this.conversationService.getBackgroundStyle(gameState.conversation.backgroundType);
      }
      this.store.next(gameState);
    } else {
      this.advanceChapter();
    }
  }

  /**
   * チャプターを進める。
   */
  advanceChapter() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    switch (gameState.chapterType) {
      case ChapterType.FirstYakisobaBreadConversation: {
        gameState.chapterType = ChapterType.FirstYakisobaBread;
        break;
      }
    }
    this.store.next(gameState);
  }

  /**
   * セットアップを行う。
   * ゲームの状況を初期化して、最初の会話を開始する。
   */
  async setUp() {
    this.store.next(new GameState());
    this.startConversation();
  }
}