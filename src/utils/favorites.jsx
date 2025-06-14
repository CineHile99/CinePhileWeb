import { db } from './db';

export async function isFavorite(url) {
  return (await db.favorites.where({ url }).count()) > 0;
}

export async function toggleFavorite(url, type) {
  const exists = await isFavorite(url);
  if (exists) {
    await db.favorites.where({ url }).delete();
  } else {
    await db.favorites.add({ url, type });
  }
}
