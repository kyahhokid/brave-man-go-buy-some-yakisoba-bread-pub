import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CharacterDirectionType } from "src/app/domain/model/famicon-style-game/character-direction-type";
import { DirectionType } from "src/app/domain/model/global/direction";
import { GameState } from "src/app/domain/state/game-state";

/**
 *  最初の焼きそばパンのゲームマネージャー
 */
@Injectable({
  providedIn: 'root'
})
export class FirstYakisobaBreadGameManager {
  // ストア
  private store = new BehaviorSubject<GameState>(new GameState());

  /**
   * ストアをセットする。
   * @param store ストア
   */
  setStore(store: BehaviorSubject<GameState>) {
    this.store = store;
  }

  investigate() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    const braveMan = gameState.famiconStyleGameState.braveMan;
    if (braveMan.position.x === 9 && braveMan.position.y === 2 && braveMan.direction === CharacterDirectionType.Up) {
      console.log('最初の焼きそばパンを手に入れた');

    }
  }
}