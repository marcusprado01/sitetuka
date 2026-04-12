import fs from "fs";
import path from "path";

const IMAGES_DIR = path.join(process.cwd(), "public/images");
const VALID_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];
const BASE_PATH = "/sitetuka";

export interface ImageFile {
  src: string;
  alt: string;
  filename: string;
}

export function getImagesByCategory(category: string): ImageFile[] {
  const categoryDir = path.join(IMAGES_DIR, category);

  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  return fs
    .readdirSync(categoryDir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return VALID_EXTENSIONS.includes(ext);
    })
    .sort()
    .map((filename) => ({
      src: `${BASE_PATH}/images/${category}/${filename}`,
      alt: filename.replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
      filename,
    }));
}

export function getAllCategories(): string[] {
  if (!fs.existsSync(IMAGES_DIR)) {
    return [];
  }

  return fs
    .readdirSync(IMAGES_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .filter((name) => {
      const dir = path.join(IMAGES_DIR, name);
      const files = fs.readdirSync(dir);
      return files.some((f) =>
        VALID_EXTENSIONS.includes(path.extname(f).toLowerCase())
      );
    });
}

export function getCategoryImageCount(category: string): number {
  return getImagesByCategory(category).length;
}
