import { useEffect } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import discover_weekly from "./data/discovery_weekly.json"
import user from "./data/user.json";
import playlists from "./data/playlists.json"

const spotify = new SpotifyWebApi();

function App() {
  const [{token}, disptach] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    
    disptach({
      type: "SET_DISCOVER_WEEKLY",
      discover_weekly: discover_weekly
    })

    disptach({
      type: "SET_USER",
      user
    })

    disptach({
      type: "SET_PLAYLISTS",
      playlists: playlists
    })
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : (
          <Login />
        )
      }
      
    </div>
  );
}

export default App;
