import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Careers - Diplotech Solutions',
  description: 'Join our team. Build work that creates international impact.',
}

// Renders the careers page and role openings.
export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Build work that creates international impact"
          subheading="Join Diplotech and work on meaningful projects that shape how institutions serve their stakeholders."
          background="teal"
          imageSrc="/headers/careers.jpg"
          imageAlt="Global impact careers"
        />

        {/* Why Join */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="WHY DIPLOTECH"
              heading="What makes us special as an employer"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Meaningful Projects',
                  desc: 'Work that directly impacts governments, institutions, NGOs, and global stakeholders',
                },
                {
                  title: 'Global Perspective',
                  desc: 'Collaborate with teams across continents and cultures',
                },
                {
                  title: 'Flexible Collaboration',
                  desc: 'Remote-first culture supporting work-life balance and flexibility',
                },
                {
                  title: 'Innovation-Led',
                  desc: 'Freedom to explore new ideas and emerging technologies',
                },
              ].map((item, i) => (
                <div key={i} className="bg-surface-light p-6 rounded-lg border border-border info-card card-lift surface-pattern">
                  <h4 className="text-heading font-display font-bold mb-3">{item.title}</h4>
                  <p className="text-body text-sm text-callout">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Working at Diplotech */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="content-theme-panel p-8">
                <h2 className="text-heading font-display font-bold mb-6">Our Working Culture</h2>
                <p className="text-lg text-body mb-4">
                  We operate globally through flexible delivery models. Our team members work from different time zones, cities, and regions, collaborating asynchronously and synchronously to deliver excellence.
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    'Remote-first operations across time zones',
                    'Collaborative and respectful team environment',
                    'Continuous learning and professional development',
                    'Focus on impact and outcomes over hours',
                    'Diverse perspectives and inclusive culture',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-body">
                      <span className="text-brand-gold font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-brand-softer p-8 rounded-lg content-theme-panel-soft info-card">
                <h4 className="text-heading font-display font-bold mb-6">Roles We're Looking For</h4>
                <p className="text-body mb-6">
                  We&apos;re always looking for talented people across multiple disciplines:
                </p>
                <ul className="space-y-3 text-body text-sm">
                  <li>• Software Engineers & Architects</li>
                  <li>• Strategic Consultants & Advisors</li>
                  <li>• Project Managers & Delivery Leads</li>
                  <li>• Product Managers & UX Designers</li>
                  <li>• HR & Operations Specialists</li>
                  <li>• Business Development Managers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Open Roles */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="OPEN POSITIONS"
              heading="Join our team"
            />
            <div className="bg-white border-2 border-border rounded-lg p-8 text-center info-card content-theme-panel-soft card-lift">
              <p className="text-lg text-body mb-6 text-callout">
                We're currently building our team for exciting projects ahead.
              </p>
              <div className="space-y-4">
                <p className="text-body">
                  Even if no current opening matches your profile, we welcome speculative applications from talented individuals passionate about technology, diplomacy, and global impact.
                </p>
                <a href="/contact" className="btn-primary inline-flex">
                  Send Your CV & Story
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Values */}
        <section className="section-padding bg-heading text-white">
          <div className="container-x">
            <h2 className="text-white font-display font-bold text-center mb-12 text-4xl">Our Values in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { value: 'Integrity', desc: 'Honest, transparent collaboration' },
                { value: 'Excellence', desc: 'High standards in all we do' },
                { value: 'Innovation', desc: 'Continuous improvement and learning' },
                { value: 'Collaboration', desc: 'Teamwork across boundaries' },
                { value: 'Impact', desc: 'Focused on meaningful outcomes' },
              ].map((item, i) => (
                <div key={i} className="text-center info-card-dark p-5">
                  <h4 className="text-white font-display font-bold mb-2">{item.value}</h4>
                  <p className="text-gray-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Ready to make an impact?"
          subheading="Apply or reach out to learn more about opportunities at Diplotech."
          buttonText="Contact Our Team"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
