import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { ServiceCard } from '@/components/ServiceCard'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Services - Diplotech Solutions',
  description: 'Consultancy services: software development, IT recruitment, and client support for government and NGOs.',
}

// Renders the services overview and offerings.
export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Services designed for complex, high-stakes environments"
          subheading="Strategic consultancy and technology delivery for governments, institutions, NGOs, and private sector organizations."
          background="teal"
          imageSrc="/headers/services.jpg"
          imageAlt="Technology consulting"
        />

        {/* Services Overview */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="CORE SERVICES"
              heading="Three pillars of delivery"
              description="We combine strategy, technology, and talent to transform how organizations operate."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Software Development & Consultancy"
                description="Custom solutions and strategic transformation for mission-critical environments."
                capabilities={[
                  'Custom software development for complex workflows',
                  'Systems planning and digital transformation advisory',
                  'AI-enabled workflows and decision-support tools',
                  'Data-driven tools and UX/process design',
                  'Government and institutional expertise',
                ]}
                href="/services/software-development"
              />
              <ServiceCard
                title="IT Recruitment & Project Management"
                description="Finding the right talent and keeping delivery on track."
                capabilities={[
                  'Technical recruitment and placement',
                  'Project coordination and delivery oversight',
                  'Stakeholder communication management',
                  'Team scaling and resource optimization',
                  'Hybrid and remote delivery models',
                ]}
                href="/services/it-recruitment"
                highlight
              />
              <ServiceCard
                title="Client Support & Call Centre"
                description="Responsive support operations that strengthen service delivery."
                capabilities={[
                  'Client support handling and help desk coordination',
                  'Multilingual support capabilities',
                  'Issue routing and escalation processes',
                  'Reporting and service monitoring',
                  'SLA-oriented workflows',
                ]}
                href="/services/client-support"
              />
            </div>
          </div>
        </section>

        {/* How Services Connect */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <h2 className="text-heading font-display font-bold text-center mb-12">How our services work together</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border border-brand-dark text-center">
                <div className="text-3xl font-display font-bold text-brand-dark mb-3">Strategy</div>
                <p className="text-sm text-body">Understanding your mission and objectives</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-brand-primary text-center">
                <div className="text-3xl font-display font-bold text-brand-primary mb-3">Build</div>
                <p className="text-sm text-body">Delivering custom solutions and systems</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-brand-gold text-center">
                <div className="text-3xl font-display font-bold text-brand-gold mb-3">People</div>
                <p className="text-sm text-body">Finding and managing the right team</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-heading text-center">
                <div className="text-3xl font-display font-bold text-heading mb-3">Support</div>
                <p className="text-sm text-body">Sustaining delivery with reliable operations</p>
              </div>
            </div>
            <p className="text-center text-body mt-8 max-w-2xl mx-auto">
              Diplotech is not just a tech vendor—we're an operational and strategic partner committed to your success.
            </p>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="ENGAGEMENT MODELS"
              heading="Flexible ways to partner"
              description="We adapt our delivery to your organizational needs and constraints."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Project-Based Consulting', desc: 'Discrete engagements with clear deliverables and timelines' },
                { title: 'Embedded Support', desc: 'Our team integrated into your operations for extended periods' },
                { title: 'Managed Services', desc: 'Ongoing operational support and continuous improvement' },
                { title: 'Talent Augmentation', desc: 'Recruitment and project management support for your teams' },
              ].map((model, i) => (
                <div key={i} className="bg-surface-light p-6 rounded-lg border border-border">
                  <h4 className="text-heading font-display font-bold mb-3">{model.title}</h4>
                  <p className="text-body text-sm">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Ready to explore how we can help?"
          buttonText="Request a Consultation"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
