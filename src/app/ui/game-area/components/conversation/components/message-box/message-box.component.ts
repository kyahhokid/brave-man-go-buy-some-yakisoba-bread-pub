import { Component, Input } from '@angular/core';
import { Conversation } from 'src/app/domain/model/conversation/conversation';

/**
 * メッセージボックスコンポーネント
 */
@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent {
  // 会話
  @Input() conversation = new Conversation('', '', null);

}
