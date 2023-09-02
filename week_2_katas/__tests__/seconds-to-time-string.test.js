const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  it('should return a string', () => {
    const result = secondsToTimeString(1);
    expect(typeof result).toBe('string');
  });
  it('should return 1 second when input is 1', () => {
    const result = secondsToTimeString(1);
    expect(result).toBe('1 second');
  });
  it('should return 2 seconds when input is 2', () => {
    const result = secondsToTimeString(2);
    expect(result).toBe('2 seconds');
  });
  it('should return 1 minute when input is 60', () => {
    const result = secondsToTimeString(60);
    expect(result).toBe('1 minute');
  });
  it('should return 2 minutes when input is 120', () => {
    const result = secondsToTimeString(120);
    expect(result).toBe('2 minutes');
  });
  it('should return fully formatted string', () => {
    const result = secondsToTimeString(127702942);
    expect(result).toBe('4 years, 18 days, 1 hour, 2 minutes and 22 seconds');
  });
});
