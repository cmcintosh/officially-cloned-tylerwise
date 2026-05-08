'use client'

import { useState } from 'react'
import { Mail, ArrowRight, CheckCircle } from 'lucide-react'

interface EmailCaptureProps {
  variant?: 'hero' | 'inline' | 'compact'
  title?: string
  subtitle?: string
  buttonText?: string
}

export default function EmailCapture({
  variant = 'hero',
  title = 'Join 1,133+ people who started their income journey',
  subtitle = 'Free training — no strings attached.',
  buttonText = 'Get Instant Access',
}: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  const baseClasses = {
    hero: 'max-w-xl mx-auto',
    inline: 'max-w-lg',
    compact: 'max-w-md',
  }

  return (
    <div className={baseClasses[variant]}>
      {title && variant !== 'compact' && (
        <h3 className="text-center text-lg md:text-xl font-semibold mb-2">{title}</h3>
      )}
      {subtitle && variant !== 'compact' && (
        <p className="text-center text-gray-400 text-sm mb-6">{subtitle}</p>
      )}

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <Mail className="absolute left-4 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full pl-12 pr-32 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all"
            required
          />
          <button
            type="submit"
            disabled={isSubmitted}
            className="absolute right-2 bg-gradient-to-r from-accent-purple to-accent-pink px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-70 flex items-center space-x-2"
          >
            {isSubmitted ? (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Sent!</span>
              </>
            ) : (
              <>
                <span>{buttonText}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>

      <p className="text-center text-xs text-gray-500 mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  )
}