import { useEffect, useRef, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const revealRefs = useRef([])
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // In production, connect to a backend / EmailJS / Formspree
    setSent(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="contact page-enter">

      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section-tag">Get in Touch</span>
          <h1>Contact &<br/><em>Connect With Us</em></h1>
          <p>We'd love to hear from you. Whether you want to donate, volunteer, or learn more — reach out anytime.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container contact-grid">

          {/* Info */}
          <div className="contact-info reveal" ref={addRef}>
            <span className="section-tag">Our Details</span>
            <h2 className="section-title">We're Here<br/>for You</h2>
            <div className="ornament"><span>✦</span></div>

            <div className="contact-info__items">
              <div className="contact-info__item">
                <div className="contact-info__icon">📍</div>
                <div>
                  <strong>Address</strong>
                  <p>Coimbatore, Tamil Nadu, India – 641001</p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon">📞</div>
                <div>
                  <strong>Phone / GPay</strong>
                  <p><a href="tel:+919500969946">+91 95009 69946</a></p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:vinayakaneedcharitabletrust@gmail.com">vinayakaneedcharitabletrust@gmail.com</a></p>
                </div>
              </div>
              <div className="contact-info__item">
                <div className="contact-info__icon">🕐</div>
                <div>
                  <strong>Open Hours</strong>
                  <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Account Box */}
            <div className="contact-account">
              <div className="contact-account__header">
                <span>🏦</span>
                <strong>Donation Bank Account</strong>
              </div>
              <div className="contact-account__name">VINAYAKA NEED CHARITABLE TRUST</div>
              <div className="contact-account__rows">
                {[
                  ['Account Number', '510909010027634'],
                  ['Bank',           'City Union Bank'],
                  ['Branch Code',    '211'],
                  ['IFSC Code',      'CIUB0000211'],
                  ['GPay / UPI',     '9500969946'],
                ].map(([label, val]) => (
                  <div className="contact-account__row" key={label}>
                    <span>{label}</span>
                    <strong>{val}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal" ref={addRef}>
            {sent ? (
              <div className="contact-success">
                <div className="contact-success__icon">✉️</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We will get back to you shortly.</p>
                <button className="btn btn-primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send Us a Message</h3>
                <p className="contact-form__sub">Fill in the form and we'll get back to you within 24 hours.</p>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone" name="phone" type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject" name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="donation">Donation Enquiry</option>
                      <option value="volunteer">Volunteer</option>
                      <option value="sponsor">Sponsor a Meal</option>
                      <option value="partnership">Partnership</option>
                      <option value="general">General Enquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message" name="message"
                    placeholder="Tell us how you'd like to help or what you'd like to know..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary contact-form__submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="contact-map reveal" ref={addRef}>
        <div className="container">
          <div className="contact-map__placeholder">
            <span>🗺️</span>
            <h4>Coimbatore, Tamil Nadu, India</h4>
            <p>Visit us or search "Vinayaka Need Charitable Trust" on Google Maps</p>
            <a
              href="https://maps.google.com/?q=Vinayaka+Need+Charitable+Trust+Coimbatore"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
