import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SummaryTableComponent} from './summary-table.component';
import {JsonReaderService} from '../services/json-reader.service';
import {Summary} from '../models/summary';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {TableModule} from 'primeng/table';
import * as _ from 'lodash';

describe('SummaryTableComponent', () => {
  let component: SummaryTableComponent;
  let fixture: ComponentFixture<SummaryTableComponent>;
  let mockJsonService: JsonReaderService;
  let element;

  beforeEach(async(() => {
    mockJsonService = new JsonReaderService(null);

    TestBed.configureTestingModule({
      imports: [
        TableModule
      ],
      declarations: [SummaryTableComponent],
      providers: [
        {provide: JsonReaderService, useValue: mockJsonService}
      ]
    }).compileComponents();

    spyOn(mockJsonService, 'readSummary').and.returnValue(Observable.of([
      new Summary('Golang', []),
      new Summary('Python', [])
    ]));
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryTableComponent);
    component = fixture.componentInstance;
    element = fixture .nativeElement;
    fixture.detectChanges();
  });

  it('should have five headers', () => {
    const headers = _.values(element.querySelectorAll('th'));
    expect(headers.map(header => header.textContent.trim()))
      .toEqual([
        'Skill',
        'Want to Learn',
        'Dabble',
        'Good',
        'Pretty Great',
        'Ninja'
      ]);
  });
});
