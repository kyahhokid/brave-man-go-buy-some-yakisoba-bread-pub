import { FamiconStyleGameState } from "src/app/domain/state/famicon-style-game-state";

/**
 * ファミコン風ゲームコンポーネントユーティリティ
 */
export class FamiconStyleMapComponentUtil {

  /**
   * 勇者のcssプロパティのleftの値を取得する。
   * @param famiconStyleGameState ファミコン風ゲームの状況
   * @returns 
   */
  static getLeftForBraveMan(famiconStyleGameState: FamiconStyleGameState): number {
    const maxX = famiconStyleGameState.map[famiconStyleGameState.braveMan.position.y].length - 1;
    let positionX = famiconStyleGameState.braveMan.position.x;
    if (5 <= positionX && positionX <= maxX - 6) {
      positionX = 5;
    } else if (maxX - 6 < positionX) {
      positionX = positionX - maxX + 10.65;
    }
    return positionX * famiconStyleGameState.numberOfPxPerCoordinate;
  }

  /**
   * マップのcssプロパティのbackground-position-xの値を取得する。
   * @param famiconStyleGameState 
   */
  static getLeftForMap(famiconStyleGameState: FamiconStyleGameState): number {
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