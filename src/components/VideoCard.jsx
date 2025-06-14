import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoCard({ item, type }) {
  return (
    <div className="card">
      <img src={item.logo || './assets/logo.png'} alt={item.name} />
      <h4>{item.name}</h4>
      <Link to={`/player?url=${encodeURIComponent(item.url)}&type=${type}`}>
        <button>▶ Watch</button>
      </Link>
    </div>
  );
}
