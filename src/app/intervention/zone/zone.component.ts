import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'htm-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.css']
})
export class ZoneComponent implements OnInit {
  
  latitude: number = 43.744447;
  longitude: number = 5.080859;
  zoom: number = 10;
  radius: number = 30000;
  opacity: number = 0.5;
  label: string = 'S';
  title: string = 'Senas';
  color: string = 'blue';
  lock: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
