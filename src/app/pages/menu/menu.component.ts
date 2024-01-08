import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuOptions } from 'src/app/models/menuOptions.model';
import { Settings } from 'src/app/models/settings.model';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public menuOptions : menuOptions[] = [
    {
      text : 'Jugar',
      action : this.playAction.bind(this),
      icon : 'fa-solid fa-gamepad'
    },
    {
      text : 'Puntuaciones',
      action : this.puntuacionesAction.bind(this),
      icon : 'fa-solid fa-trophy'
    },
    {
      text : 'Crea tu pregunta',
       action : this.preguntasAction.bind(this),
      icon : 'fa-solid fa-pen-to-square'
    }
  ]
  public settings:Settings={
    tittle : 'Probando 1 2 ', 
    buttons : this.menuOptions,
    arrowBack : '/home' 
  };
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  playAction(){
    this.router.navigate(['/play']);
  }
  puntuacionesAction(){
    this.router.navigate(['/leaderboard']);
  }
  preguntasAction(){
    this.router.navigate(['/questionsABM']);
  }
}
