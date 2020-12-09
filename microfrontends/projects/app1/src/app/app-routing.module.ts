import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmptyRouteComponent } from "./empty-route/empty-route.component";

const DEFAULT_ROUTE = "";

const routes: Routes = [
  {
    path: 'first-component',
    loadChildren: () =>
      import('../components/first-component/first-component.module').then(
        (m) => m.FirstComponentModule
      ),
  },
  {
    path: 'second-component',
    loadChildren: () =>
      import('../components/second-component/second-component.module').then(
        (m) => m.SecondComponentModule
      ),
  },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/app1" }],
})
export class AppRoutingModule {}
