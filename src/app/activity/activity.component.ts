import {Component, OnInit} from '@angular/core';


@Component({
    selector: 'htm-activity',
    templateUrl: './activity.component.html',
    styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

    list = [
        1, 2, 3, 4, 5,
    ];

    constructor() {}

    ngOnInit() {}

}
