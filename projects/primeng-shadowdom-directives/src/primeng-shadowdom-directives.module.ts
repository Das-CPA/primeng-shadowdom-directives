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
import { psdOverlayPanel } from "./directives/overlayPanel";

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
    psdStyleClass,
    psdOverlayPanel
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
    psdStyleClass,
    psdOverlayPanel
  ]
})
export class PrimeNGShadowDOMDirective { }