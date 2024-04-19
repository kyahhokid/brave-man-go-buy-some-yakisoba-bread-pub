import { FamiconStyleGameState } from "src/app/domain/state/famicon-style-game-state";

/**
 * ファミコン風マップ背景コンポーネントユーティリティ
 */
export class FamiconStyleMapBackgroundComponentUtil {

  /**
   * cssプロパティのbackground-position-xの値を取得する。
   * @param famiconStyleGameState 
   */
  static getBackgroundPositionX(famiconStyleGameState: FamiconStyleGameState): number {
    const maxX = famiconStyleGameState.map[famiconStyleGameState.braveMan.position.y].length - 1;
    const positionX = famiconStyleGameState.braveMan.position.x;
    let backgroundPositionX = 0;
    if (5 <= positionX && positionX <= maxX - 6) {
      backgroundPositionX = positionX - 5;
    } else if (maxX - 6 < positionX) {
      backgroundPositionX = maxX - 10.35;
    }
    return -1 * backgroundPositionX * famiconStyleGameState.numberOfPxPerCoordinate;
  }
}