'use client'

import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import EmailCapture from './EmailCapture'

export default function CTASection() {
  return (
    <section id="cta" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your <span className="text-gradient">Income Journey</span> Today
            </h2>

            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Get instant access to our complete training system. No credit card required. 
              Join 1,133+ people who have already started building their online income.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <EmailCapture variant="compact" buttonText="Start Now" />
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}