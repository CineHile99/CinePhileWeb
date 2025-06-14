import React from 'react';
import VideoCard from './VideoCard';

export default function GridSection({ sectionTitle, items, type }) {
  return (
    <section className="section">
      <h3>{sectionTitle}</h3>
      <div className="grid">
        {items?.length > 0 ? (
          items.map((item, idx) => (
            <VideoCard key={idx} item={item} type={type} />
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </section>
  );
}
