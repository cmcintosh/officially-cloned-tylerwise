'use client'

import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, Clock } from 'lucide-react'
import EmailCapture from './EmailCapture'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-gradient">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-accent-pink" />
            <span className="text-sm text-gray-300">New: 2025 Income Strategies</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            The Ultimate Guide to
            <br />
            <span className="text-gradient">Scaling Your Online Presence</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Discover how entrepreneurs, influencers, and creators are turning their skills & passions into 
            <span className="text-white font-semibold">full-time income online</span>. 
            With just 1 hour a day, learn the strategies to create a digital presence that runs on autopilot.
          </p>
        </motion.div>

        {/* Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <EmailCapture variant="hero" />
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { icon: Clock, label: 'Time Required', value: '1 Hour/Day' },
            { icon: TrendingUp, label: 'Income Potential', value: '$5K+/Month' },
            { icon: Sparkles, label: 'Experience Needed', value: 'Zero to Hero' },
          ].map((stat, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-accent-purple mx-auto mb-3" />
              <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}