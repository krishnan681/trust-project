import { useEffect, useRef, useState } from 'react'
import './Gallery.css'

// Gallery uses emoji-based placeholder cards since real images would need hosting
const galleryItems = [
  { id: 1, emoji: '🍱', title: 'Daily Meal Service',      category: 'food',       desc: 'Hot nutritious meals served to children daily' },
  { id: 2, emoji: '👧', title: 'Children at Shelter',     category: 'shelter',    desc: 'Our shelter home — a safe haven for every child' },
  { id: 3, emoji: '📚', title: 'Education Workshop',      category: 'education',  desc: 'Learning events that open doors of opportunity' },
  { id: 4, emoji: '🎉', title: 'Pongal Celebration',      category: 'events',     desc: 'Celebrating Tamil culture and festivals with joy' },
  { id: 5, emoji: '🏥', title: 'Medical Camp',            category: 'medical',    desc: 'Free healthcare and therapy for children in need' },
  { id: 6, emoji: '👕', title: 'Clothing Distribution',   category: 'clothing',   desc: 'Distributing seasonal garments and essentials' },
  { id: 7, emoji: '💃', title: 'Cultural Performance',    category: 'events',     desc: 'Children showcasing their talents and creativity' },
  { id: 8, emoji: '🤝', title: 'Volunteer Day',           category: 'community',  desc: 'Volunteers joining hands to serve the community' },
  { id: 9, emoji: '🎂', title: 'Birthday Celebrations',   category: 'events',     desc: 'Every child deserves to feel special on their day' },
  { id: 10, emoji: '🌱', title: 'Empowerment Session',    category: 'education',  desc: 'Building skills and confidence for a better future' },
  { id: 11, emoji: '🙏', title: 'Community Prayer',       category: 'community',  desc: 'Coming together in gratitude and community spirit' },
  { id: 12, emoji: '🎨', title: 'Art Therapy',            category: 'medical',    desc: 'Creative expression as healing and development' },
  { id: 13, emoji: '🏋️', title: 'Physiotherapy Session',  category: 'medical',    desc: 'Dedicated therapy for children with special needs' },
  { id: 14, emoji: '🌾', title: 'Harvest Festival',       category: 'events',     desc: 'Celebrating the spirit of giving and abundance' },
  { id: 15, emoji: '📝', title: 'Exam Preparation',       category: 'education',  desc: 'Helping children prepare and succeed in studies' },
  { id: 16, emoji: '🎤', title: 'Awareness Campaign',     category: 'community',  desc: 'Spreading awareness about child welfare in society' },
]

const categories = [
  { id: 'all',       label: 'All' },
  { id: 'food',      label: 'Food & Nutrition' },
  { id: 'shelter',   label: 'Shelter' },
  { id: 'education', label: 'Education' },
  { id: 'medical',   label: 'Medical' },
  { id: 'events',    label: 'Events' },
  { id: 'clothing',  label: 'Clothing' },
  { id: 'community', label: 'Community' },
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const revealRefs = useRef([])

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(g => g.category === filter)

  useEffect(() => {
    window.scrollTo(0, 0)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.08 }
    )
    revealRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    revealRefs.current = []
  }, [filter])

  const addRef = el => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el) }

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <main className="gallery page-enter">

      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section-tag">Our Gallery</span>
          <h1>Moments of<br/><em>Impact & Joy</em></h1>
          <p>Every photograph tells the story of a life touched, a smile earned, and a future built.</p>
        </div>
      </section>

      <section className="gallery-main">
        <div className="container">

          {/* Filters */}
          <div className="gallery-filters reveal" ref={addRef}>
            {categories.map(c => (
              <button
                key={c.id}
                className={`gallery-filter-btn ${filter === c.id ? 'active' : ''}`}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className="gallery-item reveal"
                ref={addRef}
                style={{ transitionDelay: `${(i % 4) * 0.07}s` }}
                onClick={() => setLightbox(item)}
              >
                <div className="gallery-item__img">
                  <span className="gallery-item__emoji">{item.emoji}</span>
                </div>
                <div className="gallery-item__overlay">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span className="gallery-item__zoom">🔍 View</span>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="gallery-empty">No items in this category yet.</div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <div className="lightbox__card" onClick={e => e.stopPropagation()}>
            <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
            <div className="lightbox__img">
              <span>{lightbox.emoji}</span>
            </div>
            <div className="lightbox__body">
              <span className="section-tag">{categories.find(c => c.id === lightbox.category)?.label}</span>
              <h3>{lightbox.title}</h3>
              <p>{lightbox.desc}</p>
            </div>
          </div>
        </div>
      )}

    </main>
  )
}
