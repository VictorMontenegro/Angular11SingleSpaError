import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app2-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
})
export class AppComponent {
  constructor(private _router: Router) {}

  public navigateToFirstComponent() {
    return this._router.navigate(["/first-component"]);
  }

  public navigateToSecondComponent() {
    return this._router.navigate(["/second-component"]);
  }
}
