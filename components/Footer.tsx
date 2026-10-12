import Link from 'next/link'

// Renders the site footer links and contact details.
export function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="container-x section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <h4 className="text-white font-display font-bold mb-4">Diplotech Solutions</h4>
            <p className="text-sm text-gray-300 mb-4">
              Bridging diplomacy and technology for global impact. Strategic consultancy for governments, NGOs, and private sector.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-white font-display font-bold mb-4">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services/software-development" className="text-gray-300 hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services/it-recruitment" className="text-gray-300 hover:text-white transition-colors">IT Recruitment</Link></li>
              <li><Link href="/services/client-support" className="text-gray-300 hover:text-white transition-colors">Client Support</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-white font-display font-bold mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/partners" className="text-gray-300 hover:text-white transition-colors">Partners</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-white font-display font-bold mb-4">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><Link href="/insights" className="text-gray-300 hover:text-white transition-colors">Insights & Blog</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Client Portal (Coming Soon)</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Diplotech Solutions. All rights reserved.</p>
          <p>Bridging diplomacy, technology, and strategy for global impact.</p>
        </div>
      </div>
    </footer>
  )
}
