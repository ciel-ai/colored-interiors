import { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { ArrowIcon } from '../components/Icons'
import { services } from '../data/services'
import { getServiceDetail } from '../data/serviceDetails'
import { pexelsImage } from '../data/imageSource'

function ScrollingHero({ imageIds, title }: { imageIds: number[]; title: string }) {
  const track = [...imageIds, ...imageIds]
  return (
    <div className="relative h-[380px] overflow-hidden bg-ink sm:h-[440px]">
      <motion.div
        className="flex h-full gap-2"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
      >
        {track.map((id, i) => (
          <div key={i} className="h-full w-[60vw] shrink-0 sm:w-[32vw]">
            <img
              src={pexelsImage(id, 900, 620)}
              alt={`${title} ${i + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/30" />
      <div className="absolute inset-x-0 bottom-0">
        <div className="container-x pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="heading-xl text-cream-50 [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]"
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

function PointList({ points }: { points: { title: string; description: string }[] }) {
  return (
    <RevealGroup className="grid gap-6 sm:grid-cols-2" stagger={0.06}>
      {points.map((point) => (
        <RevealItem key={point.title}>
          <div className="h-full rounded-2xl border border-ink/10 bg-white p-6">
            <h3 className="font-serif text-lg text-ink">{point.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/65">{point.description}</p>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

function ProcessTimeline({ steps }: { steps: { title: string; description: string }[] }) {
  return (
    <RevealGroup className="space-y-8" stagger={0.08}>
      {steps.map((step, i) => (
        <RevealItem key={step.title}>
          <div className="flex gap-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon-600 font-serif text-base text-cream-50">
              {i + 1}
            </div>
            <div>
              <h3 className="font-serif text-lg text-ink">{step.title}</h3>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/65">{step.description}</p>
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealGroup>
  )
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const service = services.find((s) => s.slug === slug)
  const detail = slug ? getServiceDetail(slug) : undefined

  if (!service || !detail) return <Navigate to="/services" replace />

  const galleryUrls = detail.galleryImageIds.map((id) => pexelsImage(id, 800, 1000))

  return (
    <div>
      <div className="pt-20">
        <ScrollingHero imageIds={detail.heroImageIds} title={service.title} />
      </div>

      <section className="container-x py-16">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">What We Offer</p>
          <p className="mt-5 text-lg leading-relaxed text-ink/75">{detail.intro}</p>
        </Reveal>
      </section>

      <section className="container-x pb-16">
        <Reveal className="max-w-xl">
          <h2 className="heading-lg">Benefits</h2>
        </Reveal>
        <div className="mt-8">
          <PointList points={detail.benefits} />
        </div>
      </section>

      <section className="bg-cream-200/60 py-16">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <h2 className="heading-lg">What's Included</h2>
          </Reveal>
          <div className="mt-8">
            <PointList points={detail.included} />
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <Reveal className="max-w-xl">
          <h2 className="heading-lg">Our Process</h2>
        </Reveal>
        <div className="mt-10">
          <ProcessTimeline steps={detail.process} />
        </div>
      </section>

      <section className="container-x pb-24">
        <Reveal className="max-w-xl">
          <h2 className="heading-lg">{service.title} in Action</h2>
          <p className="mt-4 leading-relaxed text-ink/70">
            A look at recent work from this service across our projects.
          </p>
        </Reveal>

        <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5" stagger={0.04}>
          {galleryUrls.map((src, i) => (
            <RevealItem key={src}>
              <button
                onClick={() => setLightboxIndex(i)}
                className="group block aspect-[4/5] w-full overflow-hidden rounded-xl"
              >
                <img
                  src={src}
                  alt={`${service.title} example ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <section className="container-x pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-maroon-600 px-8 py-16 text-center sm:px-16">
            <h2 className="heading-lg text-cream-50">Ready to start your {service.title.toLowerCase()} project?</h2>
            <p className="mx-auto mt-4 max-w-md text-cream-100/85">
              Book a free design consultation and get a customised quote within 48 hours.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-ink hover:bg-cream-50 hover:text-ink">
                Get Free Consultation <ArrowIcon />
              </Link>
              <Link to="/services" className="btn-outline border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink">
                View All Services
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={galleryUrls}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={setLightboxIndex}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
