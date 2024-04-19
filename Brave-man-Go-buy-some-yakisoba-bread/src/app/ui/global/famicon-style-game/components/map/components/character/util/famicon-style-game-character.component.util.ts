import { CharacterDirectionType } from "src/app/domain/model/famicon-style-game/character-direction-type";
import { BackgroundPosition } from "src/app/ui/layout-model";

/**
 * ファミコン風ゲームキャラクターコンポーネントユーティリティ
 */
export class FamiconStyleGameCharacterComponentUtil {

  /**
   * BackgroundPositionを取得する。
   * @param characterDirectionType キャラクター向き種別
   * @returns 
   */
  static getBackgroundPosition(characterDirectionType: CharacterDirectionType): BackgroundPosition {
    const backgroundPosition = new BackgroundPosition();
    switch (characterDirectionType) {
      case CharacterDirectionType.Down: {
        backgroundPosition.x = -40;
        backgroundPosition.y = 0;
        break;
      }
      case CharacterDirectionType.DownWalking1: {
        backgroundPosition.x = 0;
        backgroundPosition.y = 0;
        break;
      }
      case CharacterDirectionType.DownWalking2: {
        backgroundPosition.x = -80;
        backgroundPosition.y = 0;
        break;
      }
      case CharacterDirectionType.Left: {
        backgroundPosition.x = -40;
        backgroundPosition.y = -56;
        break;
      }
      case CharacterDirectionType.LeftWalking1: {
        backgroundPosition.x = 0;
        backgroundPosition.y = -56;
        break;
      }
      case CharacterDirectionType.LeftWalking2: {
        backgroundPosition.x = -80;
        backgroundPosition.y = -56;
        break;
      }
      case CharacterDirectionType.Right: {
        backgroundPosition.x = -40;
        backgroundPosition.y = -112;
        break;
      }
      case CharacterDirectionType.RightWalking1: {
        backgroundPosition.x = 0;
        backgroundPosition.y = -112;
        break;
      }
      case CharacterDirectionType.RightWalking2: {
        backgroundPosition.x = -80;
        backgroundPosition.y = -112;
        break;
      }
      case CharacterDirectionType.Up: {
        backgroundPosition.x = -40;
        backgroundPosition.y = -168;
        break;
      }
      case CharacterDirectionType.UpWalking1: {
        backgroundPosition.x = 0;
        backgroundPosition.y = -168;
        break;
      }
      case CharacterDirectionType.UpWalking2: {
        backgroundPosition.x = -80;
        backgroundPosition.y = -168;
        break;
      }
    }
    return backgroundPosition;
  }
}