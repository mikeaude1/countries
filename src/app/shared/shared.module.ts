import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/aboutPage.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { ContatctPageComponent } from './pages/contatctPage/contatctPage.component';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,SidebarComponent,ContatctPageComponent,SearchBoxComponent
    ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    AboutPageComponent,HomePageComponent,SidebarComponent,ContatctPageComponent,SearchBoxComponent
  ]
})
export class SharedModule { }
