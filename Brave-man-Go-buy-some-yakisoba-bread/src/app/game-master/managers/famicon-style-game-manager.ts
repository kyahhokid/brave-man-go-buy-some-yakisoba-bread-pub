import { Injectable } from "@angular/core";
import { BehaviorSubject, firstValueFrom, tap, timer } from "rxjs";
import { CharacterDirectionType } from "src/app/domain/model/famicon-style-game/character-direction-type";
import { DirectionType } from "src/app/domain/model/global/direction";
import { Position } from "src/app/domain/model/global/position";
import { FamiconStyleGameState } from "src/app/domain/state/famicon-style-game-state";
import { GameState } from "src/app/domain/state/game-state";
import { MapService } from "src/app/service/map/map.service";

/**
 * ファミコン風ゲームマネージャー
 */
@Injectable({
  providedIn: 'root'
})
export class FamiconStyleGameManager {
  // ストア
  private store = new BehaviorSubject<GameState>(new GameState());

  constructor(
    private mapService: MapService,
  ) { }

  /**
   * ストアをセットする。
   * @param store ストア
   */
  setStore(store: BehaviorSubject<GameState>) {
    this.store = store;
  }

  /**
   * セットアップを行う。
   */
  setup() {
    const gameState = Object.assign(new GameState, this.store.getValue());
    gameState.famiconStyleGameState = new FamiconStyleGameState();
    gameState.famiconStyleGameState.numberOfPxPerCoordinate = 30.416667;
    gameState.famiconStyleGameState.braveMan.position = new Position();
    gameState.famiconStyleGameState.braveMan.position.x = 4;
    gameState.famiconStyleGameState.braveMan.position.y = 11;
    gameState.famiconStyleGameState.map = this.mapService.getMap();
    this.store.next(gameState);
  }

  /**
   * 勇者を動かす。
   * @param direction 動かす方向
   */
  async moveBraveMan(direction: DirectionType) {
    let gameState = Object.assign(new GameState, this.store.getValue());
    switch (direction) {
      case DirectionType.Down: {
        if (!this.isMovable(direction, gameState.famiconStyleGameState)) {
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Down;
          this.store.next(gameState);
        } else {
          gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
          gameState.famiconStyleGameState.braveMan.position.y += 0.5;
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.DownWalking2;
          this.store.next(gameState);
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
            gameState.famiconStyleGameState.braveMan.position.y += 0.5;
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.DownWalking1;
            this.store.next(gameState);
          })));
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Down;
            this.store.next(gameState);
          })));
        }
        break;
      }
      case DirectionType.Left: {
        if (!this.isMovable(direction, gameState.famiconStyleGameState)) {
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Left;
          this.store.next(gameState);
        } else {
          gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
          gameState.famiconStyleGameState.braveMan.position.x -= 0.5;
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.LeftWalking2;
          this.store.next(gameState);
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
            gameState.famiconStyleGameState.braveMan.position.x -= 0.5;
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.LeftWalking1;
            this.store.next(gameState);
          })));
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Left;
            this.store.next(gameState);
          })));
        }
        break;
      }
      case DirectionType.Right: {
        if (!this.isMovable(direction, gameState.famiconStyleGameState)) {
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Right;
          this.store.next(gameState);
        } else {
          gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
          gameState.famiconStyleGameState.braveMan.position.x += 0.5;
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.RightWalking2;
          this.store.next(gameState);
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
            gameState.famiconStyleGameState.braveMan.position.x += 0.5;
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.RightWalking1;
            this.store.next(gameState);
          })));
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Right;
            this.store.next(gameState);
          })));
        }
        break;
      }
      case DirectionType.Up: {
        if (!this.isMovable(direction, gameState.famiconStyleGameState)) {
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Up;
          this.store.next(gameState);
        } else {
          gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
          gameState.famiconStyleGameState.braveMan.position.y -= 0.5;
          gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.UpWalking2;
          this.store.next(gameState);
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState = Object.assign(new FamiconStyleGameState, gameState.famiconStyleGameState);
            gameState.famiconStyleGameState.braveMan.position.y -= 0.5;
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.UpWalking1;
            this.store.next(gameState);
          })));
          await firstValueFrom(timer(100).pipe(tap(() => {
            gameState = Object.assign(new GameState, this.store.getValue());
            gameState.famiconStyleGameState.braveMan.direction = CharacterDirectionType.Up;
            this.store.next(gameState);
          })));
        }
        break;
      }
    }
  }

  /**
   * 引数で渡された方向に移動可能か
   * @param direction 方向
   * @param famiconStyleGameState ファミコン風ゲームの状況 
   * @returns 
   */
  private isMovable(direction: DirectionType, famiconStyleGameState: FamiconStyleGameState): boolean {
    switch (direction) {
      case DirectionType.Down: {
        console.log(famiconStyleGameState.map.length);
        console.log(famiconStyleGameState.braveMan.position.y + 1);

        if (famiconStyleGameState.map.length <= famiconStyleGameState.braveMan.position.y + 1) {
          return false;
        }
        return famiconStyleGameState.map[famiconStyleGameState.braveMan.position.y + 1][famiconStyleGameState.braveMan.position.x];
      }
      case DirectionType.Left: {
        if (famiconStyleGameState.braveMan.position.x <= 0) {
          return false;
        }
        return famiconStyleGameState.map[famiconStyleGameState.braveMan.position.y][famiconStyleGameState.braveMan.position.x - 1];
      }
      case DirectionType.Right: {
        if (famiconStyleGameState.map[famiconStyleGameState.braveMan.position.y].length <= famiconStyleGameState.braveMan.position.x + 1) {
          return false;
        }
        return famiconStyleGameState.map[famiconStyleGameState.braveMan.position.y][famiconStyleGameState.braveMan.position.x + 1];
      }
      case DirectionType.Up: {
        if (famiconStyleGameState.braveMan.position.y <= 0) {
          return false;
        }
        return famiconStyleGameState.map[famiconStyleGameState.braveMan.position.y - 1][famiconStyleGameState.braveMan.position.x];
      }
    }
  }
}