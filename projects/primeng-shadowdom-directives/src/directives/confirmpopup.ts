import { Directive, Host, Optional, Self } from "@angular/core";
import { ConfirmPopup } from "primeng/confirmpopup";
import { ConnectedOverlayScrollHandler } from "../connectedoverlayscrollhandler";

@Directive({
    selector: '[psdConfirmPopup]',
})
export class psdConfirmPopupDirective {

    constructor(
        @Host() @Self() @Optional() private readonly hostEl: ConfirmPopup
    ) {
        hostEl.onAnimationStart = (event) => {
            if (event.toState === 'open') {
                this.hostEl.container = event.element;
                // document.body.appendChild(this.container);
                this.hostEl.align();
                this.hostEl.bindListeners();
            }
        }

        hostEl.bindScrollListener = () => {
            if (!this.hostEl.scrollHandler) {
                this.hostEl.scrollHandler = new ConnectedOverlayScrollHandler(this.hostEl.confirmation.target, () => {
                    if (this.hostEl.visible) {
                        this.hostEl.hide();
                    }
                });
            }
            this.hostEl.scrollHandler.bindScrollListener();
        }
    }

}