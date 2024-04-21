import { Component, Input } from '@angular/core';

/**
 * 会話内容コンポーネント
 */
@Component({
  selector: 'app-content-of-conversation',
  templateUrl: './content-of-conversation.component.html',
  styleUrls: ['./content-of-conversation.component.scss']
})
export class ContentOfConversationComponent {
  // 会話内容
  @Input() contentOfConversation = '';

}
