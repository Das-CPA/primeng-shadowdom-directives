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