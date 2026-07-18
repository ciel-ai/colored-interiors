interface LogoProps {
  variant?: 'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  const base = variant === 'dark' ? 'text-ink' : 'text-cream-50'
  const sub = variant === 'dark' ? 'text-ink/70' : 'text-cream-100/80'
  const accent = 'text-[#DC143C]'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="grid leading-none">
        <div className={`font-serif text-[2.2rem] leading-none tracking-tight ${base}`}>
          <span>colo</span>
          <span className={accent}>r</span>
          <span>ed</span>
        </div>
        <div className={`mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] ${sub}`}>
          Interior Designs
        </div>
      </div>
    </div>
  )
}
