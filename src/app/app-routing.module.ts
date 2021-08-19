import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToyDescriptionComponent } from './toy-description/toy-description.component';
import { ToyListComponent } from './toy-list/toy-list.component';

const routes: Routes = [
  {path:'',redirectTo:'toy-list', pathMatch:'full'},
  {path:'toy-description', component:ToyDescriptionComponent},
  {path:'toy-list',component:ToyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
