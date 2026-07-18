import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[70vh] flex-col items-center justify-center pt-32 text-center">
      <p className="eyebrow">404</p>
      <h1 className="heading-lg mt-4">Page not found</h1>
      <p className="mt-4 text-ink/65">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary mt-8">Back to Home</Link>
    </div>
  )
}
