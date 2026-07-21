import Reveal from '../components/Reveal'
import ContactForm from '../components/ContactForm'

const details = [
  { label: 'Studio Address', value: '6, Veshran, Gopinath Gardens, Kanathurreddikuppam, Chennai 603112' },
  { label: 'Phone', value: '+91 78454 74629' },
  { label: 'Email', value: 'Info.coloredinteriors@gmail.com' },
  { label: 'Studio Hours', value: 'Mon – Sat, 10:00 AM – 7:00 PM' },
  { label: 'GSTIN', value: '33AAVFC8674K1ZN' },
]

export default function Contact() {
  return (
    <div className="pt-32">
      <section className="container-x pb-16 text-center">
        <Reveal>
          <p className="eyebrow">Contact Us</p>
          <h1 className="heading-xl mt-4">Let's design your next home</h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-ink/70">
            Tell us a little about your property and we’ll get back to you with a free,
            no-obligation design consultation and quote.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-12 pb-28 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <Reveal className="space-y-8">
          {details.map((d) => (
            <div key={d.label} className="border-b border-ink/10 pb-6">
              <p className="text-xs font-semibold uppercase tracking-widest2 text-ink/45">{d.label}</p>
              <p className="mt-2 font-serif text-lg text-ink">{d.value}</p>
            </div>
          ))}

          <div className="flex gap-3 pt-2">
            <a
              href="https://wa.me/917845474629"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              Message on WhatsApp
            </a>
            <a href="tel:+917845474629" className="btn-outline">
              Call Now
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </div>
  )
}
