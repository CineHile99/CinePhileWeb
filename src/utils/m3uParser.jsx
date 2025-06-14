export function parseM3U(content) {
  const lines = content.split('\n');
  const entries = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes("#EXTINF")) {
      const name = line.split(",")[1]?.trim() ?? "Untitled";
      const logoMatch = line.match(/tvg-logo="([^"]+)"/i);
      const groupMatch = line.match(/group-title="([^"]+)"/i);

      const obj = {
        name,
        logo: logoMatch ? logoMatch[1] : '',
        group: groupMatch ? groupMatch[1] : 'Uncategorized',
        url: lines[i + 1]?.trim()
      };

      entries.push(obj);
    }
  }
  return entries;
}
