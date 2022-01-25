import { stringify } from 'querystring';
import { Statistiques } from './statistiques.model';

describe('Statistiques', () => {
  it('should create an instance', () => {
    expect(new Statistiques('cuohoeiuh', 'uhdhwuudh', 30)).toBeTruthy();
  });
});
