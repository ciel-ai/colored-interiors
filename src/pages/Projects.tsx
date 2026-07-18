import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { projects, totalProjectPhotos } from '../data/projects'

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null)

  return (
    <div className="pt-32">
      <section className="container-x pb-16 text-center">
        <Reveal>
          <p className="eyebrow">Our Portfolio</p>
          <h1 className="heading-xl mt-4">Completed Projects</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
            {projects.length} full-home projects, {totalProjectPhotos}+ photographs — a look inside the
            homes we’ve planned, built and styled from the ground up.
          </p>
        </Reveal>
      </section>

      <div className="container-x space-y-28 pb-28">
        {projects.map((project, pIndex) => (
          <section key={project.slug} id={project.slug} className="scroll-mt-24">
            <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/10 pb-6">
              <div>
                <p className="eyebrow">0{pIndex + 1} · {project.type}</p>
                <h2 className="heading-lg mt-3">{project.title}</h2>
                <p className="mt-2 text-sm text-ink/55">{project.location} · {project.area}</p>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-ink/65">{project.description}</p>
            </Reveal>

            <RevealGroup className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" stagger={0.05}>
              {project.images.map((img, i) => (
                <RevealItem key={img} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
                  <button
                    onClick={() => setLightbox({ images: project.images, index: i })}
                    className="group block h-full w-full overflow-hidden rounded-xl"
                  >
                    <img
                      src={img}
                      alt={`${project.title} photo ${i + 1}`}
                      loading="lazy"
                      className="h-full w-full min-h-[140px] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </button>
                </RevealItem>
              ))}
            </RevealGroup>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            index={lightbox.index}
            onClose={() => setLightbox(null)}
            onIndexChange={(i) => setLightbox((prev) => (prev ? { ...prev, index: i } : prev))}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
