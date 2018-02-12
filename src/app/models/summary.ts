import * as _ from 'lodash';
import {ChartData} from './chart-data.model';

export class Summary {
  field: string;
  values: string[];
  stats: { [key: string]: string[] };

  static createFrom(json): Summary[] {
    const result: { [key: string]: Summary } = {};

    _.forEach(json, (entry) => {
      _.forEach(entry, (value, key) => {
        if (!result[key]) {
          result[key] = new Summary(key, [value]);
        } else {
          result[key].addValue(value);
        }
      });
    });

    delete result['Name'];

    return _.values(result);
  }

  static createChartData(summaries: Summary[]) {
    return {
      datasets: summaries.map((summary) => {
        return {
          label: summary.field,
          data: _.map(summary.stats, (value, key) => {
            return {
              x: parseInt(key, 10),
              y: value.length
            };
          })
        };
      })
    };
  }

  constructor(field: string, values: string[]) {
    this.field = field;
    this.values = values;
    this.stats = _.groupBy(this.values, Math.floor);
  }

  addValue(value: string): void {
    this.values.push(value);
    this.stats = _.groupBy(this.values, Math.floor);
  }
}
