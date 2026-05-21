import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const links = [
  { to: '/',          label: 'Home' },
  { to: '/about',     label: 'About Us' },
  { to: '/activities',label: 'Activities' },
  { to: '/gallery',   label: 'Gallery' },
  { to: '/contact',   label: 'Contact Us' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <div className="navbar__logo-icon">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M20 8 L24 16 L32 16 L26 22 L28 30 L20 25 L12 30 L14 22 L8 16 L16 16 Z" fill="currentColor" opacity="0.85"/>
            </svg>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Vinayaka Need</span>
            <span className="navbar__logo-sub">Charitable Trust</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/donate" className="btn btn-primary navbar__donate">
            Donate Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar__drawer ${menuOpen ? 'navbar__drawer--open' : ''}`}>
        <nav className="navbar__drawer-nav">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="btn btn-primary"
            style={{ marginTop: 12, justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  )
}
