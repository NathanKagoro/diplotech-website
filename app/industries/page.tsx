import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { IndustryCard } from '@/components/IndustryCard'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Industries & Sectors - Diplotech Solutions',
  description: 'Sector-specific solutions for government, NGOs, private sector, and international institutions.',
}

// Renders industry focus areas and delivery model.
export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Solutions shaped around sector realities"
          subheading="We bring sector expertise to every engagement, understanding the unique challenges, stakeholders, and constraints of different industries."
          background="teal"
          imageSrc="/headers/industries.jpg"
          imageAlt="Sector expertise"
        />

        {/* Sectors */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="KEY SECTORS"
              heading="Who we serve"
            />

            {/* Government */}
            <div className="mb-16 content-theme-panel-soft p-8">
              <h3 className="text-heading font-display font-bold text-2xl mb-4">Government & Public Sector</h3>
              <p className="text-lg text-body mb-8 max-w-3xl">
                We help governments modernize service delivery, improve decision-making, and optimize operations through technology and strategic consulting.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <IndustryCard
                  title="Digital Service Delivery"
                  description="Modernizing citizen-facing government services"
                  items={['Visa and immigration platforms', 'Permit and licensing systems', 'Public information portals', 'Service integration']}
                />
                <IndustryCard
                  title="Internal Operations"
                  description="Optimizing back-office and administrative processes"
                  items={['Workflow automation', 'Decision-support systems', 'Inter-departmental integration', 'Performance analytics']}
                />
                <IndustryCard
                  title="Strategic Planning"
                  description="Supporting policy and organizational development"
                  items={['Digital transformation roadmaps', 'Technology strategy', 'Change management', 'Training and adoption']}
                />
              </div>
            </div>

            {/* NGOs & Development */}
            <div className="mb-16 content-theme-panel-soft p-8">
              <h3 className="text-heading font-display font-bold text-2xl mb-4">NGOs & Development Organizations</h3>
              <p className="text-lg text-body mb-8 max-w-3xl">
                We support NGOs in amplifying impact through technology that aligns with mission, strengthens accountability, and enables collaboration.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <IndustryCard
                  title="Programme Management"
                  description="Technology for complex multi-partner programmes"
                  items={['Beneficiary tracking', 'Partner coordination', 'Results monitoring', 'Donor reporting']}
                />
                <IndustryCard
                  title="Organizational Systems"
                  description="Tools for NGO growth and sustainability"
                  items={['Finance and grant management', 'HR and team management', 'Knowledge management', 'Strategic analytics']}
                />
                <IndustryCard
                  title="Advocacy & Communication"
                  description="Platforms for stakeholder engagement"
                  items={['Community engagement tools', 'Data visualization', 'Advocacy campaigns', 'Public reporting']}
                />
              </div>
            </div>

            {/* Private Sector */}
            <div className="mb-16 content-theme-panel-soft p-8">
              <h3 className="text-heading font-display font-bold text-2xl mb-4">Private Sector & Enterprise</h3>
              <p className="text-lg text-body mb-8 max-w-3xl">
                We help private organizations innovate through digital transformation, strategic consulting, and talent solutions for complex environments.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <IndustryCard
                  title="Digital Transformation"
                  description="Modernizing operations and customer experience"
                  items={['Legacy system modernization', 'Customer experience platforms', 'Data analytics', 'Automation']}
                />
                <IndustryCard
                  title="Strategic Consulting"
                  description="Navigating market and technology shifts"
                  items={['Business model innovation', 'Technology strategy', 'Market expansion', 'Risk management']}
                />
                <IndustryCard
                  title="Talent & Scaling"
                  description="Building teams for growth"
                  items={['Technical recruitment', 'Team building', 'Project leadership', 'Organizational development']}
                />
              </div>
            </div>

            {/* International Institutions */}
            <div className="content-theme-panel-soft p-8">
              <h3 className="text-heading font-display font-bold text-2xl mb-4">International Institutions & Diplomatic Bodies</h3>
              <p className="text-lg text-body mb-8 max-w-3xl">
                We work with international institutions on systems, strategy, and operations that serve global constituencies.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <IndustryCard
                  title="Institutional Systems"
                  description="Technology infrastructure for multinational operations"
                  items={['Secure communication platforms', 'Multi-language support', 'Compliance systems', 'Stakeholder engagement']}
                />
                <IndustryCard
                  title="Governance & Transparency"
                  description="Systems supporting institutional accountability"
                  items={['Public reporting platforms', 'Data transparency', 'Decision documentation', 'Audit systems']}
                />
                <IndustryCard
                  title="Strategic Collaboration"
                  description="Facilitating cross-institutional partnership"
                  items={['Collaborative platforms', 'Knowledge sharing', 'Programme coordination', 'Impact measurement']}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Outcomes */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <SectionHeading
              eyebrow="OUTCOMES"
              heading="What organizations achieve with us"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Improved Decision-Making', desc: 'Data-driven insights for better organizational choices' },
                { title: 'Modernized Operations', desc: 'Efficient, secure, transparent institutional systems' },
                { title: 'Strengthened Service Delivery', desc: 'Better outcomes for citizens, beneficiaries, and stakeholders' },
                { title: 'Aligned Technology', desc: 'Systems that serve institutional mission and values' },
              ].map((outcome, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border info-card card-lift">
                  <h4 className="text-heading font-display font-bold mb-3">{outcome.title}</h4>
                  <p className="text-body text-sm">{outcome.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Let's discuss your sector's unique opportunities"
          buttonText="Schedule a Conversation"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
