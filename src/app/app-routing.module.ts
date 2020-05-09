import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmcheckinComponent } from './components/confirmcheckin/confirmcheckin.component';
import { ShowcheckinComponent } from './components/showcheckin/showcheckin.component';
import { StartcheckinComponent } from './components/startcheckin/startcheckin.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  },
  {
    path:'showcheckin',
    component:ShowcheckinComponent
  },
  {
    path:'startcheckin/:id',
    component:StartcheckinComponent
  },
  {
    path:'confirmcheckin',
    component:ConfirmcheckinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
