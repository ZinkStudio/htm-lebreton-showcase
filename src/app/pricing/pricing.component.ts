import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'htm-pricing',
    templateUrl: './pricing.component.html',
    styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

    list = [
        1, 2, 3, 4, 5,
    ];

    constructor() {}

    ngOnInit() {}

}
