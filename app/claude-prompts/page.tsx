'use client'

import { motion } from 'framer-motion'
import { Star, Sparkles, Mail, ArrowRight, Zap, Check } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

interface Prompt {
  id: string
  title: string
  prompt: string
  description: string
  benefit: string
  rating: number
  category: string
}

const claudePrompts: Prompt[] = [
  {
    id: '1',
    title: 'FIND YOUR FIRST $1,000 SKILL',
    category: 'Getting Started',
    prompt: 'Analyze my background: [list your skills/jobs/hobbies]. Identify the top 3 skills I could monetize THIS WEEK. For each, give me: who pays for it, what to charge, and the exact first step to land a client.',
    description: 'This prompt helps you identify monetizable skills you already possess and creates an actionable roadmap to start earning immediately.',
    benefit: 'People pay $500-$2,000/month for skills you already have.',
    rating: 5,
  },
  {
    id: '2',
    title: 'BUILD A FREELANCE OFFER IN 10 MINUTES',
    category: 'Freelancing',
    prompt: 'Create a high-converting freelance service offer for [your skill]. Include: a compelling package name, what\'s included, pricing tiers (starter/pro/premium), and a one-paragraph pitch I can paste into Upwork or cold DMs.',
    description: 'Most freelancers fail because their offer is weak. This prompt helps you craft a compelling, structured service offering that converts.',
    benefit: 'Most freelancers fail because their offer is weak. This fixes it.',
    rating: 5,
  },
  {
    id: '3',
    title: 'WRITE YOUR COLD OUTREACH SEQUENCE',
    category: 'Sales',
    prompt: 'Write a 3-message cold outreach sequence to [target client type] offering [your service]. Message 1: curiosity hook. Message 2: social proof + value. Message 3: low-risk CTA. Keep each under 80 words.',
    description: 'Create a professional cold email sequence that warms up prospects and drives responses without being spammy.',
    benefit: 'Agencies charge $3,000+ to write this for you. Claude does it free.',
    rating: 5,
  },
  {
    id: '4',
    title: 'CREATE A DIGITAL PRODUCT FROM SCRATCH',
    category: 'Products',
    prompt: 'I know a lot about [your niche/skill]. Help me design a digital product (template, guide, or mini-course) I can sell for $27-$97. Give me: the title, 5 key sections, what transformation it promises, and where to sell it.',
    description: 'Turn your knowledge into a sellable digital asset with clear structure, pricing, and market positioning.',
    benefit: 'One good digital product = income while you sleep.',
    rating: 5,
  },
  {
    id: '5',
    title: 'REVERSE-ENGINEER A PROFITABLE NICHE',
    category: 'Strategy',
    prompt: 'Research the top 5 most profitable online niches for a solo creator in 2025. For each, show me: average income potential, easiest entry point, best platform to monetize on, and one underserved angle I could own.',
    description: 'Skip months of trial and error by identifying proven, profitable niches with clear paths to monetization.',
    benefit: 'Picking the right niche saves you 6 months of wasted effort.',
    rating: 4,
  },
  {
    id: '6',
    title: 'BUILD A CONTENT STRATEGY THAT ATTRACTS CLIENTS',
    category: 'Marketing',
    prompt: 'I\'m a [your role] targeting [your audience] on [platform]. Create a 30-day content plan designed to attract inbound leads. Include: 4 content pillars, 2 post ideas per pillar per week, and a weekly CTA rotation.',
    description: 'Replace cold calling with warm inbound leads through strategic content that positions you as an authority.',
    benefit: 'Content is the new cold call. This is your script.',
    rating: 5,
  },
  {
    id: '7',
    title: 'TURN YOUR KNOWLEDGE INTO A PAID NEWSLETTER',
    category: 'Recurring Revenue',
    prompt: 'Help me launch a paid newsletter about [your topic]. Include: a compelling name, a one-sentence value prop, 3 free vs. paid tier breakdowns, suggested price point, and the outline for my first 3 paid issues.',
    description: 'Build predictable recurring revenue by packaging your expertise into a subscription newsletter format.',
    benefit: '100 subscribers at $10/month = $1,000/month recurring.',
    rating: 5,
  },
  {
    id: '8',
    title: 'MAP OUT A 90-DAY INCOME PLAN',
    category: 'Planning',
    prompt: 'I\'m starting from $0 online. My skills are [list them]. Create a realistic 90-day income plan broken into 3 phases: (1) First $500, (2) First $2,000/month, (3) First $5,000/month. Include specific actions for each phase.',
    description: 'Get a clear, phase-by-phase roadmap from zero to consistent monthly income with specific milestones.',
    benefit: 'Stop guessing. Start executing with a real roadmap.',
    rating: 5,
  },
  {
    id: '9',
    title: 'AUTOMATE YOUR FOLLOW-UP SYSTEM',
    category: 'Systems',
    prompt: 'Build me a simple follow-up system for freelance leads. Include: a CRM tracker template (text format), follow-up message templates for days 3, 7, and 14, and a re-engagement message for cold leads after 30 days.',
    description: 'Never lose a potential client to forgetfulness with a systematic follow-up process that converts leads.',
    benefit: '80% of sales happen after the 5th follow-up. Most people quit at 1.',
    rating: 4,
  },
  {
    id: '10',
    title: 'CREATE YOUR PERSONAL BRAND IN ONE HOUR',
    category: 'Branding',
    prompt: 'Help me build a personal brand around [your skill/story]. Give me: a one-line bio, a content POV statement, 3 brand pillars, my ideal client avatar, and a \'signature story\' framework I can use in my content.',
    description: 'Establish a memorable personal brand that attracts your ideal clients and differentiates you from competitors.',
    benefit: 'People buy from people. Your brand is your moat.',
    rating: 5,
  },
]

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  )
}

