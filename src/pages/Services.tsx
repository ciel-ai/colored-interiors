import { Link } from 'react-router-dom'
import Reveal, { RevealGroup, RevealItem } from '../components/Reveal'
import Icon, { ArrowIcon } from '../components/Icons'
import { services } from '../data/services'

export default function Services() {
  return (
    <div className="pt-32">
      <section className="container-x pb-16 text-center">
        <Reveal>
          <p className="eyebrow">What We Offer</p>
          <h1 className="heading-xl mt-4">A complete design service, start to finish</h1>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-ink/70">
            Every service below can stand alone or come together as one seamless project — you
            tell us where you need the most help.
          </p>
        </Reveal>
      </section>

      <section className="container-x pb-24">
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {services.map((service) => (
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
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-maroon-600">
                  Learn more <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-12 flex justify-center">
          <Link to="/contact" className="btn-primary">
            Get Free Consultation <ArrowIcon />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
