const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  it('should return an array', () => {
    const input = [{ name: 'Otis', age: 3, hasRabies: true }];
    const output = treatDoggos(input)
    expect(Array.isArray(output)).toBe(true)
  });
  it("Should return an empty array if passed in an empty array",()=>{
    expect(treatDoggos([])).toEqual([])
  })
  it("Each dog should have the hasRabies flag flipped to false ",()=>{
    const input = [{ name: 'Otis', age: 3, hasRabies: true }];
    const output = treatDoggos(input)
    const expected = [{ name: 'Otis', age: 3, hasRabies: false }];
    expect(input).toEqual(output)
  })
  it("Should iterate over the dog array changing each rabies flag to false",()=>{
    const input = [{ name: 'Otis', age: 3, hasRabies: true },{name: 'poppy', age: 8,hasRabies: true}];
    const output = treatDoggos(input)
    const expected = [{ name: 'Otis', age: 3, hasRabies: false },{name: 'poppy', age: 8,hasRabies: false}];
    expect(input).toEqual(output)
  })
  it("Should not mutate the input object",()=>{
    const input = [{ name: 'Otis', age: 3, hasRabies: true },{name: 'poppy', age: 8,hasRabies: true}];
    treatDoggos(input)
    const expected =  [{ name: 'Otis', age: 3, hasRabies: true },{name: 'poppy', age: 8,hasRabies: true}];
    expect(input).toEqual(expected)
  })
  it("Should make a new object with new reference",()=>{
    const input =  [{ name: 'Otis', age: 3, hasRabies: true },{name: 'poppy', age: 8,hasRabies: true}];
    const output= treatDoggos(input)
    expect(input).not.toBe(output)
  })
});
