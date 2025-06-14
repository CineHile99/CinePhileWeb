import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ theme, setTheme }) {
  const isDark = theme === 'dark';
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">🎬 CinePhile</Link>
      </div>

      <nav className="nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/admin" className={location.pathname === '/admin' ? 'active' : ''}>Admin</Link>
      </nav>

      <button
        className="theme-toggle"
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
      >
        {isDark ? '🌞' : '🌙'}
      </button>
    </header>
  );
}
