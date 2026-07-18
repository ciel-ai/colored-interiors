import { galleryCategories } from './categories'
import { pexelsImage } from './imageSource'

export interface GalleryImage {
  src: string
  category: string
  alt: string
}

// One entry per real photo id — never repeats a photo within a category.
export const galleryImages: GalleryImage[] = galleryCategories.flatMap((cat) =>
  cat.photoIds.map((id, i) => ({
    src: pexelsImage(id, 800, 1000),
    category: cat.slug,
    alt: `${cat.label} inspiration ${i + 1}`,
  })),
)

export function imagesForCategory(slug: string | 'all') {
  if (slug === 'all') return galleryImages
  return galleryImages.filter((img) => img.category === slug)
}
