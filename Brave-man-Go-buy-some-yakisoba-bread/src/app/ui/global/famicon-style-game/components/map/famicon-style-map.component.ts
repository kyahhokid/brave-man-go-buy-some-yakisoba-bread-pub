import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FamiconStyleGameState } from 'src/app/domain/state/famicon-style-game-state';
import { FamiconStyleMapComponentUtil } from './util/famicon-style-map.component.util';

/**
 * ファミコン風マップコンポーネント
 */
@Component({
  selector: 'app-famicon-style-map',
  templateUrl: './famicon-style-map.component.html',
  styleUrls: ['./famicon-style-map.component.scss'],
})
export class FamiconStyleMapComponent implements OnChanges {
  // ファミコン風ゲームの状況
  @Input() famiconStyleGameState = new FamiconStyleGameState();
  // キャラクタースタイル
  characterStyle = {};
  // 背景スタイル
  backgroundStyle = {};
  // レイヤー２スタイル
  layer2Style = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.characterStyle = {
      'top': `${this.famiconStyleGameState.braveMan.position.y * this.famiconStyleGameState.numberOfPxPerCoordinate - 30}px`,
      'left': `${FamiconStyleMapComponentUtil.getLeftForBraveMan(this.famiconStyleGameState)}px`,
    };
    this.backgroundStyle = {
      'clip-path': `inset(0px ${FamiconStyleMapComponentUtil.getLeftForMap(this.famiconStyleGameState)}px 0px ${-1 * FamiconStyleMapComponentUtil.getLeftForMap(this.famiconStyleGameState)}px)`,
      'margin-left': `${FamiconStyleMapComponentUtil.getLeftForMap(this.famiconStyleGameState)}px`,
    }
    this.layer2Style = {
      'clip-path': `inset(0px ${FamiconStyleMapComponentUtil.getLeftForMap(this.famiconStyleGameState)}px 0px  ${-1 * FamiconStyleMapComponentUtil.getLeftForMap(this.famiconStyleGameState)}px)`,
      'margin-left': `${FamiconStyleMapComponentUtil.getLeftForMap(this.famiconStyleGameState)}px`,
    }
  }

  onClickConversationContent() { }
}
