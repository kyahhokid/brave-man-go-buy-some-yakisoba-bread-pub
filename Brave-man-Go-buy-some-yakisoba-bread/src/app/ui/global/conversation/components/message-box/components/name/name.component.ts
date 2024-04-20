import { Component, Input } from '@angular/core';

/**
 * 名前コンポーネント
 */
@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent {
  // 名前
  @Input() name = '';
}
