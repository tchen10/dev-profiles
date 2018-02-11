import {Summary} from './summary';

describe('Model: Summary', () => {
  describe('#createFrom', () => {
    it('should create an array of Summaries', () => {
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

      const summaries = Summary.createFrom(json);

      expect(summaries).toEqual([
        new Summary('Golang', ['1', '2']),
        new Summary('Python', ['3', '4'])
      ]);
    });
  });

  describe('#createChartData', () => {
    it('should create ChartData from Summaries', () => {
      const summaries = [
        new Summary('Golang', ['1', '1', '2']),
        new Summary('Python', ['3', '4', '4'])
      ];

      const chartData = Summary.createChartData(summaries);

      expect(chartData).toEqual({
        datasets: [
          {
            label: 'Golang',
            data: [
              {
                x: 1,
                y: 2
              },
              {
                x: 2,
                y: 1
              }
            ]
          },
          {
            label: 'Python',
            data: [
              {
                x: 3,
                y: 1
              },
              {
                x: 4,
                y: 2
              }
            ]
          }
        ]
      });
    });
  });

  describe('.totalEntries', () => {
    it('returns the count of values', () => {
      const totalEntries = new Summary('Golang', ['1', '1', '1']).totalEntries;
      expect(totalEntries).toEqual(3);
    });
  });

  describe('.statFor', () => {
    it('returns the formatted stat text for a given stat', () => {
      const summary = new Summary('Golang', ['1', '1', '1', '2']);
      const stat = summary.statFor('1');
      expect(stat).toEqual('3 (75%)');
    });

    it('returns 0 if there are no values for a given stat', () => {
      const summary = new Summary('Golang', ['1', '1', '1', '2']);
      const stat = summary.statFor('3');
      expect(stat).toEqual('0');
    });
  });
});
