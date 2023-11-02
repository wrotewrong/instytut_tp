import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, isPlaying }) => {
  const playerRef = useRef();

  useEffect(() => {
    if (isPlaying) {
      playerRef.current.getInternalPlayer()?.play();
    } else {
      playerRef.current.getInternalPlayer()?.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        width='100%'
        height='auto'
        muted
        playing={isPlaying}
      />
    </div>
  );
};

export default VideoPlayer;
