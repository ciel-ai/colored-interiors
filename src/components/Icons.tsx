interface IconProps {
  className?: string
}

const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const paths: Record<string, JSX.Element> = {
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9" />
    </>
  ),
  layout: (
    <>
      <rect x="3.5" y="4" width="17" height="16" rx="1.5" />
      <path d="M3.5 9.5h17M9 9.5V20" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5h16v11H8l-4 4V5Z" />
      <path d="M8 9.5h8M8 13h5" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6.5 6.5 0 0 0-3.6 11.9c.6.4 1 1.1 1 1.9v.7h5.2v-.7c0-.8.4-1.5 1-1.9A6.5 6.5 0 0 0 12 3Z" />
    </>
  ),
  sofa: (
    <>
      <path d="M5 12V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4" />
      <path d="M3.5 12h17v4a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-4Z" />
      <path d="M4 17v2M20 17v2" />
    </>
  ),
  frame: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <circle cx="9.5" cy="10" r="1.5" />
      <path d="M5 18l5-5 3 3 3-4 3 6" />
    </>
  ),
  palette: (
    <>
      <path d="M12 3.5a8.5 8.5 0 1 0 0 17c1 0 1.6-.6 1.6-1.4 0-.4-.15-.7-.4-1-.25-.3-.4-.6-.4-1 0-.8.6-1.4 1.4-1.4H16a3 3 0 0 0 3-3c0-4.8-3.6-8.2-7-8.2Z" />
      <circle cx="8.2" cy="10.2" r="1" fill="currentColor" />
      <circle cx="8.2" cy="14.2" r="1" fill="currentColor" />
      <circle cx="12" cy="7.8" r="1" fill="currentColor" />
      <circle cx="15.8" cy="10.2" r="1" fill="currentColor" />
    </>
  ),
  hammer: (
    <>
      <path d="m14 7 3.5-3.5 2.5 2.5L16.5 9.5" />
      <path d="m13 8-9 9 2 2 9-9" />
      <path d="m11.5 9.5 3 3" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5.5" y="5" width="13" height="16" rx="1.5" />
      <rect x="9" y="3" width="6" height="3.5" rx="1" />
      <path d="M8.5 12h7M8.5 15.5h7" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8a4 4 0 0 0 4 4 4 4 0 0 0-4 4 4 4 0 0 0-4-4 4 4 0 0 0 4-4Z" />
    </>
  ),
}

export default function Icon({ name, className = 'h-7 w-7' }: { name: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      {paths[name] ?? paths.home}
    </svg>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...common}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function StarIcon({ className = 'h-4 w-4', filled = true }: IconProps & { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={filled ? '#7a1522' : 'none'} stroke="#7a1522" strokeWidth={1.2}>
      <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
    </svg>
  )
}
