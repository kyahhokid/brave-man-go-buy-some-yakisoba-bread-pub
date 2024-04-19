import { Conversation } from "../model/conversation/conversation";

/**
 * 会話の状況
 */
export class ConversationState {
  // 会話のインデックス
  conversationIndex = 0;
  // 会話用の背景スタイル
  conversationBackgroundStyle = {};
  // 会話
  conversation = new Conversation('', '', null);
}