import { CITYS, insertInCitys } from '../../src/mocks/citys';

describe('../../src/mocks/citys', () => {

  beforeEach(() => {
    CITYS.length = 0;
  });

  it('should insert a new city', () => {
    insertInCitys('cityName', 'localName');

    expect(CITYS).toEqual([{ name: 'cityName', local: 'localName' }]);
  });

  it('should not insert a city', () => {
    CITYS.push({ name: 'cityName', local: 'localName' });

    insertInCitys('cityName', 'localName');

    expect(CITYS).toEqual([{ name: 'cityName', local: 'localName' }]);
  });

});