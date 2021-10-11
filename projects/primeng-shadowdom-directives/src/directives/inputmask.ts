import { Directive, Host, Optional, Self } from "@angular/core";
import { InputMask } from 'primeng/inputmask';

@Directive({
  selector: '[psdInputMask]',
})
export class psdDropdownDirective {
  constructor(
    @Host() @Self() @Optional() private readonly hostEl: InputMask
  ) {

    hostEl.caret = (first?: number, last?: number) => {
        let range, begin, end;
        if (
            !this.hostEl.el.nativeElement.offsetParent || 
            this.hostEl.el.nativeElement.ownerDocument.activeElement.shadowRoot ? 
                this.hostEl.el.nativeElement.ownerDocument.activeElement.shadowRoot.activeElement !== this.hostEl.el.nativeElement :
                this.hostEl.el.nativeElement.ownerDocument.activeElement.activeElement !== this.hostEl.el.nativeElement
        ) {
            return;
        }

        if (typeof first == 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.hostEl.el.nativeElement.setSelectionRange) {
                this.hostEl.el.nativeElement.setSelectionRange(begin, end);
            }
            else if (this.hostEl.el.nativeElement['createTextRange']) {
                range = this.hostEl.el.nativeElement['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.hostEl.el.nativeElement.setSelectionRange) {
                begin = this.hostEl.el.nativeElement.selectionStart;
                end = this.hostEl.el.nativeElement.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    }
    
  }
}