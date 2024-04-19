import { Component } from '@angular/core';

@Component({
  selector: 'app-famicon-style-map-layer2',
  templateUrl: './famicon-style-map-layer2.component.html',
  styleUrls: ['./famicon-style-map-layer2.component.scss']
})
export class FamiconStyleMapLayer2Component {
  // スタイル
  style = { 'background-image': `url(assets/images/convini-layer2.png)` }
}
