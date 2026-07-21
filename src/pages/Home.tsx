import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import StatCounter from '../components/StatCounter'
import ReviewCarousel from '../components/ReviewCarousel'
import FAQAccordion from '../components/FAQAccordion'
import Icon, { ArrowIcon } from '../components/Icons'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { featuredReviews } from '../data/reviews'
import { faqs } from '../data/faq'
import { pexelsImage } from '../data/imageSource'

const heroImage = pexelsImage(28729467, 1400, 1700)

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <img src={heroImage} alt="Elegant living room designed by colored Interior Designs" className="h-[120%] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/20" />
        </motion.div>

        <div className="container-x relative z-10 py-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow text-maroon-500 [text-shadow:0_2px_6px_rgba(0,0,0,0.55)]"
          >
            Residential Interior Design Studio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="heading-xl mt-4 max-w-2xl text-cream-50"
          >
            Interiors designed around how you actually live.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-cream-100/85"
          >
            From first concept to final styling — space planning, custom furniture, lighting
            and full turnkey renovation, handled by one dedicated design team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link to="/contact" className="btn-primary">
              Get Free Consultation <ArrowIcon />
            </Link>
            <Link to="/projects" className="btn-outline border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-ink">
              View Our Projects
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 z-10 hidden flex-col items-center gap-2 sm:flex"
          animate={{ y: [0, 10, 0], x: '-50%' }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <span className="text-[10px] uppercase tracking-widest2 text-cream-100/70">Scroll</span>
          <span className="h-9 w-[1px] bg-cream-100/50" />
        </motion.div>
      </section>

      {/* ABOUT / STATS */}
      <section className="container-x py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">About the Studio</p>
            <h2 className="heading-lg mt-4">
              Thoughtful design, honest project management, and a studio that treats your home like our own.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-ink/70">
              colored Interior Designs is a full-service residential design studio. We take on a
              limited number of homes at a time so every project gets a dedicated designer,
              a clear timeline, and craftsmanship that holds up long after the last coat of paint.
            </p>
            <Link to="/contact" className="btn-outline mt-8">
              Start Your Project <ArrowIcon />
            </Link>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-8 rounded-3xl border border-ink/10 bg-white/60 p-10 sm:grid-cols-4 lg:grid-cols-2">
            <RevealItem><StatCounter value={120} suffix="+" label="Homes Designed" /></RevealItem>
            <RevealItem><StatCounter value={9} suffix="" label="Years of Practice" /></RevealItem>
            <RevealItem><StatCounter value={4} suffix="" label="Cities Served" /></RevealItem>
            <RevealItem><StatCounter value={98} suffix="%" label="Client Satisfaction" /></RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-20 bg-cream-200/60 py-24">
        <div className="container-x">
          <Reveal className="max-w-xl">
            <p className="eyebrow">What We Offer</p>
            <h2 className="heading-lg mt-4">A complete design service, start to finish</h2>
            <p className="mt-5 leading-relaxed text-ink/70">
              Every service below can stand alone or come together as one seamless project —
              you tell us where you need the most help.
            </p>
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {services.slice(0, 6).map((service) => (
              <RevealItem key={service.slug}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group block h-full rounded-2xl border border-ink/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-maroon-50 text-maroon-600 transition-colors duration-300 group-hover:bg-maroon-600 group-hover:text-cream-50">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-serif text-xl text-ink">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/65">{service.description}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.1} className="mt-12 flex justify-center">
            <Link to="/services" className="btn-outline">
              Show More Services <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="py-24">
        <div className="container-x flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow">Recent Work</p>
            <h2 className="heading-lg mt-4">Featured projects</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="btn-outline">
              View All Projects <ArrowIcon />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="container-x mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {projects.slice(0, 6).map((project) => (
            <RevealItem key={project.slug}>
              <Link to={`/projects#${project.slug}`} className="group block overflow-hidden rounded-2xl">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-serif text-lg text-ink">{project.title}</h3>
                  <p className="mt-1 text-sm text-ink/55">{project.location} · {project.type}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* GALLERY TEASER */}
      <section className="bg-ink py-24">
        <div className="container-x flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="eyebrow text-maroon-400">Browse By Room</p>
            <h2 className="heading-lg mt-4 text-cream-50">Explore the full design gallery</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/gallery" className="btn-primary">
              Open Gallery <ArrowIcon />
            </Link>
          </Reveal>
        </div>

        <RevealGroup className="container-x mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" stagger={0.05}>
          {[
            { slug: 'living-room', label: 'Living Room', img: pexelsImage(20390760, 700, 900) },
            { slug: 'master-bedroom', label: 'Master Bedroom', img: pexelsImage(8135502, 700, 900) },
            { slug: 'modular-kitchen', label: 'Modular Kitchen', img: pexelsImage(15062155, 700, 900) },
            { slug: 'dining-room', label: 'Dining Room', img: pexelsImage(22702955, 700, 900) },
            { slug: 'wardrobe', label: 'Wardrobe', img: pexelsImage(6782348, 700, 900) },
            { slug: 'foyer', label: 'Foyer', img: pexelsImage(7546771, 700, 900) },
          ].map((item) => (
            <RevealItem key={item.slug}>
              <Link to={`/gallery?category=${item.slug}`} className="group relative block aspect-[3/4] overflow-hidden rounded-xl">
                <img src={item.img} alt={item.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute bottom-3 left-3 text-sm font-medium text-cream-50">{item.label}</span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="scroll-mt-20 py-24">
        <Reveal className="container-x max-w-xl">
          <p className="eyebrow">Client Stories</p>
          <h2 className="heading-lg mt-4">What homeowners say about working with us</h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            50 reviews from real projects across Bengaluru, Chennai, Hyderabad, Pune and Mumbai.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <ReviewCarousel reviews={featuredReviews} />
        </Reveal>

        <Reveal delay={0.15} className="container-x mt-12 flex justify-center">
          <Link to="/reviews" className="btn-outline">
            Show More Reviews <ArrowIcon />
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container-x py-24">
        <Reveal className="max-w-xl">
          <p className="eyebrow">Good to Know</p>
          <h2 className="heading-lg mt-4">Frequently asked questions</h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            Answers to what most homeowners ask before their first consultation.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <FAQAccordion items={faqs} />
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-maroon-600 px-8 py-16 text-center sm:px-16">
            <h2 className="heading-lg text-cream-50">Ready to see your home transformed?</h2>
            <p className="mx-auto mt-4 max-w-md text-cream-100/85">
              Book a free design consultation and get a customised quote within 48 hours.
            </p>
            <Link to="/contact" className="btn-primary mt-8 bg-ink hover:bg-cream-50 hover:text-ink">
              Schedule Free Consultation <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
