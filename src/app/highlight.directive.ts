import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: '[highlight]',
})
export class HighlightDirective {
    @Input() highlight: string;

    constructor(private element: ElementRef<HTMLElement>) {}

    ngOnInit() {
        this.element.nativeElement.style.backgroundColor =
            this.highlight || 'red';
        const ne = this.element.nativeElement;
        ne.addEventListener('mouseover', () => {
            this.element.nativeElement.style.backgroundColor = 'blue';
        });
    }
}
