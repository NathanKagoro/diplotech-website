import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'Partners - Diplotech Solutions',
  description: 'Strategic partnerships across technology, research, and diplomacy.',
}

// Renders partnership models and engagement options.
export default function PartnersPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Partnerships that expand impact"
          subheading="We collaborate across technology, research, and diplomatic networks to deliver stronger solutions and create shared value."
          background="teal"
          imageSrc="/headers/partners.jpg"
          imageAlt="Collaboration and partnership"
        />

        {/* Partnership Philosophy */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="OUR APPROACH"
              heading="Why partnerships matter"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { title: 'Broaden Capability', desc: 'Access to specialized expertise and resources' },
                { title: 'Strengthen Credibility', desc: 'Association with respected institutions and leaders' },
                { title: 'Support Innovation', desc: 'Collaborative research and shared learning' },
                { title: 'Connect Sectors', desc: 'Bridge across government, academia, and private sector' },
              ].map((item, i) => (
                <div key={i} className="bg-surface-light p-6 rounded-lg border border-border text-center info-card card-lift surface-pattern">
                  <h4 className="text-heading font-display font-bold mb-3">{item.title}</h4>
                  <p className="text-body text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Categories */}
        <section className="section-padding bg-heading text-white">
          <div className="container-x">
            <h2 className="text-white font-display font-bold text-center mb-12 text-4xl">Our Partnership Ecosystem</h2>

            {/* Technology Alliances */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-brand-gold"></div>
                <h3 className="text-white font-display font-bold text-2xl">Technology Alliances</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Strategic Technology Partners</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Collaborations with leading technology providers for solution delivery and innovation.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Cloud platforms and infrastructure</li>
                    <li>• Enterprise software and systems</li>
                    <li>• AI and analytics solutions</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Integration & Implementation Partners</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Working with implementation specialists to deliver integrated solutions.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Systems integration expertise</li>
                    <li>• Custom development capability</li>
                    <li>• Implementation support</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Innovation Partners</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Partnerships with innovators exploring emerging technologies.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• AI and machine learning</li>
                    <li>• Blockchain and security</li>
                    <li>• Emerging tech exploration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic & Research */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-brand-gold"></div>
                <h3 className="text-white font-display font-bold text-2xl">Academic & Research Partners</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Universities & Research Institutions</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Collaborations on research and thought leadership.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Joint research initiatives</li>
                    <li>• Policy research collaboration</li>
                    <li>• Talent and internship programs</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Think Tanks & Policy Organizations</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Partnerships focused on policy impact and strategic insight.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Policy research partnerships</li>
                    <li>• Strategic analysis collaboration</li>
                    <li>• Publication and knowledge sharing</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Knowledge Networks</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Participation in knowledge-sharing and learning communities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Industry associations</li>
                    <li>• Professional networks</li>
                    <li>• Community of practice participation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Government & Diplomatic */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-1 h-12 bg-brand-gold"></div>
                <h3 className="text-white font-display font-bold text-2xl">Government & Diplomatic Ties</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Government Agencies & Ministries</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Direct partnerships with government departments and agencies.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Digital transformation initiatives</li>
                    <li>• Strategic consulting engagements</li>
                    <li>• Service delivery modernization</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">International Institutions</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Collaborations with multilateral organizations and diplomatic bodies.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Institutional system support</li>
                    <li>• Capacity building programs</li>
                    <li>• Strategic partnerships</li>
                  </ul>
                </div>
                <div className="bg-white bg-opacity-5 p-6 rounded-lg border border-white border-opacity-10 info-card-dark">
                  <h4 className="text-white font-display font-bold mb-2">Development Partners</h4>
                  <p className="text-gray-200 text-sm mb-4">
                    Partnerships with development agencies and diplomatic networks.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Development assistance programs</li>
                    <li>• Diplomatic engagement</li>
                    <li>• Capacity strengthening</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration Models */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="PARTNERSHIP MODELS"
              heading="How we collaborate"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Implementation Partnership',
                  desc: 'Joint delivery of solutions and projects',
                },
                {
                  title: 'Research Partnership',
                  desc: 'Shared research, publication, and knowledge',
                },
                {
                  title: 'Strategic Advisory',
                  desc: 'Advisory roles and strategic collaboration',
                },
                {
                  title: 'Institutional Collaboration',
                  desc: 'Long-term strategic institutional partnerships',
                },
              ].map((model, i) => (
                <div key={i} className="bg-surface-light p-6 rounded-lg border border-border info-card card-lift">
                  <h4 className="text-heading font-display font-bold mb-3">{model.title}</h4>
                  <p className="text-body text-sm">{model.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Interested in partnering with Diplotech Solutions?"
          subheading="We welcome collaborations that expand impact and create shared value."
          buttonText="Explore Partnership Opportunities"
          buttonHref="/contact"
          background="gold"
        />
      </main>
      <Footer />
    </>
  )
}
