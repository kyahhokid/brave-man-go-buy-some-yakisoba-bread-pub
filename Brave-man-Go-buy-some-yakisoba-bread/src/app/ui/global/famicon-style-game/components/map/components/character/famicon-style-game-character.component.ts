import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CharacterDirectionType } from 'src/app/domain/model/famicon-style-game/character-direction-type';
import { FamiconStyleGameCharacterComponentUtil } from './util/famicon-style-game-character.component.util';

/**
 * ファミコン風ゲームキャラクターコンポーネント
 */
@Component({
  selector: 'app-famicon-style-game-character',
  templateUrl: './famicon-style-game-character.component.html',
  styleUrls: ['./famicon-style-game-character.component.scss']
})
export class FamiconStyleGameCharacterComponent implements OnChanges {
  // キャラクター向き
  @Input() characterDirection = CharacterDirectionType.Up;
  style = {};

  ngOnChanges(changes: SimpleChanges): void {
    const backgroundPosition = FamiconStyleGameCharacterComponentUtil.getBackgroundPosition(this.characterDirection);
    // スタイル
    this.style = {
      'background-image': `url(assets/images/alen.png)`,
      'background-position-x': `${backgroundPosition.x}px`,
      'background-position-y': `${backgroundPosition.y}px`,
    };
  }
}
