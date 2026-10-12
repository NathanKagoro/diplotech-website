import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { SectionHeading } from '@/components/SectionHeading'

export const metadata = {
  title: 'Contact Us - Diplotech Solutions',
  description: 'Get in touch. Let\'s discuss your organization\'s next chapter.',
}

// Renders contact channels and office details.
export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero
          heading="Let's discuss your organization's next challenge"
          subheading="We respond with discretion, clarity, and a focus on understanding your goals."
          background="teal"
          imageSrc="/headers/contact.jpg"
          imageAlt="Contact communication"
        />

        {/* Contact Form & Info */}
        <section className="section-padding">
          <div className="container-x">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Form */}
              <div className="lg:col-span-2">
                <SectionHeading
                  eyebrow="GET IN TOUCH"
                  heading="Send us a message"
                  centered={false}
                />
                <form className="space-y-6 content-theme-panel-soft p-6 md:p-8">
                  <div>
                    <label className="block text-body font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-6 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-dark transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-body font-medium mb-2">Organization *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-6 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-dark transition-colors"
                      placeholder="Your organization"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-body font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        className="w-full px-6 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-dark transition-colors"
                        placeholder="Your email"
                      />
                    </div>
                    <div>
                      <label className="block text-body font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-6 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-dark transition-colors"
                        placeholder="Your phone (optional)"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-body font-medium mb-2">Inquiry Type *</label>
                    <select
                      required
                      className="w-full px-6 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-dark transition-colors bg-white"
                    >
                      <option value="">Select an inquiry type</option>
                      <option value="services">Services inquiry</option>
                      <option value="partnership">Partnership inquiry</option>
                      <option value="careers">Careers</option>
                      <option value="general">General contact</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-body font-medium mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-6 py-3 border border-border rounded-lg focus:outline-none focus:border-brand-dark transition-colors resize-none"
                      placeholder="Tell us about your challenge or question..."
                    />
                  </div>

                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <div className="bg-surface-light p-8 rounded-lg border border-border mb-8 info-card content-theme-panel-soft">
                  <h4 className="text-heading font-display font-bold mb-6">Contact Information</h4>
                  
                  <div className="mb-8">
                    <h5 className="text-heading font-medium text-sm mb-2 uppercase tracking-wide">Email</h5>
                    <a href="mailto:hello@diplotech.solutions" className="text-brand-dark hover:text-brand-dark-hover font-medium">
                      hello@diplotech.solutions
                    </a>
                  </div>

                  <div className="mb-8">
                    <h5 className="text-heading font-medium text-sm mb-2 uppercase tracking-wide">Operating Model</h5>
                    <p className="text-body text-sm">
                      We operate globally through flexible delivery models. Our team works across multiple time zones.
                    </p>
                  </div>

                  <div>
                    <h5 className="text-heading font-medium text-sm mb-2 uppercase tracking-wide">Response Time</h5>
                    <p className="text-body text-sm">
                      We aim to respond to all inquiries within 48 hours.
                    </p>
                  </div>
                </div>

                <div className="bg-brand-softer p-8 rounded-lg border-l-4 border-brand-gold content-theme-panel">
                  <h4 className="text-heading font-display font-bold mb-4">Inquiry Types</h4>
                  <ul className="space-y-3 text-body text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">→</span>
                      <span><strong>Services:</strong> Software development, recruitment, support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">→</span>
                      <span><strong>Partnerships:</strong> Technology, research, strategic collaboration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">→</span>
                      <span><strong>Careers:</strong> Opportunities to join our team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-gold font-bold">→</span>
                      <span><strong>General:</strong> Other inquiries and information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Cards */}
        <section className="section-padding bg-surface-light">
          <div className="container-x">
            <SectionHeading
              eyebrow="HOW WE CAN HELP"
              heading="Choose your path"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Services Inquiry', desc: 'Learn about our software, recruitment, and support services' },
                { title: 'Partnership Inquiry', desc: 'Explore collaboration opportunities with Diplotech' },
                { title: 'Careers Inquiry', desc: 'Apply or learn about working with our team' },
                { title: 'General Contact', desc: 'Other questions or information requests' },
              ].map((card, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-border text-center hover:border-brand-gold transition-colors cursor-pointer info-card card-lift surface-pattern">
                  <h4 className="text-heading font-display font-bold mb-2">{card.title}</h4>
                  <p className="text-body text-sm text-callout">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy & Assurance */}
        <section className="section-padding bg-heading text-white">
          <div className="container-x text-center">
            <h2 className="text-white font-display font-bold mb-6 text-3xl">Privacy & Confidentiality</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-4">
              We handle all inquiries with confidentiality and discretion. Your information will only be used to respond to your inquiry and will never be shared with third parties without your consent.
            </p>
            <p className="text-gray-300 text-sm">
              By submitting this form, you agree to our privacy policy. We respond with clarity and focus on understanding your goals.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
