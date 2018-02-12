import {Summary} from '../models/summary';
import * as _ from 'lodash';

export class SummaryTableRow {
  readonly field: string;
  readonly rankOne: number;
  readonly rankTwo: number;
  readonly rankThree: number;
  readonly rankFour: number;
  readonly rankFive: number;
  readonly total: number;

  constructor(field: string, rankOne: number, rankTwo: number, rankThree: number, rankFour: number, rankFive: number) {
    this.field = field;
    this.rankOne = rankOne;
    this.rankTwo = rankTwo;
    this.rankThree = rankThree;
    this.rankFour = rankFour;
    this.rankFive = rankFive;
    this.total = this.rankOne + this.rankTwo + this.rankThree + this.rankFour + this.rankFive;
  }

  static createFrom(summaries: Summary[]): SummaryTableRow[] {
    return summaries.map((summary) => {
      const valuesByRank = _.groupBy(summary.values, Math.floor);

      return new SummaryTableRow(summary.field,
        this.rankFor(valuesByRank, '1'),
        this.rankFor(valuesByRank, '2'),
        this.rankFor(valuesByRank, '3'),
        this.rankFor(valuesByRank, '4'),
        this.rankFor(valuesByRank, '5')
      );
    });
  }

  private static rankFor(valuesByRank: { [key: string]: string[] }, rank: string): number {
    const ranks = valuesByRank[rank];
    return ranks ? ranks.length : 0;
  }
}
