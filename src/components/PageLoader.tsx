import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo from './Logo'

export default function PageLoader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minDuration = new Promise((resolve) => setTimeout(resolve, 1100))
    const pageReady =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) => window.addEventListener('load', resolve, { once: true }))

    Promise.all([minDuration, pageReady]).then(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (loading) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [loading])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-cream-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="scale-[1.4]"
          >
            <Logo />
          </motion.div>

          <div className="mt-9 h-[3px] w-56 overflow-hidden rounded-full bg-ink/10">
            <motion.div
              className="h-full w-full origin-left bg-maroon-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
