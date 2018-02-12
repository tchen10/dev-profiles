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
});
