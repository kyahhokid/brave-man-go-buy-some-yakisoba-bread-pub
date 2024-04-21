import { Character } from "../model/character/character";
import { ConversationState } from "./conversation-state";

/**
 * ファミコン風ゲームの状況
 */
export class FamiconStyleGameState {
  // 1座標ごとのpx数
  numberOfPxPerCoordinate = 0;
  // 勇者
  braveMan = new Character();
  // 地図
  map: boolean[][] = []
  // 会話を表示するか
  isShowConversation = false;
  // 会話の状況
  conversationState = new ConversationState();
}