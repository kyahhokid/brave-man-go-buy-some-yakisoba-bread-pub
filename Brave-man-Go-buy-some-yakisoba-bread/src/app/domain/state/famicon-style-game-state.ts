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
  // 会話ID(会話中以外は-1)
  conversationId = -1;
  // 会話の状況
  conversationState = new ConversationState();
}