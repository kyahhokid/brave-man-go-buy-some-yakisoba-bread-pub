import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationComponent } from './ui/game-area/components/conversation/conversation.component';
import { NameComponent } from './ui/game-area/components/conversation/components/message-box/components/name/name.component';
import { ContentOfConversationComponent } from './ui/game-area/components/conversation/components/message-box/components/content-of-conversation/content-of-conversation.component';
import { GameAreaComponent } from './ui/game-area/game-area.component';
import { MessageBoxComponent } from './ui/game-area/components/conversation/components/message-box/message-box.component';
import { FamiconStyleGameComponent } from './ui/global/famicon-style-game/famicon-style-game.component';
import { FamiconStyleMapComponent } from './ui/global/famicon-style-game/components/map/famicon-style-map.component';
import { FamiconStyleMapBackgroundComponent } from './ui/global/famicon-style-game/components/map/components/background/famicon-style-map-background.component';
import { FamiconStyleGameControllerComponent } from './ui/global/famicon-style-game/components/controller/famicon-style-game-controller/famicon-style-game-controller.component';
import { FamiconStyleGameCharacterComponent } from './ui/global/famicon-style-game/components/map/components/character/famicon-style-game-character.component';
import { FamiconStyleMapLayer2Component } from './ui/global/famicon-style-game/components/map/components/famicon-style-map-layer2/famicon-style-map-layer2.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    NameComponent,
    ContentOfConversationComponent,
    GameAreaComponent,
    MessageBoxComponent,
    FamiconStyleGameComponent,
    FamiconStyleMapComponent,
    FamiconStyleMapBackgroundComponent,
    FamiconStyleGameControllerComponent,
    FamiconStyleGameCharacterComponent,
    FamiconStyleMapLayer2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
