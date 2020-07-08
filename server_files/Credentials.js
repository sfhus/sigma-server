var SpotifyWebApi = require('spotify-web-api-node');

// Store application details, must match details on spotify dashboard
const credentials = {
    redirectUri: 'http://localhost:3000/playlists/',
    clientId: '',
    clientSecret: ''
}

var spotifyApi = new SpotifyWebApi(credentials);

module.exports = spotifyApi;
