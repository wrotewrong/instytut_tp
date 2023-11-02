import React, { useRef, useEffect, useState } from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const ScrollVideo = ({ url }) => {
  const videoRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          setIsPlaying(true);
        }
        // else {
        //   setIsPlaying(false);
        // }
      });
    }, options);

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <div ref={videoRef}>
        <VideoPlayer url={url} isPlaying={isPlaying} />
      </div>
    </div>
  );
};

export default ScrollVideo;
