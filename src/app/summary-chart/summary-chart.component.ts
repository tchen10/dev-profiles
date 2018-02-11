import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../services/json-reader.service';
import {Summary} from '../models/summary';

@Component({
  selector: 'app-summary-chart',
  templateUrl: './summary-chart.component.html',
  styleUrls: ['./summary-chart.component.css']
})
export class SummaryChartComponent implements OnInit {
  data: { datasets: {}[] };
  options;

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit() {
    this.jsonReader.readSummary().subscribe((summaries) => {
      this.data = Summary.createChartData(summaries);
      this.options = {
        legend: {
          display: false
        }
      };
    });

  }
}
