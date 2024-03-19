import React from 'react';
import allData from '../../../data.json';
import VideoComponent from '../VideoComponent';
import s from './ProgramVideo.module.scss';

const ProgramVideo = () => {
  return (
    <div className={s.root} id="video-program">
      <div className="title">{allData.landing.videoProgram.title}</div>
      <VideoComponent id="QzTh76XT1l4" />
    </div>
  );
};

export default ProgramVideo;
