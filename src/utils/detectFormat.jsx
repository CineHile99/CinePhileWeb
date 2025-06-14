export function detectFormat(url) {
  if (!url) return 'unknown';
  if (url.includes(".m3u8")) return 'hls';
  if (url.includes(".mp4") || url.includes(".webm") || url.includes(".mov") || url.includes(".mkv")) return 'file';
  if (url.endsWith('.ts')) return 'mp4';
  return 'unknown';
}
