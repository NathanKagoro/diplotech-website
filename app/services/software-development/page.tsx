import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Software Development & Consultancy - Diplotech Solutions',
  description: 'Custom software solutions and digital transformation for governments and institutions.',
}

// Renders software development service details.
export default function SoftwareDevelopmentPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Software solutions and strategic consulting for mission-critical environments"
          subheading="From custom development to transformation advisory, we build digital capabilities that serve public good."
          background="teal"
          imageSrc="/headers/services-software.jpg"
          imageAlt="Software engineering and digital architecture"
          imagePriority
        />

        {/* What We Offer */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="CAPABILITIES"
              heading="What we deliver"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Custom Software Development', desc: 'Bespoke applications tailored to your operational complexity and security requirements' },
                { title: 'Systems Planning', desc: 'Architecture and strategy for integrated digital solutions' },
                { title: 'Digital Transformation Advisory', desc: 'Guidance on modernizing systems and operating models' },
                { title: 'AI-Enabled Workflows', desc: 'Intelligent automation and decision-support capabilities' },
                { title: 'Data-Driven Tools', desc: 'Analytics platforms and reporting systems for informed decision-making' },
                { title: 'UX & Process Design', desc: 'User-centered approaches to technology implementation' },
              ].map((item, i) => (
                <div key={i} className="bg-surface-light p-6 rounded-lg border border-border card-lift surface-pattern">
                  <h4 className="text-heading font-display font-bold mb-2">{item.title}</h4>
                  <p className="text-body text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <SectionHeading
              eyebrow="USE CASES"
              heading="Applications across sectors"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Visa Processing Systems',
                  desc: 'Efficient, secure systems for diplomatic and consular operations',
                  services: ['Custom development', 'Security-first architecture', 'Multi-jurisdiction compliance'],
                },
                {
                  title: 'Decision-Support Tools',
                  desc: 'Data platforms enabling informed institutional decision-making',
                  services: ['Analytics integration', 'Reporting dashboards', 'Real-time insights'],
                },
                {
                  title: 'Internal Workflow Digitization',
                  desc: 'Modernizing back-office and operational processes',
                  services: ['Process mapping', 'Automation', 'Integration with legacy systems'],
                },
                {
                  title: 'Stakeholder Communication Platforms',
                  desc: 'Secure, collaborative tools for institutional stakeholders',
                  services: ['Multi-party platforms', 'Secure messaging', 'Workflow automation'],
                },
              ].map((useCase, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border card-lift">
                  <h4 className="text-heading font-display font-bold mb-2">{useCase.title}</h4>
                  <p className="text-body mb-4">{useCase.desc}</p>
                  <ul className="space-y-2">
                    {useCase.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-body text-sm">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Approach */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="OUR APPROACH"
              heading="How we deliver"
              description="Our methodology balances agility, security, and strategic alignment."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {[
                    { step: 'Discover', desc: 'Deep understanding of your context, challenges, and constraints' },
                    { step: 'Design', desc: 'Collaborative architecture and solution design' },
                    { step: 'Develop', desc: 'Iterative development with regular stakeholder feedback' },
                    { step: 'Deploy', desc: 'Careful rollout with training and sustained support' },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 bg-brand-dark text-white rounded flex items-center justify-center flex-shrink-0 font-bold">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="text-heading font-display font-bold mb-1">{item.step}</h4>
                        <p className="text-body text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-brand-softer p-8 rounded-lg surface-pattern">
                <h4 className="text-heading font-display font-bold mb-6">Key Commitments</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold font-bold text-xl">•</span>
                    <span className="text-body"><strong>Security first:</strong> Government-grade security and compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold font-bold text-xl">•</span>
                    <span className="text-body"><strong>Transparency:</strong> Clear communication and regular updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold font-bold text-xl">•</span>
                    <span className="text-body"><strong>Sustainability:</strong> Solutions built for long-term maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-gold font-bold text-xl">•</span>
                    <span className="text-body"><strong>Flexibility:</strong> Responsive to changing needs and timelines</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Ready to discuss your software strategy?"
          buttonText="Start a Conversation"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
