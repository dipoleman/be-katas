const createRef = require('../create-ref.js');

const people = [
  { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
  {
    name: 'ant',
    phoneNumber: '01612223344',
    address: 'Northcoders, Manchester'
  },
  { name: 'mitch', phoneNumber: '07777777777', address: null }
];

describe('createRef', () => {
  it('Should return a obj', () => {
    const input = people;
    const output = createRef(people);
    expect(typeof output).toBe('object');
  });
  it("should return an empty object if passed in an empty array",()=>{
    expect(createRef([])).toEqual({})
  })
  it("Should return a reference object with names and phone numbers",()=>{
    const input = people;
    const output = createRef(people,"name","phoneNumber");
    const expected = { vel: '01134445566', ant: '01612223344', mitch: '07777777777' }
    expect(output).toEqual(expected)
  })
  it("Should return a reference object with names and addresses",()=>{
    const input = people;
    const output = createRef(people,"name","address");
    const expected = { vel: 'Northcoders, Leeds', ant: 'Northcoders, Manchester', mitch: null }
    expect(output).toEqual(expected)
  })
  it("SHould return a reference with track:artist",()=>{
    const songs = [
      {
        track: '11:11',
        artist: 'Dinosaur Pile-Up',
        releaseYear: 2015,
        album: 'Eleven Eleven'
      },
      {
        track: 'Powder Blue',
        artist: 'Elbow',
        releaseYear: 2001,
        album: 'Asleep In The Back'
      }
    ];
    const output = createRef(songs,'track','artist')
    const expected = { '11:11': 'Dinosaur Pile-Up', 'Powder Blue': 'Elbow' }
    expect(output).toEqual(expected)
  })
  it("Should not mutate the input array",()=>{
    const input = people;
    createRef(people);
    const expected = [
      { name: 'vel', phoneNumber: '01134445566', address: 'Northcoders, Leeds' },
      {
        name: 'ant',
        phoneNumber: '01612223344',
        address: 'Northcoders, Manchester'
      },
      { name: 'mitch', phoneNumber: '07777777777', address: null }
    ];
    expect(input).toEqual(expected)
  })
});
