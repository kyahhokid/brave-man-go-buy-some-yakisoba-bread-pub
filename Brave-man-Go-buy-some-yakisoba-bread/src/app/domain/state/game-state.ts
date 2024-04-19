import { ChapterType } from "../model/chapter/chapter-type";
import { Conversation } from "../model/conversation/conversation";

/**
 * ゲームの状況
 */
export class GameState {
  // チャプター種別
  chapterType = ChapterType.FirstYakisobaBreadConversation;
  // 会話のインデックス
  conversationIndex = 0;
  // 会話用の背景スタイル
  conversationBackgroundStyle = {};
  // 会話
  conversation = new Conversation('', '', null);
}