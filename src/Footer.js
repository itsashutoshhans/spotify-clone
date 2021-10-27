import { PlayCircleOutline, PlaylistPlay, Repeat, Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
import React from 'react';
import "./Footer.css";
import skinnyLoveIcon from "./assets/images/skinny_love.jpeg"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <img className="footer__albumLogo" src={skinnyLoveIcon} alt="" />
          <div className="footer__songInfo">
            <h4>Skinny Love</h4>
            <p>Bon Iver</p>
          </div>
        </div>
        <div className="footer__center">
          <Shuffle className="footer__green" />
          <SkipPrevious className="footer__icon" />
          <PlayCircleOutline fontSize="large" className="footer__icon" />
          <SkipNext className="footer__icon" />
          <Repeat className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlay />
            </Grid>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Footer
