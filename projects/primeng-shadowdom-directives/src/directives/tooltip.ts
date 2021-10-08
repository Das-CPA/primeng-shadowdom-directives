import { Directive, Host, Optional, Self } from "@angular/core";
import { Tooltip } from "primeng/tooltip";
import { ConnectedOverlayScrollHandler } from "../connectedoverlayscrollhandler";

@Directive({
  selector: '[psdTooltip]',
})
export class psdTooltipDirective {
  constructor(
    @Host() @Self() @Optional() private readonly hostEl: Tooltip
  ) {

    // default is 'body' which appends the tooltip element at the bottom of the page
    // within the ShadowDom we want to default to appending to the current element
    (hostEl as any).appendTo = 'target';

    hostEl.bindScrollListener = () => {
      if (!hostEl.scrollHandler) {
        hostEl.scrollHandler = new ConnectedOverlayScrollHandler(hostEl.el.nativeElement, () => {
          if (hostEl.container) {
            hostEl.hide();
          }
        });
      }

      hostEl.scrollHandler.bindScrollListener();
    }
  }
}