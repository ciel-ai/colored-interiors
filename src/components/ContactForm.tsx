import { useState, type FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const locations = ['Bengaluru', 'Chennai', 'Hyderabad', 'Pune', 'Mumbai', 'Other']
const propertyTypes = ['Apartment', 'Villa', 'Independent House', 'Row House', 'Penthouse', 'Office / Commercial']
const requirements = [
  'Full Home Interior',
  'Modular Kitchen',
  'Wardrobe / Storage',
  'Living Room Makeover',
  'Bedroom Design',
  'Renovation & Remodeling',
  'Design Consultation Only',
]

const inputClass =
  'w-full rounded-lg border border-ink/10 bg-ink/[0.04] px-4 py-3.5 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-maroon-600 focus:bg-white'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    if (!form.get('agree')) {
      setError('Please accept the terms and conditions to continue.')
      return
    }
    setError('')
    // NOTE: wire this up to your backend / email service (e.g. Formspree, an API route) in production.
    setSubmitted(true)
  }

  return (
    <div className="card-surface relative overflow-hidden p-8 sm:p-10">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center py-14 text-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-maroon-600 text-cream-50">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
            </div>
            <h3 className="mt-6 font-serif text-2xl text-ink">Thank you!</h3>
            <p className="mt-2 max-w-sm text-sm text-ink/65">
              We've received your request. One of our design consultants will reach out on WhatsApp
              within 24 hours with your customised quote.
            </p>
            <button onClick={() => setSubmitted(false)} className="btn-outline mt-8">
              Submit Another Request
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <h3 className="heading-lg">Schedule a Free Design Consultation</h3>
            <p className="text-sm leading-relaxed text-ink/60">
              Reach out to us immediately to arrange for a customised quotation from one of our assessors.
            </p>

            <div className="grid gap-5 pt-2 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ink/50">Name</span>
                <input required name="name" type="text" placeholder="Jane Smith" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ink/50">
                  WhatsApp Mobile Number
                </span>
                <input required name="phone" type="tel" placeholder="(123) 456-7890" className={inputClass} />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ink/50">
                Where's your property located?
              </span>
              <select required name="location" defaultValue="" className={inputClass}>
                <option value="" disabled>Select...</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>{loc}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ink/50">
                Type of Property
              </span>
              <select required name="propertyType" defaultValue="" className={inputClass}>
                <option value="" disabled>Select...</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest2 text-ink/50">
                Interior Design Requirement
              </span>
              <select required name="requirement" defaultValue="" className={inputClass}>
                <option value="" disabled>Select...</option>
                {requirements.map((req) => (
                  <option key={req} value={req}>{req}</option>
                ))}
              </select>
            </label>

            <label className="flex items-start gap-3 pt-1">
              <input name="agree" type="checkbox" className="mt-1 h-4 w-4 shrink-0 rounded border-ink/30 text-maroon-600 focus:ring-maroon-600" />
              <span className="text-sm text-ink/65">I agree with the terms and conditions</span>
            </label>

            {error && <p className="text-sm text-maroon-600">{error}</p>}

            <button type="submit" className="btn-primary w-full">
              Get Instant Quote
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
