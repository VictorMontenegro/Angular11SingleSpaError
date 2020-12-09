import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second-component.component';


const secondComponentRoutes: Routes = [
  {
    path: "",
    component: SecondComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(secondComponentRoutes)
  ],
  exports: [RouterModule]
})
export class SecondComponentRoutingModule { }
