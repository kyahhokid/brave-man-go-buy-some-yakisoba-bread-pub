import { ChapterType } from "../model/chapter/chapter-type";
import { ConversationState } from "./conversation-state";
import { FamiconStyleGameState } from "./famicon-style-game-state";

/**
 * ゲームの状況
 */
export class GameState {
  // チャプター種別
  chapterType = ChapterType.FirstYakisobaBreadConversation;
  // 会話の状況
  conversationState = new ConversationState();
  // ファミコン風ゲームの状況
  famiconStyleGameState = new FamiconStyleGameState();
}