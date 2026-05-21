import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Activities.css'

const activities = [
  {
    icon: '🍱',
    title: 'Daily Meals Program',
    category: 'Food & Nutrition',
    desc: 'Every day, we serve three nutritious meals — breakfast, lunch, and dinner — to 50+ children in our shelter. We believe no child should ever sleep hungry. Our kitchen operates 365 days a year.',
    highlights: ['50+ children fed daily', '3 meals per day', 'Nutritious, balanced diet', 'Festival special meals'],
  },
  {
    icon: '🏠',
    title: 'Shelter & Residential Care',
    category: 'Shelter',
    desc: 'We provide a safe, warm, loving home to abandoned and mentally challenged children. Each child receives personal care, hygiene support, and the feeling of belonging to a family.',
    highlights: ['Safe residential facilities', 'Personal care support', 'Hygiene & health monitoring', '24/7 supervision'],
  },
  {
    icon: '📚',
    title: 'Education & Learning Events',
    category: 'Education',
    desc: 'From formal schooling support to skill-based workshops, we open doors of learning for every child. Special educators are assigned individually to children based on their abilities and progress.',
    highlights: ['Individual special educators', 'Quarterly progress reviews', 'Skill-building workshops', 'Career awareness events'],
  },
  {
    icon: '💪',
    title: 'Empowerment Programs',
    category: 'Empowerment',
    desc: 'We run programs to empower individuals — especially youth and women — to become self-reliant contributors to society. From vocational training to confidence workshops, we build futures.',
    highlights: ['Vocational training', 'Life skills coaching', 'Women empowerment', 'Youth leadership programs'],
  },
  {
    icon: '🏥',
    title: 'Medical Treatment & Therapy',
    category: 'Healthcare',
    desc: 'Children with special needs receive dedicated medical treatment, physiotherapy, speech therapy, and psychological counselling. We partner with local healthcare providers to ensure holistic wellbeing.',
    highlights: ['Regular health checkups', 'Physiotherapy sessions', 'Speech & psychological therapy', 'Medical camp outreach'],
  },
  {
    icon: '👕',
    title: 'Clothing Distribution',
    category: 'Clothing',
    desc: 'We provide seasonal clothing and essential garments to children to ensure they remain dignified, comfortable, and confident. Distribution events are held throughout the year.',
    highlights: ['Seasonal clothing drives', 'School uniforms', 'Festival dress distribution', 'Footwear provision'],
  },
  {
    icon: '🎉',
    title: 'Festival & Cultural Events',
    category: 'Events',
    desc: 'We celebrate every festival with our children — Pongal, Diwali, Christmas, and more. Cultural events bring joy, a sense of belonging, and rich experiences to every child\'s life.',
    highlights: ['All major festivals celebrated', 'Cultural performances', 'Sports days', 'Annual day events'],
  },
  {
    icon: '👴',
    title: 'Elderly Care',
    category: 'Senior Care',
    desc: 'Our outreach extends to elderly individuals in the community who need support. We provide regular check-ins, meals, medical assistance, and companionship to seniors in need.',
    highlights: ['Regular home visits', 'Meal delivery', 'Medical assistance', 'Companionship programs'],
  },
]

export default function Activities() {
  const revealRefs = useRef([])

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    revealRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  return (
    <main className="activities page-enter">

      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section-tag">What We Do</span>
          <h1>Our Activities &<br/><em>Programs</em></h1>
          <p>From daily meals to medical care — every activity is driven by love, purpose, and commitment to change.</p>
        </div>
      </section>

      <section className="activities-main">
        <div className="container">
          <div className="activities-intro reveal" ref={addRef}>
            <span className="section-tag">Our Reach</span>
            <h2 className="section-title">Comprehensive Care for Every Child</h2>
            <p className="section-subtitle">
              We don't just address one need — we address all of them. From the moment a child wakes up to when they sleep, we ensure they are nourished, safe, educated, and loved.
            </p>
          </div>

          <div className="activities-grid">
            {activities.map((a, i) => (
              <div
                className="activity-card reveal"
                ref={addRef}
                key={a.title}
                style={{ transitionDelay: `${(i % 2) * 0.12}s` }}
              >
                <div className="activity-card__header">
                  <div className="activity-card__icon">{a.icon}</div>
                  <div>
                    <span className="activity-card__category">{a.category}</span>
                    <h3>{a.title}</h3>
                  </div>
                </div>
                <p className="activity-card__desc">{a.desc}</p>
                <ul className="activity-card__highlights">
                  {a.highlights.map(h => (
                    <li key={h}><span className="activity-bullet">✓</span> {h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Sponsor */}
      <section className="activities-sponsor">
        <div className="container">
          <div className="activities-sponsor__inner reveal" ref={addRef}>
            <div className="activities-sponsor__text">
              <span className="section-tag">Food Sponsorship</span>
              <h2 className="section-title">Sponsor a Meal for 50 Children</h2>
              <p>Your contribution directly fills the plates of 50 children. You can sponsor a single meal or an entire day of nourishment.</p>
              <Link to="/donate" className="btn btn-primary" style={{ marginTop: 24 }}>
                ♥ Sponsor Now
              </Link>
            </div>
            <div className="activities-sponsor__table">
              {[
                { label: 'Special Food for 1 Day', amount: '₹15,000', note: 'All 3 meals for 50 children' },
                { label: 'Morning Breakfast',       amount: '₹5,500',  note: 'Start the day right' },
                { label: 'Afternoon Lunch',         amount: '₹6,500',  note: 'The biggest meal of the day' },
                { label: 'Night Dinner',            amount: '₹5,500',  note: 'End the day with warmth' },
              ].map(row => (
                <div className="sponsor-row" key={row.label}>
                  <div>
                    <strong>{row.label}</strong>
                    <span>{row.note}</span>
                  </div>
                  <div className="sponsor-row__amount">{row.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
