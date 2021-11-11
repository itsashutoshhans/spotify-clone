import React from 'react';
import "./SongRow.css";

function SongRow({ track, playSong, currentSong }) {
  return (
    <div className={`songRow ${currentSong?.id === track?.id ? "songRow--active" : ""} `} onClick={() => playSong(track)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h2>{track.name}</h2>
        <p>
          {track.artists.map((artist) => artist.name)} - {" "}
          {track.album.name}
        </p>
      </div>
    </div>
  )
}

export default SongRow
