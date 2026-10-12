import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'
import { CTABanner } from '@/components/CTABanner'

export const metadata = {
  title: 'About Diplotech Solutions - Our Mission & Values',
  description: 'Learn about our mission to bridge diplomacy and technology for global impact.',
}

// Renders the about page narrative and values.
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="About Diplotech Solutions"
          subheading="Bridging the gap between diplomatic understanding and technological capability"
          background="teal"
          imageSrc="/headers/about.jpg"
          imageAlt="Teamwork and mission"
        />

        {/* Company Overview */}
        <section className="section-padding">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="content-theme-panel">
                <h2 className="text-heading font-display font-bold mb-6">Our Story</h2>
                <p className="text-lg text-body mb-4 text-callout">
                  Diplotech Solutions was founded on a simple but powerful insight: the most critical challenges facing governments, NGOs, and institutions require both diplomatic understanding and technological innovation.
                </p>
                <p className="text-lg text-body mb-4">
                  We don't just deliver technology. We deliver solutions that are culturally aware, strategically aligned, and technically excellent. Our team brings together consultants, engineers, and strategists who understand that true transformation happens at the intersection of policy, people, and platforms.
                </p>
                <p className="text-lg text-body">
                  Today, we partner with governments, international institutions, NGOs, and private organizations across the globe to solve complex challenges through consultancy, digital innovation, strategic planning, and AI-informed solutions.
                </p>
              </div>
              <div className="bg-surface-light p-8 rounded-lg content-theme-panel-soft">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-dark text-white rounded flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-display font-bold text-heading">Strategic Understanding</h4>
                      <p className="text-sm text-body">Deep knowledge of sector dynamics and institutional realities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-primary text-white rounded flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-display font-bold text-heading">Technical Excellence</h4>
                      <p className="text-sm text-body">Modern technology thoughtfully implemented</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-brand-gold text-white rounded flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-display font-bold text-heading">Sustained Impact</h4>
                      <p className="text-sm text-body">Solutions designed for long-term organizational success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-heading text-white">
          <div className="container-x">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
              <div className="info-card-dark p-6">
                <h3 className="font-display font-bold text-white mb-4 text-2xl">Our Mission</h3>
                <p className="text-gray-200 leading-relaxed">
                  To bridge diplomacy and technology, enabling global organizations to solve complex challenges through strategic innovation and digital excellence.
                </p>
              </div>
              <div className="info-card-dark p-6">
                <h3 className="font-display font-bold text-white mb-4 text-2xl">Our Vision</h3>
                <p className="text-gray-200 leading-relaxed">
                  A world where technology and diplomacy work together to create resilient, adaptive, and impactful institutions serving global good.
                </p>
              </div>
              <div className="info-card-dark p-6">
                <h3 className="font-display font-bold text-white mb-4 text-2xl">Our Approach</h3>
                <p className="text-gray-200 leading-relaxed">
                  We listen deeply, strategize carefully, and execute with excellence. Every solution is tailored to organizational context and mission.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-700 pt-12">
              <h3 className="font-display font-bold text-white mb-8 text-2xl">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { title: 'Integrity', desc: 'Honest, transparent partnerships' },
                  { title: 'Excellence', desc: 'High standards in all work' },
                  { title: 'Innovation', desc: 'Forward-thinking solutions' },
                  { title: 'Collaboration', desc: 'True partnership mindset' },
                  { title: 'Global Perspective', desc: 'Cultural and contextual awareness' },
                ].map((value, i) => (
                  <div key={i} className="info-card-dark p-4">
                    <h5 className="text-white font-display font-bold mb-2">{value.title}</h5>
                    <p className="text-sm text-gray-300">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="section-padding">
          <div className="container-x">
            <SectionHeading
              eyebrow="OUR PROCESS"
              heading="How we partner"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Understand', desc: 'We dive deep into your context, challenges, and objectives' },
                { step: '2', title: 'Define', desc: 'Together, we develop clear strategy and desired outcomes' },
                { step: '3', title: 'Design', desc: 'We craft tailored solutions aligned to your needs' },
                { step: '4', title: 'Deliver', desc: 'Execution with excellence and sustained support' },
              ].map((item, i) => (
                <div key={i} className="text-center info-card card-lift p-6">
                  <div className="w-16 h-16 bg-brand-dark text-white rounded-full flex items-center justify-center font-display font-bold text-2xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-display font-bold text-heading mb-2">{item.title}</h4>
                  <p className="text-body text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team / Network */}
        <section className="section-padding bg-surface-light">
          <div className="container-x text-center">
            <SectionHeading
              eyebrow="OUR NETWORK"
              heading="Global specialists in diplomacy & technology"
              description="We bring together consultants, engineers, strategists, and delivery experts across governments, institutions, and technology sectors."
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg border border-border info-card card-lift">
                <div className="text-4xl font-display font-bold text-brand-dark mb-3">50+</div>
                <p className="text-body">Government & institutional engagements</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border info-card card-lift">
                <div className="text-4xl font-display font-bold text-brand-gold mb-3">15+</div>
                <p className="text-body">Countries with active projects</p>
              </div>
              <div className="bg-white p-8 rounded-lg border border-border info-card card-lift">
                <div className="text-4xl font-display font-bold text-brand-primary mb-3">100%</div>
                <p className="text-body">Mission-focused, impact-driven</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTABanner
          headline="Ready to partner with us?"
          subheading="Let's discuss how Diplotech can support your organization's next chapter."
          buttonText="Get in Touch"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </>
  )
}
