// optimize-images.mjs
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const SRC_DIR = "../assets_need_to_use";
const DEST_DIR = "./public/images";

const fileMapping = {
  "banner.png": { dest: "hero/hero-1.webp", width: 1920, quality: 85 },
  "about us 1.png": { dest: "about/about-1.webp", width: 800, quality: 80 },
  "about us 2.png": { dest: "about/about-2.webp", width: 1200, quality: 80 },
  "all projects 1.png": { dest: "projects/project-1.webp", width: 800, quality: 80 },
  "all projects 2.png": { dest: "projects/project-2.webp", width: 800, quality: 80 },
  "all projects 3.png": { dest: "projects/project-3.webp", width: 800, quality: 80 },
  "all projects 4.png": { dest: "projects/project-4.webp", width: 800, quality: 80 },
};

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
}

async function run() {
  console.log("Optimizing and moving images...");
  
  await ensureDir(path.join(DEST_DIR, "hero"));
  await ensureDir(path.join(DEST_DIR, "about"));
  await ensureDir(path.join(DEST_DIR, "projects"));

  for (const [srcName, config] of Object.entries(fileMapping)) {
    const srcPath = path.join(SRC_DIR, srcName);
    const destPath = path.join(DEST_DIR, config.dest);
    
    try {
      await fs.access(srcPath);
      await sharp(srcPath)
        .resize({ width: config.width, withoutEnlargement: true })
        .webp({ quality: config.quality })
        .toFile(destPath);
      console.log(`✅ Optimized ${srcName} -> ${config.dest}`);
    } catch (err) {
      console.error(`❌ Error processing ${srcName}:`, err.message);
    }
  }
  
  console.log("Done.");
}

run();
