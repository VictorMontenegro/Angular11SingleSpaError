import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SecondComponent } from "./second-component.component";
import { SecondComponentRoutingModule } from "./second-component-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, SecondComponentRoutingModule],
  declarations: [SecondComponent],
  exports: [SecondComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SecondComponentModule {}
