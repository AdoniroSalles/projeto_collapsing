import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CollapsingSidebarComponent } from 'src/app/components/collapsing-sidebar/collapsing-sidebar.component';
import { ShowBooksComponent } from 'src/app/components/show-books/show-books.component';
import { PerfilComponent } from 'src/app/components/perfil/perfil.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';

const routes: Routes = [
  { 
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'info-book',
        component: ShowBooksComponent
      },
      {
        path: '',
        component: HomePageComponent
      }
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
