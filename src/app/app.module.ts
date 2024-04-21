import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversationComponent } from './ui/game-area/components/conversation/conversation.component';
import { NameComponent } from './ui/game-area/components/conversation/components/message-box/components/name/name.component';
import { ContentOfConversationComponent } from './ui/game-area/components/conversation/components/message-box/components/content-of-conversation/content-of-conversation.component';
import { GameAreaComponent } from './ui/game-area/game-area.component';
import { MessageBoxComponent } from './ui/game-area/components/conversation/components/message-box/message-box.component';
import { ConvenienceStoreComponent } from './ui/game-area/components/convenience-store/convenience-store.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversationComponent,
    NameComponent,
    ContentOfConversationComponent,
    GameAreaComponent,
    MessageBoxComponent,
    ConvenienceStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
