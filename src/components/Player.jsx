import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function Player({ url }) {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;

    if (Hls.isSupported() && url.endsWith(".m3u8")) {
      const hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    } else {
      video.src = url;
    }
  }, [url]);

  return (
    <video ref={videoRef} controls autoPlay style={{ width: '100%', maxHeight: '90vh' }} />
  );
}
