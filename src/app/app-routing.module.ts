import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './shared/pages/aboutPage/aboutPage.component';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { ContatctPageComponent } from './shared/pages/contatctPage/contatctPage.component';

const routes: Routes =[
 /* {
  path:'',
  component: HomePageComponent,
},*/
  {
  path:'about',
  component: AboutPageComponent,
},
  {
  path:'contact',
  component: ContatctPageComponent,
},
  {
  path:'countries',
  loadChildren: ()=>import('./countries/countries.module').then(m => m.CountriesModule)
},
{
  path:'**',
  redirectTo:'countries'
}
]
@NgModule({
  imports:[
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
