import {Component, OnInit} from '@angular/core';
import {JsonReaderService} from '../services/json-reader.service';
import {Summary} from '../models/summary';
import {SummaryTableRow} from './summary-table-row.model';

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.css']
})
export class SummaryTableComponent implements OnInit {
  summaries: SummaryTableRow[];
  cols: any;

  constructor(private jsonReader: JsonReaderService) {
  }

  ngOnInit() {
    this.jsonReader.readSummary().subscribe(summaries => {
      this.summaries = SummaryTableRow.createFrom(summaries);
    });

    this.cols = [
      {field: 'field', header: 'Skill'},
      {field: 'rankOne', header: 'Want to Learn'},
      {field: 'rankTwo', header: 'Dabble'},
      {field: 'rankThree', header: 'Good'},
      {field: 'rankFour', header: 'Pretty Great'},
      {field: 'rankFive', header: 'Ninja'}
    ];
  }
}
