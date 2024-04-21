import { Component } from '@angular/core';
import { GameMaster } from './game-master/game-master';

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
}
