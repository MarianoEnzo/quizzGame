import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { PlayMenuComponent } from './pages/play-menu/play-menu.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { QuestionsABMComponent } from './pages/questions-abm/questions-abm.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: MenuComponent},
    {path: 'play', component: PlayMenuComponent},
    {path: 'leaderboard', component: LeaderboardComponent},
    {path: 'questionsABM', component: QuestionsABMComponent},
    {path: 'game/:mode', component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
