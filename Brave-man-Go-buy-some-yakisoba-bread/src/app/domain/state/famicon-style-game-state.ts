import { Character } from "../model/character/character";

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
}