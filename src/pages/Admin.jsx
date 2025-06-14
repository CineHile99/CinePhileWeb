import React, { useState } from 'react';
import { db } from '../utils/db';
import { parseM3U } from '../utils/m3uParser';

export default function Admin() {
  const [text, setText] = useState('');
  const [type, setType] = useState('live');
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('');

  async function handleImport(textData) {
    const entries = parseM3U(textData);
    await db[type].bulkPut(entries);
    setStatus(`✅ Imported ${entries.length} ${type}`);
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const txt = await file.text();
    setText(txt);
  };

  const handleURLFetch = async () => {
    const res = await fetch(url);
    const txt = await res.text();
    handleImport(txt);
  };

  return (
    <div className="admin">
      <h2>🛠 Admin Panel</h2>

      <div>
        <label>📂 Upload .m3u8/.m3u file:</label><br/>
        <input type="file" onChange={handleUpload} />
      </div>

      <div>
        <label>🔗 Or paste remote M3U URL:</label><br/>
        <input value={url} onChange={e => setUrl(e.target.value)} />
        <button onClick={handleURLFetch}>Fetch & Import</button>
      </div>

      <div>
        <label>✍️ Or paste M3U text:</label><br/>
        <textarea value={text} onChange={(e) => setText(e.target.value)} rows="8" />
        <br/>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="live">Live</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
        </select>
        <button onClick={() => handleImport(text)}>Import</button>
        <button onClick={async () => {
          await db[type].clear();
          setStatus(`${type} cleared`);
        }}>🗑 Clear</button>
      </div>

      <p>{status}</p>
    </div>
  );
}
