import { Component, Input } from '@angular/core';
import { FamiconStyleGameState } from 'src/app/domain/state/famicon-style-game-state';

@Component({
  selector: 'app-famicon-style-map-layer2',
  templateUrl: './famicon-style-map-layer2.component.html',
  styleUrls: ['./famicon-style-map-layer2.component.scss']
})
export class FamiconStyleMapLayer2Component {
  // ファミコン風ゲームの状況
  @Input() famiconStyleGameState = new FamiconStyleGameState();
  // スタイル
  style = { 'background-image': `url(assets/images/convini-layer2.png)` }
}
