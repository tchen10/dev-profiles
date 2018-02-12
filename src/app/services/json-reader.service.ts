import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Summary} from '../models/summary';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class JsonReaderService {
  private SKILL_FILEPATH = '../assets/converted-skill.json';
  private RADAR_FILEPATH = '../assets/converted-radar.json';

  constructor(public http: HttpClient) {
  }

  readSummary(): Observable<Summary[]> {
    return this.http.get(this.SKILL_FILEPATH)
      .map(json => Summary.createFrom(json));
  }

  readRadar(): Observable<any> {
    return this.http.get(this.RADAR_FILEPATH);
  }
}
