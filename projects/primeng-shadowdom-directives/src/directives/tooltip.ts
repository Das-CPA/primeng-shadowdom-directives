import { Directive, ElementRef, Host, Optional, Self } from "@angular/core";
import { Tooltip } from "primeng/tooltip";
import { ConnectedOverlayScrollHandler } from "../connectedoverlayscrollhandler";

@Directive({
  selector: '[psdTooltip]',
})
export class psdTooltipDirective {
  constructor(
    elementRef: ElementRef,
    @Host() @Self() @Optional() private readonly hostEl: Tooltip
  ) {

    // default is 'body' which appends the tooltip element at the bottom of the page
    // within the ShadowDom we want to default to appending to the current element
    // (hostEl as any).appendTo = 'target';

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

    const parentCreate = hostEl.create;
    const parentRemove = hostEl.remove;

    function create() {
      if (hostEl.getOption('appendTo') === 'body') {
        let parent = elementRef.nativeElement as HTMLElement;
        while (parent.parentElement)
          parent = parent.parentElement;

        hostEl._tooltipOptions.appendTo = parent;
        parentCreate.call(hostEl);
        hostEl._tooltipOptions.appendTo = "body";
      }
      else
        parentCreate.call(hostEl);
    }

    function remove() {
      if (hostEl.getOption('appendTo') === 'body') {
        let parent = elementRef.nativeElement as HTMLElement;
        while (parent.parentElement)
          parent = parent.parentElement;

        hostEl._tooltipOptions.appendTo = parent;
        parentRemove.call(hostEl);
        hostEl._tooltipOptions.appendTo = "body";
      }
      else
        parentRemove.call(hostEl);
    }

    hostEl.create = create;
    hostEl.remove = remove;
  }
}
