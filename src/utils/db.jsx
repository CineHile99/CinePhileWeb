import Dexie from 'dexie';

export const db = new Dexie("CinePhileDB");

db.version(1).stores({
  live: "++id, name, url, group, logo",
  movie: "++id, name, url, group, logo",
  series: "++id, name, url, group, logo",
  favorites: "++id, url, type"
});
