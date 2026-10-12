'use client'

import Link from 'next/link'
import { useState } from 'react'

// Renders the primary site navigation.
export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <nav className="container-x flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl text-heading hover:text-brand-dark transition-colors">
          <div className="w-8 h-8 bg-brand-dark rounded"></div>
          Diplotech
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/about" className="text-body hover:text-brand-dark transition-colors font-medium">
            About Us
          </Link>

          <div className="relative group">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-body hover:text-brand-dark transition-colors font-medium flex items-center gap-1"
            >
              Services
              <span className="text-xs">{(servicesOpen || true) ? '▼' : '▼'}</span>
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block bg-white border border-border rounded-lg shadow-lg min-w-64">
              <Link href="/services/software-development" className="block px-4 py-3 text-body hover:bg-surface-light transition-colors">
                Software Development & Consultancy
              </Link>
              <Link href="/services/it-recruitment" className="block px-4 py-3 text-body hover:bg-surface-light transition-colors border-t border-border">
                IT Recruitment & Project Management
              </Link>
              <Link href="/services/client-support" className="block px-4 py-3 text-body hover:bg-surface-light transition-colors border-t border-border">
                Client Support & Call Centre
              </Link>
            </div>
          </div>

          <Link href="/industries" className="text-body hover:text-brand-dark transition-colors font-medium">
            Industries
          </Link>
          <Link href="/partners" className="text-body hover:text-brand-dark transition-colors font-medium">
            Partners
          </Link>
          <Link href="/insights" className="text-body hover:text-brand-dark transition-colors font-medium">
            Insights
          </Link>
          <Link href="/careers" className="text-body hover:text-brand-dark transition-colors font-medium">
            Careers
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-brand-dark"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-brand-dark mb-1"></span>
          <span className="block w-6 h-0.5 bg-brand-dark mb-1"></span>
          <span className="block w-6 h-0.5 bg-brand-dark"></span>
        </button>

        <Link href="/contact" className="btn-primary hidden lg:inline-flex">
          Contact Us
        </Link>
      </nav>
      {/* Mobile menu drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-end lg:hidden">
          <div className="w-72 bg-white h-full shadow-lg p-6 flex flex-col">
            <button
              className="self-end mb-6 w-8 h-8 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-brand-dark"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="block w-6 h-0.5 bg-brand-dark rotate-45 absolute"></span>
              <span className="block w-6 h-0.5 bg-brand-dark -rotate-45"></span>
            </button>
            <Link href="/about" className="py-3 text-body font-medium hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <div className="relative">
              <button
                className="py-3 text-body font-medium flex items-center gap-1 w-full text-left hover:text-brand-dark"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <span className="text-xs">▼</span>
              </button>
              {servicesOpen && (
                <div className="ml-4 border-l border-border pl-4 flex flex-col">
                  <Link href="/services/software-development" className="py-2 text-body hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
                    Software Development & Consultancy
                  </Link>
                  <Link href="/services/it-recruitment" className="py-2 text-body hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
                    IT Recruitment & Project Management
                  </Link>
                  <Link href="/services/client-support" className="py-2 text-body hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
                    Client Support & Call Centre
                  </Link>
                </div>
              )}
            </div>
            <Link href="/industries" className="py-3 text-body font-medium hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
              Industries
            </Link>
            <Link href="/partners" className="py-3 text-body font-medium hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
              Partners
            </Link>
            <Link href="/insights" className="py-3 text-body font-medium hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </Link>
            <Link href="/careers" className="py-3 text-body font-medium hover:text-brand-dark" onClick={() => setMobileMenuOpen(false)}>
              Careers
            </Link>
            <Link href="/contact" className="btn-primary mt-6" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
