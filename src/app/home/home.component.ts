import {Component, OnInit} from '@angular/core';

import {Slogan,SLOGANS} from './slogan';

@Component({
    selector: 'htm-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    private slogans: Slogan[];
    
    constructor() {}

    ngOnInit() {
        this.slogans = SLOGANS;
    }

}
