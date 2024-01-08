import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { PlayMenuComponent } from './pages/play-menu/play-menu.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { QuestionsABMComponent } from './pages/questions-abm/questions-abm.component';
import { GameComponent } from './pages/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MenuTemplateComponent,
    PlayMenuComponent,
    LeaderboardComponent,
    QuestionsABMComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
