'use client'

import { motion } from 'framer-motion'
import { Smartphone, Instagram, FileText, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'The $0 Startup Method',
    description: 'How to make bank with your phone even if nobody knows you yet. Start earning with zero upfront investment.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: Instagram,
    title: 'The 1-Hour Daily Scroll',
    description: 'The exact Instagram strategy that builds income while you sleep. Turn scrolling into a revenue stream.',
    gradient: 'from-accent-purple to-accent-pink',
  },
  {
    icon: FileText,
    title: 'The Plug-and-Play Blueprint',
    description: 'Step-by-step system for building a page that works 24/7. Your digital storefront that never closes.',
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function Features() {
  return (
    <section id="methods" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transform Your <span className="text-gradient">Digital Presence</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three proven methods that have helped thousands of creators build sustainable online income streams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-effect rounded-3xl p-8 h-full hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>

                <button className="flex items-center space-x-2 text-accent-purple hover:text-accent-pink transition-colors">
                  <span className="text-sm font-medium">Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}