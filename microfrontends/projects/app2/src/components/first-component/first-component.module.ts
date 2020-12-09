import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FirstComponent } from "./first-component.component";
import { FirstComponentRoutingModule } from "./first-component-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, FirstComponentRoutingModule],
  declarations: [FirstComponent],
  exports: [FirstComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FirstComponentModule {}
