import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstComponent } from "./first-component.component";

const firstComponentRoutes: Routes = [
  {
    path: "",
    component: FirstComponent,
    // path: "app2/first-component",
    // component: FirstComponent,
    // data: {
    //   reset: true,
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(firstComponentRoutes)],
  exports: [RouterModule],
})
export class FirstComponentRoutingModule {}
