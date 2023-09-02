const { supermarketQueue } = require('../supermarket-queue');

describe('supermarketQueue()', () => {
  it('should return an number', () => {
    const output = supermarketQueue([1],1);
    expect(typeof output).toBe('number');
  });
  it('should return the sum of customers times when only 1 till is available',()=>{
    const output = supermarketQueue([2, 2, 2], 1)
    expect(output).toBe(6)
  })
  it('should return the maximum time if we have tills >= customers',()=>{
    const output = supermarketQueue([2,13,4,3],6)
    expect(output).toBe(13)
  })
  it('should return the correct solution to a complex input',()=>{
    const output = supermarketQueue([2, 3, 10], 2)
    expect(output).toBe(12)
  })
  it('should return the correct solution to a complex input',()=>{
    const input = [12,4,2,5,6,3,8,3,3,5,3,6,23,4,7,8,3,7,2,5,1,4,6]
    const output = supermarketQueue(input,5)
    expect(output).toBe(34)
  })

});
