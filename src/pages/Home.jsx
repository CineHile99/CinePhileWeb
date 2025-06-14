import React, { useEffect, useState } from 'react';
import { db } from '../utils/db';
import GridSection from '../components/GridSection';

export default function Home() {
  const [live, setLive] = useState([]);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const load = async () => {
      const liveData = await db.live.toArray();
      const movieData = await db.movie.toArray();
      const seriesData = await db.series.toArray();
      setLive(liveData);
      setMovies(movieData);
      setSeries(seriesData);
    };
    load();
  }, []);

  return (
    <div className="home">
      <GridSection sectionTitle="📺 Live TV" items={live} type="live" />
      <GridSection sectionTitle="🎬 Movies" items={movies} type="movie" />
      <GridSection sectionTitle="📚 Series" items={series} type="series" />
    </div>
  );
}
