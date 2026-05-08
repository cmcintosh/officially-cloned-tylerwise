'use client'

import Link from 'next/link'
import { Zap, Twitter, Instagram, Youtube, Mail } from 'lucide-react'

const footerLinks = {
  product: [
    { label: 'Free Training', href: '#training' },
    { label: 'Claude Prompts', href: '/claude-prompts' },
    { label: 'Success Stories', href: '#' },
    { label: 'Pricing', href: '#' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Guides', href: '#' },
    { label: 'Templates', href: '#' },
    { label: 'Tools', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Contact', href: 'mailto:cmcintosh@wembassy.com' },
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
  ],
}

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Mail, href: 'mailto:cmcintosh@wembassy.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-accent-purple" />
              <span className="font-bold text-xl">Online<span className="text-gradient">Income</span></span>
            </Link>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Helping creators transform their skills into sustainable online income streams since 2024.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2025 OnlineIncome. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Built with ❤️ by <a href="mailto:cmcintosh@wembassy.com" className="text-accent-purple hover:underline">Wembassy</a>
          </p>
        </div>
      </div>
    </footer>
  )
}