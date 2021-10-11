import { Directive, Host, Optional, Self } from "@angular/core";
import { InputMask } from 'primeng/inputmask';

@Directive({
  selector: '[psdInputMask]',
})
export class psdInputMask {
  constructor(
    @Host() @Self() @Optional() private readonly hostEl: InputMask
  ) {

    hostEl.caret = (first?: number, last?: number) => {
        let range, begin, end;
        if (
            !this.hostEl.inputViewChild.nativeElement.offsetParent || 
            this.hostEl.inputViewChild.nativeElement.ownerDocument.activeElement.shadowRoot ? 
                this.hostEl.inputViewChild.nativeElement.ownerDocument.activeElement.shadowRoot.activeElement !== this.hostEl.inputViewChild.nativeElement :
                this.hostEl.inputViewChild.nativeElement.ownerDocument.activeElement.activeElement !== this.hostEl.inputViewChild.nativeElement
        ) {
            return;
        }

        if (typeof first == 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.hostEl.inputViewChild.nativeElement.setSelectionRange) {
                this.hostEl.inputViewChild.nativeElement.setSelectionRange(begin, end);
            }
            else if (this.hostEl.inputViewChild.nativeElement['createTextRange']) {
                range = this.hostEl.inputViewChild.nativeElement['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.hostEl.inputViewChild.nativeElement.setSelectionRange) {
                begin = this.hostEl.inputViewChild.nativeElement.selectionStart;
                end = this.hostEl.inputViewChild.nativeElement.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    }

    /*
        caret(first, last) {
        let range, begin, end;
        if (!this.inputViewChild.nativeElement.offsetParent || this.inputViewChild.nativeElement !== this.inputViewChild.nativeElement.ownerDocument.activeElement) {
            return;
        }
        if (typeof first == 'number') {
            begin = first;
            end = (typeof last === 'number') ? last : begin;
            if (this.inputViewChild.nativeElement.setSelectionRange) {
                this.inputViewChild.nativeElement.setSelectionRange(begin, end);
            }
            else if (this.inputViewChild.nativeElement['createTextRange']) {
                range = this.inputViewChild.nativeElement['createTextRange']();
                range.collapse(true);
                range.moveEnd('character', end);
                range.moveStart('character', begin);
                range.select();
            }
        }
        else {
            if (this.inputViewChild.nativeElement.setSelectionRange) {
                begin = this.inputViewChild.nativeElement.selectionStart;
                end = this.inputViewChild.nativeElement.selectionEnd;
            }
            else if (document['selection'] && document['selection'].createRange) {
                range = document['selection'].createRange();
                begin = 0 - range.duplicate().moveStart('character', -100000);
                end = begin + range.text.length;
            }
            return { begin: begin, end: end };
        }
    } 
    */
  }
}