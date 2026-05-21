import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home       from './pages/Home'
import About      from './pages/About'
import Activities from './pages/Activities'
import Gallery    from './pages/Gallery'
import Contact    from './pages/Contact'
import Donate     from './pages/Donate'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/about"      element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/gallery"    element={<Gallery />} />
        <Route path="/contact"    element={<Contact />} />
        <Route path="/donate"     element={<Donate />} />
        {/* 404 fallback */}
        <Route path="*" element={
          <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16, paddingTop: 'var(--nav-h)', fontFamily: 'var(--font-serif)', color: 'var(--muted)' }}>
            <span style={{ fontSize: '4rem' }}>🌸</span>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--bark)', fontSize: '2rem' }}>Page Not Found</h2>
            <p>The page you're looking for doesn't exist.</p>
            <a href="/" className="btn btn-primary" style={{ marginTop: 8 }}>Go Home</a>
          </div>
        } />
      </Routes>
      <Footer />
    </>
  )
}