export default function ClaudePrompts() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-hero-gradient">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-pink/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-accent-pink" />
              <span className="text-sm text-gray-300">10 Proven Money-Making Prompts</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Claude <span className="text-gradient">Money Making</span> Prompts
            </h1>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
              Copy-paste these 10 powerful AI prompts to accelerate your journey from $0 to $5,000/month. 
              Each prompt is rated, tested, and ready to generate income-generating content.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#prompts"
                className="bg-gradient-to-r from-accent-purple to-accent-pink px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
              >
                <span>View All Prompts</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:cmcintosh@wembassy.com"
                className="glass-effect px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Get Automation Help</span>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { value: '10', label: 'Tested Prompts' },
              { value: '4.7', label: 'Avg. Rating' },
              { value: '$5K+', label: 'Monthly Potential' },
              { value: '100%', label: 'Free Access' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prompts Grid */}
      <section id="prompts" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {claudePrompts.map((prompt, index) => (
              <motion.div
                key={prompt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-accent-purple/20 text-accent-purple text-xs font-medium px-3 py-1 rounded-full">
                        {prompt.category}
                      </span>
                      <RatingStars rating={prompt.rating} />
                    </div>
                    <Zap className="w-5 h-5 text-yellow-400" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{prompt.title}</h3>

                  <div className="bg-black/30 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-300 font-mono leading-relaxed">
                      {prompt.prompt}
                    </p>
                  </div>

                  <p className="text-gray-400 text-sm mb-4">{prompt.description}</p>

                  <div className="bg-accent-purple/10 border border-accent-purple/20 rounded-xl p-4 mb-4">
                    <div className="flex items-center space-x-2 mb-1">
                      <Check className="w-4 h-4 text-accent-purple" />
                      <span className="text-sm font-medium text-accent-purple">Why it works</span>
                    </div>
                    <p className="text-sm text-gray-300">{prompt.benefit}</p>
                  </div>

                  <button
                    onClick={() => handleCopy(prompt.prompt, prompt.id)}
                    className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl py-3 text-sm font-medium transition-colors flex items-center justify-center space-x-2"
                  >
                    {copiedId === prompt.id ? (
                      <>
                        <Check className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <span>Copy to Clipboard</span>
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-pink/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-accent-pink rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want To <span className="text-gradient">Automate</span> These Prompts?
              </h2>

              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Imagine having these money-making prompts run automatically, generating content, 
                leads, and income while you sleep. OpenClaw makes it possible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:cmcintosh@wembassy.com"
                  className="bg-gradient-to-r from-accent-purple to-accent-pink px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact cmcintosh@wembassy.com</span>
                </a>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
                {[
                  { title: 'Automated Content', desc: 'Generate blog posts, social content, and emails on autopilot' },
                  { title: 'Lead Generation', desc: 'Set up systems that find and nurture leads 24/7' },
                  { title: 'Custom Workflows', desc: 'Tailored automation built specifically for your business' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-accent-purple" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{feature.title}</p>
                      <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}