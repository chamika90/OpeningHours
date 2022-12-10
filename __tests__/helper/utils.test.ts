import {
  convertFirstLetterToUpperCase,
  getCurrentDay,
  getTimeFromSeconds,
} from '../../src/helper/utils';

describe('convert seconds to time in 12 hour clock', () => {
  it('Should return 1 AM', () => {
    const timeInSeconds = 3600;
    const expectedResult = '1 AM';
    expect(getTimeFromSeconds(timeInSeconds)).toBe(expectedResult);
  });
  it('Should return 1 PM', () => {
    const timeInSeconds = 46800;
    const expectedResult = '1 PM';
    expect(getTimeFromSeconds(timeInSeconds)).toBe(expectedResult);
  });
  it('Should return 1:30 AM', () => {
    const timeInSeconds = 5400;
    const expectedResult = '1:30 AM';
    expect(getTimeFromSeconds(timeInSeconds)).toBe(expectedResult);
  });
});

describe('convert first letter to uppercase', () => {
  it('Should return Monday', () => {
    const word = 'monday';
    const expectedResult = 'Monday';
    expect(convertFirstLetterToUpperCase(word)).toBe(expectedResult);
  });
  it('Should return Tuesday', () => {
    const word = 'Tuesday';
    const expectedResult = 'Tuesday';
    expect(convertFirstLetterToUpperCase(word)).toBe(expectedResult);
  });
  it('Should return empty string for null input', () => {
    const word = null;
    const expectedResult = '';
    expect(convertFirstLetterToUpperCase(word)).toBe(expectedResult);
  });
  it('Should return empty string for empty input', () => {
    const word = '';
    const expectedResult = '';
    expect(convertFirstLetterToUpperCase(word)).toBe(expectedResult);
  });
});
