import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CollapsingSidebarComponent } from 'src/app/components/collapsing-sidebar/collapsing-sidebar.component';
import { SearchComponent } from 'src/app/components/search/search.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { TruncatePipe } from 'src/app/pipe/truncate.pipe';
import { ShowBooksComponent } from 'src/app/components/show-books/show-books.component';
import { PerfilComponent } from 'src/app/components/perfil/perfil.component';
import { HomePageComponent } from 'src/app/components/home-page/home-page.component';



@NgModule({
  declarations: [
    HomeComponent,
    CollapsingSidebarComponent,
    TruncatePipe,
    SearchComponent,
    ShowBooksComponent,
    PerfilComponent,
    HomePageComponent

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AutocompleteLibModule,
    DragDropModule
  ]
})
export class HomeModule { }
