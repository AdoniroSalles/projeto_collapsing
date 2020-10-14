import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsing-sidebar',
  templateUrl: './collapsing-sidebar.component.html',
  styleUrls: ['./collapsing-sidebar.component.css']
})
export class CollapsingSidebarComponent implements OnInit {

  ativaMenu: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

  //ativa menu lateral
  activateToogle() {
    this.ativaMenu = !this.ativaMenu
  }

}
