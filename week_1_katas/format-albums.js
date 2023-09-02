const formatAlbums = (albums, artistIdReference) => {
   const albumIds = []
   albums.forEach(({...album})=>{
    album.artistId = artistIdReference[album.artist]
    delete album.artist
    albumIds.push(album)
   })
    return albumIds
};

module.exports = formatAlbums;
