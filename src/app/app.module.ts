import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { TruncatePipe } from './pipe/truncate.pipe';
import { ShowBooksComponent } from './components/show-books/show-books.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomePageComponent } from './components/home-page/home-page.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
