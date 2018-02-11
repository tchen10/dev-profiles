import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../services/json-reader.service';
import {Summary} from '../models/summary';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit {
  summaries: Summary[];

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit() {
    this.jsonReader.readSummary().subscribe(summaries => {
      this.summaries = summaries;
    });
  }

}
