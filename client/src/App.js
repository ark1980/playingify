import React, { Component } from 'react';
import logo from './logo.svg';
import queryString from 'query-string';
import Spotify from 'spotify-web-api-js';
import './App.css';

const spotifyApi = new Spotify();
const params = queryString.parse(window.location.hash);
const accessToken = params.access_token;

class App extends Component {
  
  state = {
    // loggedIn: token ? true : false,
    nowPlaying: {
      name: 'Not Checked',
      albumArt: ''
    }
  }
  
  render() {
    console.log(accessToken);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {!accessToken &&
            <a href="http://localhost:8888" >
            <button className="btn">
              Sign in with Spotify
            </button>
            </a>
          }
          <h3>Already Signed in</h3>
          <a onClick={this.getArtistAlbums} >
            <button className="btn">
              Check Now Playing
            </button>

          </a>
          <h3> Now Playing: { this.state.nowPlaying.name } </h3>
          <div>
            <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
