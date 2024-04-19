import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FamiconStyleMapBackgroundComponentUtil } from './util/famicon-style-map-background.component.util';
import { FamiconStyleGameState } from 'src/app/domain/state/famicon-style-game-state';

/**
 * ファミコン風マップ背景コンポーネント
 */
@Component({
  selector: 'app-famicon-style-map-background',
  templateUrl: './famicon-style-map-background.component.html',
  styleUrls: ['./famicon-style-map-background.component.scss']
})
export class FamiconStyleMapBackgroundComponent implements OnChanges {
  // ファミコン風ゲームの状況
  @Input() famiconStyleGameState = new FamiconStyleGameState();
  // コンテントスタイル
  contentStyle = {};

  ngOnChanges(changes: SimpleChanges): void {
    this.contentStyle = {
      'background-image': `url(assets/images/convini.PNG)`,
    }
  }
}
