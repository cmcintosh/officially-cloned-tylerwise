'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Former Teacher',
    result: '$4,200/month',
    quote: 'I went from $0 to my first $1,000 in 45 days using the $0 startup method. Now I work from home and spend more time with my kids.',
    rating: 5,
  },
  {
    name: 'Marcus T.',
    role: 'College Student',
    result: '$2,800/month',
    quote: 'The Instagram strategy changed everything. I built a following of 50K and now brands pay me to post. Best part? It takes 1 hour a day.',
    rating: 5,
  },
  {
    name: 'Jennifer K.',
    role: 'Marketing Manager',
    result: '$6,500/month',
    quote: 'I thought I needed to quit my job to start. Wrong. I built my side hustle to 6 figures while working full-time. The blueprint works.',
    rating: 5,
  },
]

const stats = [
  { value: '1,133+', label: 'Students Enrolled' },
  { value: '$2.4M+', label: 'Student Earnings' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '97%', label: 'Success Rate' },
]

export default function SocialProof() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real People, <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of creators who have transformed their skills into sustainable income streams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-accent-purple/20" />
                <p className="text-gray-300 italic relative z-10">{testimonial.quote}</p>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Now earning</p>
                  <p className="font-bold text-accent-purple">{testimonial.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}