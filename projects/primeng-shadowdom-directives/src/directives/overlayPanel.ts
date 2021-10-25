import { Directive, Host, Optional, Self } from "@angular/core";
import { OverlayPanel } from "primeng/overlaypanel";
import { ConnectedOverlayScrollHandler } from "../connectedoverlayscrollhandler";
import { DomHandler } from "../domhandler";

@Directive({
    selector: '[psdOverlayPanel]',
})
export class psdOverlayPanel {

    constructor(
        @Host() @Self() @Optional() private readonly hostEl: OverlayPanel
    ) {
        hostEl.onAnimationStart = (event) => {
            if (event.toState === 'open') {
                this.hostEl.container = event.element;
                // document.body.appendChild(this.container);
                this.hostEl.align();
                this.hostEl.bindDocumentClickListener();
                this.hostEl.bindScrollListener();
                this.hostEl.bindDocumentResizeListener();
            }
        }

        hostEl.bindDocumentClickListener = () => {
            if (!this.hostEl.documentClickListener) {
                let documentEvent = DomHandler.isIOS() ? 'touchstart' : 'click';
                const documentTarget = this.hostEl.el ? this.hostEl.el.nativeElement.ownerDocument : document;
                this.hostEl.documentClickListener = this.hostEl.renderer.listen(documentTarget, documentEvent, (ev) => {
                    let targetElement = this.hostEl.target as HTMLElement;
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
                this.hostEl.scrollHandler = new ConnectedOverlayScrollHandler(this.hostEl.target, () => {
                    if (this.hostEl.overlayVisible) {
                        this.hostEl.hide();
                    }
                });
            }
            this.hostEl.scrollHandler.bindScrollListener();
        }
    }

}