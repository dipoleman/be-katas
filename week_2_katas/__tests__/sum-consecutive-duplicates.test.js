const { sumConsecutiveDuplicates } = require('../sum-consecutive-duplicates');

describe('sumConsecutiveDuplicates()', () => {
  it('should return an array', () => {
    const result = sumConsecutiveDuplicates([1,2,3])
    expect(Array.isArray(result)).toBe(true)
  });
  it('should return an empty array if passed an empty array',()=>{
    const result = sumConsecutiveDuplicates([])
    expect(result).toEqual([])
  })
  it('should return a new array',()=>{
    const input = [1,2,3]
    const result = sumConsecutiveDuplicates(input)
    expect(result).not.toBe(input)
  })
  it('should return a copy of the same array if no consecutive entries',()=>{
    const input = [1,2,3]
    const result = sumConsecutiveDuplicates(input)
    expect(result).toEqual([1,2,3])
  })

  it('should return correct solution',()=>{
    const result = sumConsecutiveDuplicates([1, 1, 2, 2, 3, 3])
    expect(result).toEqual([2, 4, 6])
  })
  it('should return correct solution',()=>{
    const result = sumConsecutiveDuplicates([1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1])
    expect(result).toEqual([8, 2, 3])
  })
  it('should return correct solution',()=>{
    const result = sumConsecutiveDuplicates([1, 1, 1])
    expect(result).toEqual([3])
  })

});
