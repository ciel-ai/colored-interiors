import { Link } from 'react-router-dom'
import Logo from './Logo'
import { galleryCategories } from '../data/categories'
import { RevealGroup, RevealItem } from './Reveal'

export default function Footer() {
  return (
    <footer className="bg-ink text-cream-100">
      <RevealGroup className="container-x grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
        <RevealItem>
          <Logo variant="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
            Neat, considered interiors designed around how you live — from first sketch to final styling.
          </p>
        </RevealItem>

        <RevealItem>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-cream-100/50">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link className="hover:text-maroon-400" to="/">Home</Link></li>
            <li><Link className="hover:text-maroon-400" to="/services">Services</Link></li>
            <li><Link className="hover:text-maroon-400" to="/projects">Projects</Link></li>
            <li><Link className="hover:text-maroon-400" to="/gallery">Gallery</Link></li>
            <li><Link className="hover:text-maroon-400" to="/reviews">Reviews</Link></li>
            <li><Link className="hover:text-maroon-400" to="/contact">Contact</Link></li>
          </ul>
        </RevealItem>

        <RevealItem>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-cream-100/50">Design Categories</h4>
          <ul className="mt-4 grid grid-cols-1 gap-2.5 text-sm">
            {galleryCategories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link className="hover:text-maroon-400" to={`/gallery?category=${c.slug}`}>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </RevealItem>

        <RevealItem>
          <h4 className="text-xs font-semibold uppercase tracking-widest2 text-cream-100/50">Get In Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-cream-100/80">
            <li>Bengaluru · Chennai · Hyderabad · Pune</li>
            <li>
              <a className="hover:text-maroon-400" href="tel:+911234567890">+91 12345 67890</a>
            </li>
            <li>
              <a className="hover:text-maroon-400" href="mailto:hello@colored-interiors.com">
                hello@colored-interiors.com
              </a>
            </li>
          </ul>
        </RevealItem>
      </RevealGroup>

      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col items-center justify-between gap-3 text-xs text-cream-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} colored Interior Designs. All rights reserved.</p>
          <p>Designed with care for every home.</p>
        </div>
      </div>
    </footer>
  )
}
