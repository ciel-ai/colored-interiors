import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only the home page opens on a full-bleed photo behind the header;
  // every other page starts on the plain cream background, so dark text
  // already reads fine there even before scrolling.
  const overHero = pathname === '/' && !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/90 shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {overHero && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/45 to-transparent" />
      )}
      <div className="container-x relative flex h-20 items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <Logo variant={overHero ? 'light' : 'dark'} />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => {
            const isHashLink = link.to.includes('#')
            const shadow = overHero ? '[text-shadow:0_1px_6px_rgba(0,0,0,0.6)]' : ''
            return (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors hover:text-maroon-500 ${shadow} ${
                    isActive && !isHashLink
                      ? 'text-maroon-500'
                      : overHero
                        ? 'text-cream-50'
                        : 'text-ink/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            )
          })}
        </nav>

        <Link to="/contact" className="btn-primary hidden lg:inline-flex">
          Get Free Consultation
        </Link>

        <button
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className={`block h-[2px] w-6 ${overHero ? 'bg-cream-50' : 'bg-ink'}`}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className={`block h-[2px] w-6 ${overHero ? 'bg-cream-50' : 'bg-ink'}`}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className={`block h-[2px] w-6 ${overHero ? 'bg-cream-50' : 'bg-ink'}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-cream-50 lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 pb-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/85 hover:bg-ink/5"
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
                Get Free Consultation
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
