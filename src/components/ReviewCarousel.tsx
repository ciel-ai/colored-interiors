import { useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { StarIcon } from './Icons'
import { pexelsImage } from '../data/imageSource'
import type { Review } from '../data/reviews'

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4H4v5M15 20h5v-5M20 4h-5M4 15v5h5" />
    </svg>
  )
}

function ReviewBubble({
  review,
  layoutId,
  expanded,
  onExpand,
}: {
  review: Review
  layoutId: string
  expanded: boolean
  onExpand: () => void
}) {
  return (
    <div className="w-80 shrink-0 select-none">
      <div className="inline-block rounded-t-2xl rounded-br-2xl bg-cream-200 px-5 py-3">
        <p className="font-serif text-base text-ink">{review.name}</p>
        <p className="text-[10px] font-semibold uppercase tracking-widest2 text-ink/45">Home Owner</p>
      </div>
      <div className="flex h-[280px] flex-col rounded-b-2xl rounded-tr-2xl bg-cream-200 p-5 pt-2">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon key={i} filled={i < review.rating} className="h-3.5 w-3.5" />
          ))}
        </div>
        <p className="mt-3 flex-1 overflow-hidden text-sm leading-relaxed text-ink/75">{review.quote}</p>
        {review.photoId && (
          <motion.div layoutId={layoutId} className="relative mt-4 h-24 shrink-0 overflow-hidden rounded-xl">
            {!expanded && (
              <img
                src={pexelsImage(review.photoId, 500, 300)}
                alt={`${review.project} by colored Interior Designs`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            )}
            <button
              aria-label="Expand photo"
              onClick={onExpand}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md bg-ink/50 text-cream-50 backdrop-blur-sm transition-colors hover:bg-ink/70"
            >
              <ExpandIcon />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null)
  const track = [...reviews, ...reviews]
  const expandedReview = track.find((_, i) => `review-photo-${i}` === expandedKey)

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
      <motion.div
        className="flex gap-6 py-2"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: reviews.length * 6, ease: 'linear', repeat: Infinity }}
      >
        {track.map((review, i) => {
          const layoutId = `review-photo-${i}`
          return (
            <ReviewBubble
              key={layoutId}
              review={review}
              layoutId={layoutId}
              expanded={expandedKey === layoutId}
              onExpand={() => review.photoId && setExpandedKey(layoutId)}
            />
          )
        })}
      </motion.div>

      {createPortal(
        <AnimatePresence>
          {expandedReview?.photoId && (
            <motion.div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpandedKey(null)}
            >
              <motion.div
                layoutId={expandedKey ?? undefined}
                className="relative w-full max-w-xl overflow-hidden rounded-2xl shadow-soft"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={pexelsImage(expandedReview.photoId, 1000, 750)}
                  alt={`${expandedReview.project} by colored Interior Designs`}
                  className="h-full max-h-[70vh] w-full object-cover"
                />
                <button
                  aria-label="Close"
                  onClick={() => setExpandedKey(null)}
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/60 text-cream-50 backdrop-blur-sm transition-colors hover:bg-ink/80"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6 6 18" /></svg>
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-5 pt-10">
                  <p className="font-serif text-lg text-cream-50">{expandedReview.name}</p>
                  <p className="text-xs text-cream-100/75">{expandedReview.location} · {expandedReview.project}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </div>
  )
}
