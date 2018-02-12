import {Summary} from '../models/summary';
import * as _ from 'lodash';

export class SummaryChartData {
  readonly datasets: ChartDataSet[];

  constructor(datasets: ChartDataSet[]) {
    this.datasets = datasets;
  }

  static createChartData(summaries: Summary[]): SummaryChartData {
    const datasets = summaries.map((summary) => {
      const valuesByRank = _.groupBy(summary.values, Math.floor);
      const dataXY = _.map(valuesByRank, (value, key) => {
        return new ChartDataXY(value.length, parseInt(key, 10));
      });
      return new ChartDataSet(summary.field, dataXY);
    });
    return new SummaryChartData(datasets);
  }

  static rankLabelFor(rank: number): string {
    switch (rank) {
      case 1: {
        return 'Want to Learn';
      }
      case 2: {
        return 'Dabble';
      }
      case 3: {
        return 'Good';
      }
      case 4: {
        return 'Pretty Great';
      }
      case 5: {
        return 'Ninja';
      }
      default: {
        return 'N/A';
      }
    }
  }
}

class ChartDataSet {
  label: string;
  data: ChartDataXY[];
  pointBackgroundColor;

  constructor(label: string, data: ChartDataXY[]) {
    this.label = label;
    this.data = data;
    this.pointBackgroundColor = this.randomColor();
  }

  randomColor(): string {
    const hex = Math.floor(Math.random() * 0xFFFFFF);
    return `#${hex.toString(16)}`;
  }
}

class ChartDataXY {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
