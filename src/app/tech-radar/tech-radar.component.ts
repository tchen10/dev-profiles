import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../services/json-reader.service';

const createRadar = require('../../assets/radar');

@Component({
  selector: 'app-tech-radar',
  templateUrl: './tech-radar.component.html',
  styleUrls: ['./tech-radar.component.css']
})
export class TechRadarComponent implements OnInit {
  radarConfig = {
    svg_id: 'radar',
    width: 1500,
    height: 1000,
    colors: {
      background: '#fff',
      grid: '#bbb',
      inactive: '#ddd'
    },
    title: 'BC Practice Tech Radar - February 2018',
    quadrants: [
      {name: 'Platforms'}, // bottom right - 0
      {name: 'Infrastructure'}, // bottom left - 1
      {name: 'Languages & Frameworks'}, // top left - 2
      {name: 'Techniques'} // top right - 3
    ],
    rings: [
      {name: 'ADOPT', color: '#93c47d'}, // 0
      {name: 'TRIAL', color: '#93d2c2'}, // 1
      {name: 'ASSESS', color: '#fbdb84'}, // 2
      {name: 'HOLD', color: '#efafa9'} // 3
    ],
    print_layout: true,
    entries: []
  };

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit() {
    this.jsonReader.readRadar().subscribe(radarEntries => {
      this.radarConfig.entries = radarEntries;
      createRadar(this.radarConfig);
    });
  }
}
