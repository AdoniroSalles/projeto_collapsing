import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'collapsing-sidebar',
  templateUrl: './collapsing-sidebar.component.html',
  styleUrls: ['./collapsing-sidebar.component.css']
})
export class CollapsingSidebarComponent implements OnInit {

  ativaMenu: boolean = false
  ativaSidebar: boolean = false
  hiddenMenu: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  //ativa menu lateral
  activateToogle() {
    this.ativaMenu = !this.ativaMenu
  }

  activateSidebar(){
    if(this.ativaMenu){
      this.hiddenMenu = !this.hiddenMenu
    }else{
      this.ativaSidebar = !this.ativaSidebar
    }
    
  }

}
