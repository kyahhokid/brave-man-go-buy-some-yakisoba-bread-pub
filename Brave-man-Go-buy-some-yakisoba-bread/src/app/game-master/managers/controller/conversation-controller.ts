import { Injectable } from "@angular/core";
import { ChapterType } from "src/app/domain/model/chapter/chapter-type";
import { Conversation } from "src/app/domain/model/conversation/conversation";
import { ConversationState } from "src/app/domain/state/conversation-state";
import { ConversationService } from "src/app/service/conversation/conversation.service";

/**
 * 会話コントローラー
 */
@Injectable({
  providedIn: 'root'
})
export class ConversationController {

  constructor(private conversationService: ConversationService) {

  }

  /**
   * 会話を始める。
   * @param conversationState 会話の状況
   * @param chapterType チャプター種別
   * @param conversationListId 会話リストID
   */
  startConversation(conversationState: ConversationState, chapterType: ChapterType, conversationListId: number) {
    conversationState.conversationIndex = 0;
    conversationState.conversation = this.conversationService.get(chapterType, conversationState.conversationIndex, conversationListId) || new Conversation('', '', null);
    if (conversationState.conversation.backgroundType !== null) {
      conversationState.conversationBackgroundStyle = this.conversationService.getBackgroundStyle(conversationState.conversation.backgroundType);
    }
  }

  /**
   * 会話を進める。
   * @param conversationState 会話の状況
   * @param chapterType チャプター種別
   * @param conversationListId 会話リストID
   * @param onAdvanceConversationIndex 会話インデックスが進んだことを通知するコールバック関数
   * @param advanceChapter チャプターを進めるコールバック関数
   */
  advanceConversation(conversationState: ConversationState, chapterType: ChapterType, conversationListId: number, onAdvanceConversationIndex: () => void, advanceChapter: () => void) {
    conversationState.conversationIndex++;
    const conversation = this.conversationService.get(chapterType, conversationState.conversationIndex);
    if (conversation) {
      conversationState.conversation = conversation;
      if (conversationState.conversation.backgroundType !== null) {
        conversationState.conversationBackgroundStyle = this.conversationService.getBackgroundStyle(conversationState.conversation.backgroundType);
      }
      onAdvanceConversationIndex();
    } else {
      advanceChapter();
    }
  }
}