import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Player from '../components/Player';

export default function PlayerPage() {
  const [params] = useSearchParams();
  const url = params.get("url");

  if (!url) return <p>❌ No stream URL provided.</p>;

  return (
    <div className="player-container">
      <h2>▶ Now Playing</h2>
      <Player url={url} />
    </div>
  );
}
