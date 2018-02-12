import {Summary} from '../models/summary';
import {SummaryTableRow} from './summary-table-row.model';
import {aSummaryTableRow} from '../../../spec_helpers/builders/summary-table-row.builder';

describe('SummaryTableRow', () => {
  describe('#createFrom', () => {
    it('returns array of SummaryTableRow', () => {
      const summaries = [
        new Summary('Golang', ['1', '1', '2']),
        new Summary('Python', ['3', '4', '5'])
      ];

      const rows = SummaryTableRow.createFrom(summaries);

      expect(rows).toEqual([
        aSummaryTableRow().withField('Golang')
          .withRankOne(2)
          .withRankTwo(1)
          .build(),
        aSummaryTableRow().withField('Python')
          .withRankThree(1)
          .withRankFour(1)
          .withRankFive(1)
          .build()
      ]);
    });
  });
});
