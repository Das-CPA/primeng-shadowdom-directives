import { NgModule } from "@angular/core";
import {
  psdCalendarDirective,
  psdDropdownDirective,
  psdMenuDirective,
  psdMultiSelectDirective,
  psdTooltipDirective,
  psdAutoCompleteDirective,
  psdCascadeSelectDirective,
  psdColorPickerDirective,
  psdMegaMenuDirective,
  psdMenuBarDirective,
  psdInputMask,
} from "./directives";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { psdConfirmPopupDirective } from "./directives/confirmpopup";
import { psdStyleClass } from "./directives/styleclass";

@NgModule({
  declarations: [
    psdDropdownDirective,
    psdCalendarDirective,
    psdTooltipDirective,
    psdMultiSelectDirective,
    psdMenuDirective,
    psdAutoCompleteDirective,
    psdCascadeSelectDirective,
    psdColorPickerDirective,
    psdMegaMenuDirective,
    psdMenuBarDirective,
    psdInputMask,
    psdConfirmPopupDirective,
    psdStyleClass
  ],
  imports: [
    BrowserAnimationsModule
  ],
  exports: [
    psdDropdownDirective,
    psdCalendarDirective,
    psdTooltipDirective,
    psdMultiSelectDirective,
    psdMenuDirective,
    psdAutoCompleteDirective,
    psdCascadeSelectDirective,
    psdColorPickerDirective,
    psdMegaMenuDirective,
    psdMenuBarDirective,
    psdInputMask,
    psdConfirmPopupDirective,
    psdStyleClass
  ]
})
export class PrimeNGShadowDOMDirective { }