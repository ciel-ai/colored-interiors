import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { StarIcon } from '../components/Icons'
import { reviews, moreReviews } from '../data/reviews'

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(10)
  // moreReviews (not featuredReviews) so no review already shown in the
  // homepage carousel repeats here.
  const visibleReviews = moreReviews.slice(0, visibleCount)

  return (
    <div className="pt-32">
      <section className="container-x pb-16 text-center">
        <Reveal>
          <p className="eyebrow">Client Stories</p>
          <h1 className="heading-xl mt-4">What homeowners say about working with us</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
            {reviews.length} reviews from real projects across Bengaluru, Chennai, Hyderabad, Pune and Mumbai.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleReviews.map((review, i) => (
            <motion.div
              key={`${review.name}-${review.location}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (i % 10) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} filled={s < review.rating} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">“{review.quote}”</p>
                <div className="mt-6 border-t border-ink/10 pt-4">
                  <p className="font-serif text-base text-ink">{review.name}</p>
                  <p className="text-xs text-ink/50">{review.location} · {review.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {visibleCount < moreReviews.length && (
          <div className="mt-12 flex justify-center">
            <button onClick={() => setVisibleCount((c) => c + 10)} className="btn-outline">
              Load More Reviews
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
