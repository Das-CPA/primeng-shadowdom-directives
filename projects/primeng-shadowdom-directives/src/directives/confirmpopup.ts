import { Directive, Host, Optional, Self } from "@angular/core";
import { ConfirmPopup } from "primeng/confirmpopup";
import { ConnectedOverlayScrollHandler } from "../connectedoverlayscrollhandler";
import { DomHandler } from "../domhandler";

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

        hostEl.bindDocumentClickListener = () => {
            if (!this.hostEl.documentClickListener) {
                let documentEvent = DomHandler.isIOS() ? 'touchstart' : 'click';
                const documentTarget = this.hostEl.el ? this.hostEl.el.nativeElement.ownerDocument : document;
                this.hostEl.documentClickListener = this.hostEl.renderer.listen(documentTarget, documentEvent, (ev) => {
                    let targetElement = this.hostEl.confirmation.target as HTMLElement;
                    const eventTarget = ev.composedPath()[0];
                    if (this.hostEl.container !== eventTarget && !this.hostEl.container.contains(eventTarget) &&
                        targetElement !== eventTarget && !targetElement.contains(eventTarget)) {
                        this.hostEl.hide();
                    }
                });
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