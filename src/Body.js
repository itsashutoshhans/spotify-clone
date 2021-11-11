import React from 'react';
import "./Body.css";
import Header from "./Header";
import discoverWeeklyImage from "./assets/images/discover_weekly.jpeg";
import { useDataLayerValue } from './DataLayer';
import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import SongRow from './SongRow';

function Body({ spotify }) {
  const [{ discover_weekly, item: currentSong }, dispatch] = useDataLayerValue();
  const playSong = (track) => {
    dispatch({
      type: "SET_ITEM",
      item: track,
    });
    dispatch({
      type: "SET_PLAYING",
      playing: true,
    });
  }

  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body__info">
        <img src={discoverWeeklyImage} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      
      
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle"/>
          <Favorite fontSize="large"/>
          <MoreHoriz />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} currentSong={currentSong}/>
        ))}
      </div>
    </div>
  )
}

export default Body
