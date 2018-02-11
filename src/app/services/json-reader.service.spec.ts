import {TestBed, inject} from '@angular/core/testing';
import {JsonReaderService} from './json-reader.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Summary} from '../models/summary';

describe('JsonReaderService', () => {
  let jsonService: JsonReaderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JsonReaderService]
    });

    jsonService = TestBed.get(JsonReaderService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([JsonReaderService], (service: JsonReaderService) => {
    const json = [
      {
        Name: 'Marcia',
        Golang: '1',
        Python: '3'
      },
      {
        Name: 'Jan',
        Golang: '2',
        Python: '4'
      }
    ];

    jsonService.readSummary().subscribe((summaries) => {
      expect(summaries).toEqual(Summary.createFrom(json));
    });

    const request = httpMock.expectOne('../assets/converted.json');
    expect(request.request.method).toBe('GET');
    request.flush(json);
  }));
});
