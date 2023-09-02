const { counterIntelligence } = require('../counter-intelligence');

describe('counterIntelligence()', () => {
  it('should return a string', () => {
    const result =  counterIntelligence('Y')
    expect(typeof result).toBe('string')
  });
  it("should return an empty string if passed an empty string",()=>{
    const result =  counterIntelligence('')
    expect(result).toBe('')
  })
  it("should return X when input Y",()=>{
    const result =  counterIntelligence('Y')
    expect(result).toBe('X')
  })
  it("should work with sentence",()=>{
    const result =  counterIntelligence('NKRRU YCKKZNKGXZ D')
    expect(result).toBe('HELLO SWEETHEART X')
  })
  it("should work with punctuation",()=>{
    const result =  counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G')
    expect(result).toBe('REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X')
  })
  it('should work with lowercase',()=>{
    const result = counterIntelligence('ngbk g toik jge :) d')
    expect(result).toBe('HAVE A NICE DAY :) X')
  })
});
