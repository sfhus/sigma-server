const express = require('express');
const router = express.Router();
const spotifyApi = require('./Credentials')

// Get URL to begin authorization process
router.get('/authorize/getAuthorizeUrl', (req, res) => {
  res.json({ authorizeURL: spotifyApi.createAuthorizeURL(['user-read-private', 'playlist-read-private', 'playlist-read-collaborative']) });
});

// Set access and refresh tokens
router.put('/authorize/setTokens/:code', (req, res) => {
    console.log(req.params.code);
    spotifyApi.authorizationCodeGrant(req.params.code).then(
        function(data) {
          spotifyApi.setAccessToken(data.body['access_token']);
          spotifyApi.setRefreshToken(data.body['refresh_token']);
          res.json([{ msg: 'Sucessfully set access and refresh token.'}]);
        },
        function(err) {
          res.status(400).json(err); 
        }
      );
});

// Get playlists saved by user
router.get('/getUserPlaylists', (req, res) => {
  spotifyApi.getUserPlaylists().then(function(data) {
    res.json(data.body);
  },function(err) {
    res.status(400).json(err);
  });
});

// Get tracks in a given playlist
router.get('/getPlaylistTrackFeatures/:id', (req, res) => {
  spotifyApi.getPlaylistTracks(playlistID = req.params.id).then(function(data) {
    var playlistTracks = [];
    for (var item of data.body.items) {
      playlistTracks.push(item.track.id);
    }

    spotifyApi.getAudioFeaturesForTracks(playlistTracks).then(function(data) {
      res.json(data.body);
    },function(err) {
      res.status(400).json(err);
    });

  },function(err) {
    res.status(400).json(err);
  });
});

// Get details of a given track (tempo, genre etc.)
router.get('/getPlaylistTracks/:id', (req, res) => {
  spotifyApi.getPlaylistTracks(playlistID = req.params.id).then(function(data) {
    res.json(data.body);
  },function(err) {
    res.status(400).json(err);
  });
});

module.exports = router;