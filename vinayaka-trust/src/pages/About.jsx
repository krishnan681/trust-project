import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const values = [
  { icon: '❤️', title: 'Compassion',    desc: 'We lead with empathy, treating every individual with dignity, warmth, and unconditional care.' },
  { icon: '🤝', title: 'Integrity',     desc: 'Transparent use of donations and complete accountability to the communities we serve.' },
  { icon: '🌱', title: 'Empowerment',   desc: 'Building skills and confidence so that the people we help can uplift themselves and others.' },
  { icon: '🔬', title: 'Personalisation', desc: 'Recognising that each child is unique, we craft individually tailored care and education plans.' },
]

const milestones = [
  { year: '2015', title: 'Founded', desc: 'Vinayaka Need Charitable Trust established in Coimbatore with a vision to serve the community.' },
  { year: '2016', title: 'First Shelter', desc: 'Opened our first shelter home providing care to abandoned and mentally challenged children.' },
  { year: '2018', title: 'Education Programs', desc: 'Launched structured educational events and skill-building workshops for children.' },
  { year: '2020', title: 'Medical Outreach', desc: 'Expanded to include dedicated medical treatment and therapy programs.' },
  { year: '2022', title: '10,000+ Lives', desc: 'Crossed the milestone of impacting 10,000+ lives annually through all our programs.' },
  { year: '2025', title: 'Decade of Service', desc: 'Celebrating 10 years of unwavering commitment to children and communities in need.' },
]

export default function About() {
  const revealRefs = useRef([])

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

  return (
    <main className="about page-enter">

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section-tag">Our Story</span>
          <h1>About Vinayaka Need<br/><em>Charitable Trust</em></h1>
          <p>A journey of compassion that began in 2015 and continues to transform thousands of lives every year.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <div className="container about-mission__grid">
          <div className="about-mission__text reveal" ref={addRef}>
            <span className="section-tag">Who We Are</span>
            <h2 className="section-title">Serving with Purpose,<br/>Giving with Heart</h2>
            <div className="ornament"><span>✦</span></div>
            <p>
              Vinayaka Need Charitable Trust is a registered Non-Profit organisation with the Government of India, established in <strong>January 2015</strong> in Coimbatore, Tamil Nadu. We act independently to execute community-based development activities that uplift lives across society.
            </p>
            <p>
              We provide <strong>Care, Food, Shelter, Clothing, Education Events, Empowerment, and Medical Treatment</strong> to children — especially those who have been abandoned or have special needs. Our goal is to serve <strong>10,000+ lives per year</strong>.
            </p>
            <p>
              We believe each child is unique, and so are their needs. Our care is personalised — we assign special educators to each child based on their condition and abilities, with individual progress assessments every three months.
            </p>
          </div>
          <div className="about-mission__visual reveal" ref={addRef}>
            <div className="about-mission__card">
              <div className="about-mission__quote">
                "Every child deserves to be seen, heard, and given the opportunity to flourish."
              </div>
              <div className="about-mission__meta">— Vinayaka Need Charitable Trust</div>
            </div>
            <div className="about-mission__stat-row">
              <div className="about-stat"><strong>2015</strong><span>Founded</span></div>
              <div className="about-stat"><strong>10K+</strong><span>Lives/year</span></div>
              <div className="about-stat"><strong>50+</strong><span>Children in care</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="container">
          <div className="about-values__header reveal" ref={addRef}>
            <span className="section-tag">Our Core Values</span>
            <h2 className="section-title">What Guides Us</h2>
          </div>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <div className="value-card reveal" ref={addRef} key={v.title}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="container">
          <div className="about-timeline__header reveal" ref={addRef}>
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">Milestones of Service</h2>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className={`timeline__item ${i % 2 === 0 ? 'left' : 'right'} reveal`}
                ref={addRef} key={m.year}
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <span className="timeline__year">{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal" ref={addRef}>
        <div className="container about-cta__inner">
          <h2>Ready to Make a Difference?</h2>
          <p>Join hands with us and help change the story of a child in need.</p>
          <div className="about-cta__btns">
            <Link to="/donate" className="btn btn-primary">♥ Donate Now</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

    </main>
  )
}
