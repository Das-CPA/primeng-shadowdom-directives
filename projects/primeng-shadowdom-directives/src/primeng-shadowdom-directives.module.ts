import { NgModule } from "@angular/core";
import {
  psdCalendarDirective,
  psdDropdownDirective,
  psdMultiSelectDirective,
  psdAutoCompleteDirective,
  psdCascadeSelectDirective,
  psdMegaMenuDirective,
  psdMenuBarDirective,
  psdInputMask,
  psdOverlayPanelDirective,
  psdTreeSelectDirective,
  psdPaginatorDirective,
} from "./directives";
import { psdConfirmPopupDirective } from "./directives/confirmpopup";
import { psdStyleClass } from "./directives/styleclass";
import { DomHandler } from 'primeng/dom'
import { psdDasTooltipDirective } from "./directives/tooltip";

DomHandler.getScrollableParents = (element: any) => {
  let scrollableParents = [];

  if (element) {
    let parents = DomHandler.getParents(element).filter(item => !(item instanceof ShadowRoot));
    const overflowRegex = /(auto|scroll)/;
    const overflowCheck = (node: any) => {
      let styleDeclaration = window['getComputedStyle'](node, null);
      return overflowRegex.test(styleDeclaration.getPropertyValue('overflow')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowX')) || overflowRegex.test(styleDeclaration.getPropertyValue('overflowY'));
    };

    for (let parent of parents) {
      let scrollSelectors = parent.nodeType === 1 && parent.dataset['scrollselectors'];
      if (scrollSelectors) {
        let selectors = scrollSelectors.split(',');
        for (let selector of selectors) {
          let el = DomHandler.findSingle(parent, selector);
          if (el && overflowCheck(el)) {
            scrollableParents.push(el);
          }
        }
      }

      if (parent.nodeType !== 9 && overflowCheck(parent)) {
        scrollableParents.push(parent);
      }
    }
  }

  return scrollableParents;
}

@NgModule({
  declarations: [
    psdDropdownDirective,
    psdCalendarDirective,
    psdMultiSelectDirective,
    psdAutoCompleteDirective,
    psdCascadeSelectDirective,
    psdMegaMenuDirective,
    psdMenuBarDirective,
    psdInputMask,
    psdConfirmPopupDirective,
    psdStyleClass,
    psdConfirmPopupDirective,
    psdOverlayPanelDirective,
    psdTreeSelectDirective,
    psdPaginatorDirective,
    psdDasTooltipDirective
  ],
  exports: [
    psdDropdownDirective,
    psdCalendarDirective,
    psdMultiSelectDirective,
    psdAutoCompleteDirective,
    psdCascadeSelectDirective,
    psdMegaMenuDirective,
    psdMenuBarDirective,
    psdInputMask,
    psdConfirmPopupDirective,
    psdStyleClass,
    psdConfirmPopupDirective,
    psdOverlayPanelDirective,
    psdTreeSelectDirective,
    psdPaginatorDirective,
    psdDasTooltipDirective
  ]
})
export class PrimeNGShadowDOMDirective { }