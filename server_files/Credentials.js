var SpotifyWebApi = require('spotify-web-api-node');

// Store application details, must match details on spotify dashboard
const credentials = {
    redirectUri: 'http://localhost:3000/playlists/',
    clientId: '23255368548e4c4694a5cee85b5e59a1',
    clientSecret: 'c0e3fe4df9fd4c5397816f2490efee2a'
}

var spotifyApi = new SpotifyWebApi(credentials);

module.exports = spotifyApi;