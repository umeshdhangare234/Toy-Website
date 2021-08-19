import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToyDescriptionComponent } from './toy-description/toy-description.component';

const routes: Routes = [
  {path:'toy-description', component:ToyDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
