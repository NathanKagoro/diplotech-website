import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { InsightCard } from '@/components/InsightCard'
import { CTABanner } from '@/components/CTABanner'
import Image from 'next/image'

export const metadata = {
  title: 'Insights & Blog - Diplotech Solutions',
  description: 'Thought leadership at the intersection of diplomacy, strategy, and technology.',
}

// Renders thought leadership and resources.
export default function InsightsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Insights at the intersection of diplomacy, strategy, and technology"
          subheading="Thought leadership from practitioners working at the frontlines of digital transformation in government, institutions, and global organizations."
          background="teal"
          imageSrc="/headers/insights.jpg"
          imageAlt="Thought leadership"
          imagePriority
        />

        {/* Featured Article */}
        <section className="section-padding">
          <div className="container-x">
            <div className="bg-gradient-to-r from-brand-softer to-brand-light rounded-lg overflow-hidden mb-16 border border-border">
              <div className="relative h-56 md:h-72">
                <Image
                  src="/insights/featured-ai-policy.jpg"
                  alt="Government leaders discussing AI policy"
                  fill
                  priority
                  sizes="(min-width: 768px) 1200px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-heading/50 to-transparent" aria-hidden="true"></div>
              </div>
              <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-brand-dark uppercase">Featured</span>
                <span className="text-xs text-body">May 2026</span>
              </div>
              <h2 className="text-heading font-display font-bold mb-4">
                AI and Public Policy: Navigating Digital Transformation in Government
              </h2>
              <p className="text-lg text-body mb-6">
                How artificial intelligence is reshaping policy-making, institutional decision-making, and public service delivery in government—and what leaders need to know to navigate this transition responsibly.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:gap-3 transition-all">
                Read the full article →
              </a>
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <SectionHeading
              eyebrow="LATEST ARTICLES"
              heading="Exploring strategy, technology, and impact"
              centered
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <InsightCard
                title="Digital Transformation for NGOs: Technology as Mission Enabler"
                description="Strategic frameworks for implementing technology that strengthens NGO operational effectiveness and mission impact."
                category="Digital Transformation"
                href="#"
                date="April 2026"
                imageSrc="/insights/digital-ngos.jpg"
                imageAlt="NGO operations team using digital dashboards"
              />
              <InsightCard
                title="Strategic Planning in Uncertain Times: Resilience Through Technology"
                description="Building adaptive strategies in dynamic geopolitical and technological landscapes. How institutions can prepare for change."
                category="Strategy & Governance"
                href="#"
                date="March 2026"
                imageSrc="/insights/strategic-planning.jpg"
                imageAlt="Strategy workshop and planning notes"
              />
              <InsightCard
                title="Public-Private Partnerships: Technology Transfer and Capacity Building"
                description="Lessons from successful government-private sector collaborations in digital innovation and institutional transformation."
                category="Partnerships"
                href="#"
                date="February 2026"
                imageSrc="/insights/partnerships.jpg"
                imageAlt="Public and private sector teams in a meeting"
              />
              <InsightCard
                title="Decision-Support Systems in Government: From Data to Insight"
                description="How governments are using analytics and AI to improve institutional decision-making and policy effectiveness."
                category="AI & Policy"
                href="#"
                date="January 2026"
                imageSrc="/insights/decision-support.jpg"
                imageAlt="Government data and decision support screen"
              />
              <InsightCard
                title="The Future of Government Service Delivery: Lessons from Digital Leaders"
                description="Analysis of innovative government service delivery models and what makes digital transformation successful at scale."
                category="Digital Transformation"
                href="#"
                date="December 2025"
                imageSrc="/insights/gov-service-delivery.jpg"
                imageAlt="Modern government service center"
              />
              <InsightCard
                title="Building Institutional Trust Through Transparency and Technology"
                description="How technology infrastructure can strengthen public trust and institutional legitimacy in the digital age."
                category="Strategy & Governance"
                href="#"
                date="November 2025"
                imageSrc="/insights/trust-transparency.jpg"
                imageAlt="Transparent governance and civic participation"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="ARTICLE CATEGORIES"
              heading="Browse by topic"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                'AI & Policy',
                'Digital Transformation',
                'Strategy & Governance',
                'Public Sector Innovation',
                'Partnerships & Research',
              ].map((category, i) => (
                <button
                  key={i}
                  className="p-4 text-center bg-surface-light border border-border rounded-lg hover:border-brand-gold hover:bg-brand-softer transition-all text-body font-medium"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Subscribe */}
        <section className="section-padding bg-brand-softer">
          <div className="container-x text-center max-w-2xl mx-auto">
            <h2 className="text-heading font-display font-bold mb-4">Stay informed</h2>
            <p className="text-body mb-6">
              Subscribe to receive updates about our latest insights, research, and perspectives on strategy, technology, and global impact.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded border border-border focus:outline-none focus:border-brand-dark"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Want to share your perspective?"
          subheading="We're interested in guest contributions, collaboration, and partnerships with thought leaders."
          buttonText="Get in Touch"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
