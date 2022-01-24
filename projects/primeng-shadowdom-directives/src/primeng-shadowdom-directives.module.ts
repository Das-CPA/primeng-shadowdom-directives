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
  psdSlideMenuDirective,
  psdTieredMenuDirective,
  psdOverlayPanelDirective,
  psdSplitButtonDirective,
  psdTreeSelectDirective,
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
    psdStyleClass,
    psdConfirmPopupDirective,
    psdSlideMenuDirective,
    psdTieredMenuDirective,
    psdOverlayPanelDirective,
    psdSplitButtonDirective,
    psdTreeSelectDirective,
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
    psdConfirmPopupDirective,
    psdSlideMenuDirective,
    psdTieredMenuDirective,
    psdOverlayPanelDirective,
    psdSplitButtonDirective,
    psdTreeSelectDirective,
  ]
})
export class PrimeNGShadowDOMDirective { }