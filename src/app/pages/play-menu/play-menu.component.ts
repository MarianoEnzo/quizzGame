import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/models/settings.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-play-menu',
  templateUrl: './play-menu.component.html',
  styleUrls: ['./play-menu.component.css']
})
export class PlayMenuComponent implements OnInit {
  public settings:Settings={
    tittle : 'Modo de juego', 
    buttons : [
      {
        text : 'Normal',
        action : () => {
          this.router.navigate(['/game', 'normal']);
        },
        icon : 'fa-solid fa-gamepad'
      },
      {
        text : 'Por tematica',
        action : () => {
          this.router.navigate(['/game/theme']);
        },
        icon : 'fa-solid fa-gamepad'
      },
      {
        text : 'Contrarreloj',
        action : () => {
          this.router.navigate(['/game/clock']);
        },
        icon : 'fa-solid fa-gamepad'
      }
  ],
    arrowBack : '/home'
  }
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
