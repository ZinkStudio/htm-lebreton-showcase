import {Directive, ElementRef, Renderer2} from '@angular/core';

import {BreakpointsService, BreakpointEvent} from 'angular-breakpoints';

@Directive({
    selector: '[htmFlexDirection]'
})
export class FlexDirectionDirective {

    constructor(private element: ElementRef, private renderer: Renderer2, private breakpointsService: BreakpointsService) {
        this.observesBreakPoint();
    }

    observesBreakPoint() {
        this.breakpointsService.changes.subscribe((event: BreakpointEvent) => {
            (event.size.width <= 992) ? this.flexDirectionColumn() : this.flexDirectionRow()
        });
    }

    flexDirectionColumn() {
        this.renderer.addClass(this.element.nativeElement, "htm-component-content-flex-column");
        this.element.nativeElement.style.display = 'flex';
        this.element.nativeElement.style.flexFlow = 'column wrap';
    }

    flexDirectionRow() {
        this.renderer.addClass(this.element.nativeElement, "htm-component-content-flex-row");
        this.element.nativeElement.style.display = 'flex';
        this.element.nativeElement.style.flexFlow = 'row wrap';
        this.element.nativeElement.style.justifyContent = 'center';
    }

}
