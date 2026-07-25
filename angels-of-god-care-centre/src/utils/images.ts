import type { GalleryImage } from '../types'

function nameFromPath(path: string): string {
  const segments = path.replace(/\\/g, '/').split('/')
  const file = segments[segments.length - 1]
  return file.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ')
}

function titleCase(s: string): string {
  return s.replace(/\b\w/g, (c) => c.toUpperCase())
}

const imageModules = import.meta.glob<{ default: string }>(
  '/src/assets/images/gallery/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true }
)

const videoModules = import.meta.glob<{ default: string }>(
  '/src/assets/videos/**/*.{mp4,webm,mov}',
  { eager: true }
)

export function getGalleryImages(): GalleryImage[] {
  let id = 0
  const images: GalleryImage[] = []

  for (const [filepath, module] of Object.entries(imageModules)) {
    const parts = filepath.replace(/\\/g, '/').split('/')
    const galleryIdx = parts.findIndex((p) => p === 'gallery')
    const category = galleryIdx !== -1 && parts.length > galleryIdx + 2
      ? titleCase(parts[galleryIdx + 1])
      : 'Uncategorized'

    images.push({
      id: id++,
      src: module.default,
      alt: titleCase(nameFromPath(filepath)),
      category,
    })
  }

  return images
}

export function getAllCategories(images: GalleryImage[]): string[] {
  const cats = new Set(images.map((i) => i.category))
  return ['All', ...Array.from(cats).sort()]
}

export function getVideoSources(): string[] {
  return Object.values(videoModules).map((m) => m.default)
}
