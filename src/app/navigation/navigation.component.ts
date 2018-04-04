import {Component} from '@angular/core';

import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

import {BreakpointsService, BreakpointEvent} from 'angular-breakpoints';

@Component({
    selector: 'htm-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
    
    title = 'Lebreton';

    toogleRowMenu = false;
    toogleMatMenu = false;

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private breakpointsService: BreakpointsService) {

        iconRegistry.addSvgIcon('more_vert', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/more_vert.svg'));
        this.observesBreakPoint();
    }

    observesBreakPoint() {
        this.breakpointsService.changes.subscribe((event: BreakpointEvent) => {
            this.toogleRowMenu = !(event.size.width <= 992);
            this.toogleMatMenu =  (event.size.width <= 992);
        });
    }

}