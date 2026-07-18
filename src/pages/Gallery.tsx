import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { galleryCategories } from '../data/categories'
import { imagesForCategory } from '../data/gallery'

const tabs = [{ slug: 'all', label: 'All Designs' }, ...galleryCategories.map((c) => ({ slug: c.slug, label: c.label }))]

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('category') ?? 'all'
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(24)

  const images = useMemo(() => imagesForCategory(active), [active])

  useEffect(() => {
    setVisibleCount(24)
  }, [active])

  const setActive = (slug: string) => {
    if (slug === 'all') setSearchParams({})
    else setSearchParams({ category: slug })
  }

  const visibleImages = images.slice(0, visibleCount)

  return (
    <div className="pt-32">
      <section className="container-x pb-12 text-center">
        <Reveal>
          <p className="eyebrow">Design Gallery</p>
          <h1 className="heading-xl mt-4">Browse every room, curated by space</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
            {galleryCategories.length} categories, hand-picked looks in each — filter by the space
            you're designing next.
          </p>
        </Reveal>
      </section>

      <div className="sticky top-20 z-30 border-y border-ink/10 bg-cream-50/95 backdrop-blur-sm">
        <div className="container-x flex gap-2 overflow-x-auto py-4 scrollbar-thin">
          {tabs.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActive(tab.slug)}
              className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                active === tab.slug
                  ? 'border-maroon-600 bg-maroon-600 text-cream-50'
                  : 'border-ink/15 text-ink/70 hover:border-ink/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <section className="container-x py-14">
        <motion.div layout className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, i) => (
              <motion.button
                key={img.src + i}
                layout
                initial={{ opacity: 0, y: 24, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightboxIndex(i)}
                className="group block aspect-[4/5] overflow-hidden rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleCount < images.length && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => setVisibleCount((c) => c + 24)} className="btn-outline">
              Load More Designs
            </button>
          </div>
        )}
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={visibleImages.map((i) => i.src)}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
