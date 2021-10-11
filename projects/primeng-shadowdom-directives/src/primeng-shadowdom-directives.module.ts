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
    psdInputMask
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
    psdInputMask
  ]
})
export class PrimeNGShadowDOMDirective { }