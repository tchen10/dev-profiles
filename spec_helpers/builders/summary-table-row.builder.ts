import {SummaryTableRow} from '../../src/app/summary-table/summary-table-row.model';

class SummaryTableRowBuilder {
  private field = 'defaultField';
  private rankOne = 0;
  private rankTwo = 0;
  private rankThree = 0;
  private rankFour = 0;
  private rankFive = 0;

  withField(field: string) {
    this.field = field;
    return this;
  }

  withRankOne(rankOne: number) {
    this.rankOne = rankOne;
    return this;
  }

  withRankTwo(rankTwo: number) {
    this.rankTwo = rankTwo;
    return this;
  }

  withRankThree(rankThree: number) {
    this.rankThree = rankThree;
    return this;
  }

  withRankFour(rankFour: number) {
    this.rankFour = rankFour;
    return this;
  }

  withRankFive(rankFive: number) {
    this.rankFive = rankFive;
    return this;
  }

  build(): SummaryTableRow {
    return new SummaryTableRow(this.field, this.rankOne, this.rankTwo, this.rankThree, this.rankFour, this.rankFive);
  }
}

export function aSummaryTableRow(): SummaryTableRowBuilder {
  return new SummaryTableRowBuilder();
}
