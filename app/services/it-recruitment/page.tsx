import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'IT Recruitment & Project Management - Diplotech Solutions',
  description: 'Technical recruitment and project delivery for complex government and institutional environments.',
}

// Renders IT recruitment services and process.
export default function ITRecruitmentPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Finding the right talent and keeping delivery on track"
          subheading="We connect elite technical professionals with mission-critical projects and help organizations scale their teams."
          background="teal"
          imageSrc="/headers/services-recruitment.jpg"
          imageAlt="Recruitment strategy and project planning"
        />

        {/* Service Pillars */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="SERVICE PILLARS"
              heading="Integrated talent and delivery solutions"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: 'Technical Recruitment', desc: 'Sourcing specialized talent for complex environments' },
                { title: 'Project Coordination', desc: 'End-to-end delivery oversight and scheduling' },
                { title: 'Delivery Oversight', desc: 'Quality assurance and stakeholder alignment' },
                { title: 'Stakeholder Communication', desc: 'Clear reporting and status management' },
                { title: 'Team Scaling', desc: 'Flexible resource management and augmentation' },
              ].map((pillar, i) => (
                <div key={i} className="bg-surface-light p-6 rounded-lg border border-border text-center card-lift surface-pattern">
                  <h4 className="text-heading font-display font-bold mb-3">{pillar.title}</h4>
                  <p className="text-body text-sm">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Options */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <SectionHeading
              eyebrow="ENGAGEMENT MODELS"
              heading="Flexible partnership options"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Contract Staffing',
                  desc: 'Short-term or project-based placements for specialized needs',
                  benefits: ['Flexible duration', 'Rapid onboarding', 'Specific skill matching'],
                },
                {
                  title: 'Permanent Placement Support',
                  desc: 'Full recruitment and hiring support for permanent roles',
                  benefits: ['Full vetting', 'Onboarding support', 'Performance tracking'],
                },
                {
                  title: 'Project-Based PM',
                  desc: 'Project management support without permanent hiring',
                  benefits: ['Delivery oversight', 'Risk management', 'Timeline confidence'],
                },
                {
                  title: 'Hybrid Delivery Support',
                  desc: 'Combined recruitment, PM, and technical support',
                  benefits: ['Integrated approach', 'Reduced complexity', 'End-to-end accountability'],
                },
              ].map((option, i) => (
                <div key={i} className="bg-white p-8 rounded-lg border border-border card-lift">
                  <h4 className="text-heading font-display font-bold mb-2">{option.title}</h4>
                  <p className="text-body mb-4">{option.desc}</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-body text-sm">
                        <span className="text-brand-gold font-bold">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="section-padding">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-heading font-display font-bold mb-6">Why talent and delivery matter together</h2>
                <p className="text-lg text-body mb-4">
                  The difference between project success and failure often comes down to having the right people with the right skills in the right roles, supported by clear delivery oversight.
                </p>
                <p className="text-lg text-body mb-4">
                  Our integrated approach means we don't just find great talent—we ensure they're set up to succeed through strong project management, clear communication, and performance monitoring.
                </p>
                <p className="text-lg text-body">
                  This reduces delivery risk and helps organizations avoid costly team scaling mistakes.
                </p>
              </div>
              <div className="bg-brand-softer p-8 rounded-lg surface-pattern">
                <h4 className="text-heading font-display font-bold mb-6">Our Commitment</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-display font-bold text-heading mb-2">Quality First</h5>
                    <p className="text-sm text-body">Rigorous vetting and skill assessment for every placement</p>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-heading mb-2">Cultural Fit</h5>
                    <p className="text-sm text-body">Understanding organizational values and working styles</p>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-heading mb-2">Delivery Confidence</h5>
                    <p className="text-sm text-body">Proactive PM and risk management throughout the engagement</p>
                  </div>
                  <div>
                    <h5 className="font-display font-bold text-heading mb-2">Transparent Reporting</h5>
                    <p className="text-sm text-body">Clear status updates and performance metrics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Ready to scale your team?"
          buttonText="Let's Talk About Your Needs"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
