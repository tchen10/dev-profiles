import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Summary} from '../models/summary';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JsonReaderService {
  private JSON_FILEPATH = '../assets/converted.json';

  constructor(public http: HttpClient) {
  }

  readSummary(): Observable<Summary[]> {
    return this.http.get(this.JSON_FILEPATH)
      .map(json => Summary.createFrom(json));
  }
}
