import React from 'react';
import './Video.css'

const Video = ({src}) => {
  return <video autoplay muted>
      <source src={src} type='video/mp4'></source>
  </video>;
};

export default Video;
