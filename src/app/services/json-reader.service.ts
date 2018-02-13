import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';
import {Summary} from '../models/summary';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';

@Injectable()
export class JsonReaderService {
  private SKILL_FILEPATH = `${environment.pathToAssets}/converted-skill.json`;
  private RADAR_FILEPATH = `${environment.pathToAssets}/converted-radar.json`;

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
