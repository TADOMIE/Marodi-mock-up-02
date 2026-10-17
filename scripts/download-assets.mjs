import fs from 'node:fs';
import path from 'node:path';
import https from 'node:https';

const IMAGES_TO_DOWNLOAD = [
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/6.png', filename: 'hero-showreel.png', isWide: true },
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/1745163144047.jpeg', filename: 'about-team.jpeg', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/unnamed-4.jpg', filename: 'channel-senegal.jpg', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/channels4_profile.jpg', filename: 'channel-international.jpg', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/channels4_profile-1.jpg', filename: 'channel-pulaar.jpg', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/5-1.png', filename: 'partner-sunuyeuf.png', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/8-1.png', filename: 'partner-prime.png', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/01/Untitled-design-72.png', filename: 'partner-bet.png', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/04/Untitled-design-93.png', filename: 'partner-rts1.png', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/04/Untitled-design-95.png', filename: 'partner-2stv.png', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/04/Untitled-design-94.png', filename: 'partner-sentv.png', isWide: false },
  { url: 'https://marodi.tv/wp-content/uploads/2026/04/Untitled-design-2026-04-17T112412.157.png', filename: 'partner-tfm.png', isWide: false },
];

const targetDir = path.resolve('public/images');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve(dest);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log('Downloading assets to public/images...');
  for (const item of IMAGES_TO_DOWNLOAD) {
    const dest = path.join(targetDir, item.filename);
    try {
      await downloadFile(item.url, dest);
      console.log(`Saved: ${item.filename}`);
    } catch (err) {
      console.warn(`Could not fetch ${item.url}: ${err.message}`);
    }
  }
  console.log('Download complete.');
}

run();
