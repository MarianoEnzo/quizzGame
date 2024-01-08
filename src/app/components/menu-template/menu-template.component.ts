import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Settings } from 'src/app/models/settings.model';
@Component({
  selector: 'app-menu-template',
  templateUrl: './menu-template.component.html',
  styleUrls: ['./menu-template.component.css']
})
export class MenuTemplateComponent implements OnInit {
  @Input() settings:any ;
  constructor() { }

  ngOnInit(): void {
    console.log('Holaaa')
    console.log('Settings',this.settings)
  }

}
