const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  it('Should return a obj', () => {
    const input =  { name: 'Otis', age: 1 }
    const output = ageDog(input, 2)
    expect(typeof output).toBe("object")
  });
  it("Should return the dog object with the appropriate age",()=>{
    const input =  { name: 'Otis', age: 1 }
    const output = ageDog(input, 2)
    expect(output.age).toBe(3)
  })
  it("Should not mutate the input object",()=>{
    const input =  { name: 'Otis', age: 1 }
    ageDog(input, 2)
    const expected =  { name: 'Otis', age: 1 }
    expect(input).toEqual(expected)
  })
  it("Should make a new object with new reference",()=>{
    const input =  { name: 'Otis', age: 1 }
    const output= ageDog(input, 2)
    expect(input).not.toBe(output)
  })
});
