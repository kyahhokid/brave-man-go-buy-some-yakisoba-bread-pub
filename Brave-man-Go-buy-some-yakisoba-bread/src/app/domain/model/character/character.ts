import { CharacterDirectionType } from "../famicon-style-game/character-direction-type";
import { Position } from "../global/position";

/**
 * キャラクター
 */
export class Character {
  // 座標
  position = new Position(0, 0);
  // 向き
  direction = CharacterDirectionType.Up;
  // 移動中か
  isMoving = false;
}