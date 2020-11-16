import React from "react";

const Song = ({ song }) => {
  return (
    <div className="song-container">
      <img src={song.cover}></img>
      <h2>{song.title}</h2>
      <h3>{song.artist}</h3>
    </div>
  );
};

export default Song;
