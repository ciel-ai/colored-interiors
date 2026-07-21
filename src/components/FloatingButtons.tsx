import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '917845474629'
const PHONE_NUMBER = '+917845474629'

export default function FloatingButtons() {
  return (
    <>
      {/* Right-edge vertical "Get Quote" tab */}
      <motion.div
        className="fixed right-0 top-1/2 z-40"
        initial={{ x: 60, opacity: 0, y: '-50%' }}
        animate={{ x: 0, opacity: 1, y: '-50%' }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/contact"
          className="flex flex-col items-center gap-2 rounded-l-xl bg-maroon-600 px-2.5 py-4 text-cream-50 shadow-soft transition-colors hover:bg-ink"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span className="text-base leading-none">₹</span>
          <span className="text-xs font-medium tracking-widest2 uppercase">Get Quote</span>
        </Link>
      </motion.div>

      {/* Bottom-right: WhatsApp only */}
      <div className="fixed bottom-5 right-5 z-40">
        <motion.a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi! I would like a free design consultation.')}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 18 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor">
            <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.362.687 4.564 1.874 6.417L4 29l7.77-1.833A11.94 11.94 0 0 0 16 27c6.627 0 12-5.373 12-12S22.628 3 16.001 3Zm0 21.6c-1.99 0-3.845-.58-5.402-1.578l-.388-.243-4.61 1.088 1.117-4.49-.257-.4A9.56 9.56 0 0 1 5.4 15c0-5.302 4.298-9.6 9.6-9.6 5.301 0 9.6 4.298 9.6 9.6 0 5.301-4.299 9.6-9.6 9.6Zm5.264-7.19c-.288-.144-1.706-.842-1.97-.938-.264-.096-.456-.144-.648.144-.192.288-.744.938-.912 1.13-.168.192-.336.216-.624.072-.288-.144-1.216-.448-2.317-1.43-.857-.764-1.436-1.708-1.604-1.996-.168-.288-.018-.444.126-.588.13-.129.288-.336.432-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.648-1.562-.888-2.14-.234-.562-.472-.486-.648-.495-.168-.008-.36-.01-.552-.01-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.403 0 1.417 1.032 2.786 1.176 2.978.144.192 2.03 3.1 4.917 4.347.687.296 1.223.474 1.641.607.689.219 1.316.188 1.812.114.553-.082 1.706-.697 1.946-1.371.24-.673.24-1.25.168-1.371-.072-.12-.264-.192-.552-.336Z" />
          </svg>
        </motion.a>
      </div>

      {/* Bottom edge, horizontally centered: Call Us */}
      <motion.div
        className="fixed bottom-5 left-1/2 z-40"
        initial={{ y: 40, opacity: 0, x: '-50%' }}
        animate={{ y: 0, opacity: 1, x: '-50%' }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-cream-50 shadow-soft transition-transform duration-200 hover:scale-105"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#25D366">
            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.25 1.01l-2.2 2.21Z" />
          </svg>
          Call Us
        </a>
      </motion.div>
    </>
  )
}
