import { Component } from '@angular/core';
import { GameMaster } from './game-master/game-master';
import { DirectionType } from './domain/model/global/direction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // ゲームの状況
  readonly gameState$ = this.gameMaster.gameState$;

  constructor(
    // ゲームマスター
    private gameMaster: GameMaster
  ) { }

  ngOnInit() {
    // ゲームマスターにセットアップを依頼する。
    this.gameMaster.setUp();
  }

  /**
   * 会話コンテントがクリックされた時に呼ばれる。
   * ゲームマスターに会話の進行を依頼する。
   */
  onClickConversationContent() {
    this.gameMaster.advanceConversation();
  }

  /**
   * ファミコン風ゲームの移動ボタンをクリックされると呼ばれる。
   */
  onClickMoveButtonInFamiconStyleGame(directionType: DirectionType) {
    this.gameMaster.moveBraveManInFamiconStyleGame(directionType);
  }

  /**
   * ファミコン風ゲームの移動ボタンをクリックされると呼ばれる。
   */
  onClickInvestigateButtonInFamiconStyleGame() {
    this.gameMaster.investigateInFamiconStyleGame();
  }
}
