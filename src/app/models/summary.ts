import * as _ from 'lodash';

export class Summary {
  field: string;
  values: string[];

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

  constructor(field: string, values: string[]) {
    this.field = field;
    this.values = values;
  }

  addValue(value: string): void {
    this.values.push(value);
  }
}
