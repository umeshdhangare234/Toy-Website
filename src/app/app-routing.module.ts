import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToyListComponent } from './toy-list/toy-list.component';
import { DollsComponent } from './dolls/dolls.component';
import { CarsComponent } from './cars/cars.component';
import { EducationalComponent } from './educational/educational.component';
import { CreativeComponent } from './creative/creative.component';
import { ElectronicComponent } from './electronic/electronic.component';
import { AnimalsComponent } from './animals/animals.component';

const routes: Routes = [
  {path:'',redirectTo:'toy-list', pathMatch:'full'},
  {path:'animals', component:AnimalsComponent},
  {path:'toy-list',component:ToyListComponent},
  {path:'dolls',component:DollsComponent},
  {path:'cars',component:CarsComponent},
  {path:'educational',component:EducationalComponent},
  {path:'action-figures',component:CreativeComponent},
  {path:'electronic',component:ElectronicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
