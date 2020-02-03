import { countryName, isCountryValid } from './utils';

describe('util functions', () => {
  describe('countryName', () => {
    it('should return the name of the country based on its code', () => {
      const country = countryName('in');
      expect(country).toBe('India');
    });
    it('should return the correctly formatted name of the country', () => {
      const country = countryName('gb');
      expect(country).toBe('the United Kingdom');
    });
  });

  describe('isCountryValid', () => {
    it('should return true if the country is in the provided country list', () => {
      expect(isCountryValid('gb')).toBeTruthy();
    });
    it('should return false if the country is not in the provided country list', () => {
      expect(isCountryValid('it')).toBeFalsy();
    });
  });
});
