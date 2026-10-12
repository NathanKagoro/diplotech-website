import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Client Support & Call Centre - Diplotech Solutions',
  description: 'Responsive support operations for government, NGOs, and institutional service delivery.',
}

// Renders client support and call centre capabilities.
export default function ClientSupportPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Responsive support operations that strengthen service delivery"
          subheading="We manage client-facing support at scale, across time zones and languages, with institutional reliability."
          background="teal"
          imageSrc="/headers/services-support.jpg"
          imageAlt="Client support team in operations center"
        />

        {/* Capabilities */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="CAPABILITIES"
              heading="Full-spectrum support operations"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: 'Client Support Handling', desc: 'Responsive, professional client interaction' },
                { title: 'Help Desk Coordination', desc: 'Organized ticket management and resolution' },
                { title: 'Multilingual Support', desc: 'Global communication across languages' },
                { title: 'Issue Routing', desc: 'Intelligent escalation and resolution pathways' },
                { title: 'Reporting & Monitoring', desc: 'Service metrics and performance transparency' },
              ].map((cap, i) => (
                <div key={i} className="bg-surface-light p-6 rounded-lg border border-border text-center card-lift surface-pattern info-card">
                  <h4 className="text-heading font-display font-bold mb-3">{cap.title}</h4>
                  <p className="text-body text-sm text-callout">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Operating Model */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <SectionHeading
              eyebrow="OPERATING MODEL"
              heading="How we deliver support at scale"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
              {[
                { title: 'Remote Support', desc: 'Global teams delivering 24/7 support coverage' },
                { title: 'Distributed Teams', desc: 'Multi-location operations for reliability' },
                { title: 'SLA-Oriented', desc: 'Clear commitments and performance accountability' },
                { title: 'Scalable Structure', desc: 'Flexible sizing to match organizational need' },
              ].map((model, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border card-lift info-card">
                  <h4 className="text-heading font-display font-bold mb-3">{model.title}</h4>
                  <p className="text-body text-sm text-callout">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal Use Cases */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="USE CASES"
              heading="Where we excel"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Public Service Support',
                  desc: 'Help desk and citizen support for government digital services',
                  items: ['High-volume handling', 'Multilingual capabilities', 'Government compliance'],
                },
                {
                  title: 'NGO Programme Operations',
                  desc: 'Support for complex NGO programme delivery and stakeholder management',
                  items: ['Programme tracking', 'Beneficiary support', 'Partner coordination'],
                },
                {
                  title: 'Customer-Facing Technical Support',
                  desc: 'Technical support for customer-facing applications and platforms',
                  items: ['Technical troubleshooting', 'User onboarding', 'Knowledge management'],
                },
                {
                  title: 'Internal Support Desks',
                  desc: 'IT and operational help desk support for large organizations',
                  items: ['Employee support', 'Asset management', 'Incident tracking'],
                },
              ].map((useCase, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border card-lift info-card content-theme-panel-soft">
                  <h4 className="text-heading font-display font-bold mb-2">{useCase.title}</h4>
                  <p className="text-body mb-4 text-sm text-callout">{useCase.desc}</p>
                  <ul className="space-y-2">
                    {useCase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-body text-sm">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="section-padding bg-heading text-white">
          <div className="container-x">
            <h2 className="text-white font-display font-bold text-center mb-12 text-4xl">Why organizations choose Diplotech for support</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="info-card-dark p-6">
                <h4 className="text-white font-display font-bold mb-4">Institutional Reliability</h4>
                <p className="text-gray-200 text-callout">
                  We understand the requirements of government and institutional environments—security, compliance, consistency, and accountability.
                </p>
              </div>
              <div className="info-card-dark p-6">
                <h4 className="text-white font-display font-bold mb-4">Operational Excellence</h4>
                <p className="text-gray-200 text-callout">
                  Clear metrics, transparent reporting, and continuous improvement ensure support actually improves service delivery.
                </p>
              </div>
              <div className="info-card-dark p-6">
                <h4 className="text-white font-display font-bold mb-4">Global Reach, Local Care</h4>
                <p className="text-gray-200 text-callout">
                  We deliver support at global scale while maintaining the attention to detail that each client and end-user deserves.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Ready to strengthen your support operations?"
          buttonText="Get in Touch"
          buttonHref="/contact"
          background="gold"
        />
      </main>
      <Footer />
    </>
  )
}
