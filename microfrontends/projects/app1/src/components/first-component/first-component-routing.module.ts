import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './first-component.component';


const firstComponentRoutes: Routes = [
  {
    path: "",
    component: FirstComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(firstComponentRoutes)
  ],
  exports: [RouterModule]
})
export class FirstComponentRoutingModule { }
