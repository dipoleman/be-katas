const formatAlbums = require('../format-albums.js');

const albums = [
  { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
  { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
];

const artistIdReference = {
  Grammatics: 9923,
  Doves: 324
};

describe('formatAlbums', () => {
  it('Should return an array', () => {
    expect(Array.isArray(formatAlbums([]))).toBe(true)
  });
  it("Should return an empty array if passed in an empty array and empty obj",()=>{
    expect(formatAlbums([],{})).toEqual([])
  })
  it("SHould remove album.artist and replace it with album.artistId",()=>{
    const output = formatAlbums(albums, artistIdReference)
    const expected = [
      { name: 'Grammatics', artistId: 9923, releaseYear: 2009 },
      { name: 'Kingdom of Rust', artistId: 324, releaseYear: 2009 },
    ];
    expect(output).toEqual(expected)
  })
  it("Should not mutate the input album array",()=>{
    const input = albums
    formatAlbums(albums,artistIdReference)
    const expected = [
      { name: 'Grammatics', artist: 'Grammatics', releaseYear: 2009 },
      { name: 'Kingdom of Rust', artist: 'Doves', releaseYear: 2009 }
    ];
    expect(input).toEqual(expected)
  })
  
});
