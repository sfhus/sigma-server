# Sigma Server
This Express server handles API requests from [Sigma](https://github.com/farazsfh/sigma/).

# Setup
1. Ensure you have Node.js on your machine aswell as sigma-server running
2. Create an application in the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/login). Set your applications' redirect url to `http://localhost:3000/playlists/`.
3. In server_files/Credentials.js enter your client ID and client secret.
4. In a terminal window, run `npm i`
5. In the same terminal window, run `npm start`
6. Setup and launch [Sigma](https://github.com/farazsfh/sigma/)
