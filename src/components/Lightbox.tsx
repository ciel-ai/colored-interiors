import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface LightboxProps {
  images: string[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export default function Lightbox({ images, index, onClose, onIndexChange }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onIndexChange((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onClose, onIndexChange])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6l12 12M18 6 6 18" /></svg>
      </button>

      <button
        aria-label="Previous"
        onClick={(e) => {
          e.stopPropagation()
          onIndexChange((index - 1 + images.length) % images.length)
        }}
        className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20 sm:left-6"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 6l-6 6 6 6" /></svg>
      </button>

      <motion.img
        key={images[index]}
        src={images[index]}
        alt={`Photo ${index + 1} of ${images.length}`}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-[92vw] rounded-lg object-contain shadow-soft"
      />

      <button
        aria-label="Next"
        onClick={(e) => {
          e.stopPropagation()
          onIndexChange((index + 1) % images.length)
        }}
        className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20 sm:right-6"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 6l6 6-6 6" /></svg>
      </button>

      <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-widest2 text-cream-100/70">
        {index + 1} / {images.length}
      </span>
    </motion.div>
  )
}
