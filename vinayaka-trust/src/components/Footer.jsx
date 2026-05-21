import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="var(--bark)"/>
        </svg>
      </div>

      <div className="footer__body">
        <div className="container footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <svg viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M20 8 L24 16 L32 16 L26 22 L28 30 L20 25 L12 30 L14 22 L8 16 L16 16 Z" fill="currentColor" opacity="0.85"/>
              </svg>
              <div>
                <span className="footer__logo-name">Vinayaka Need</span>
                <span className="footer__logo-sub">Charitable Trust</span>
              </div>
            </div>
            <p className="footer__tagline">
              Uplifting people and society since 2015. Every contribution brings a smile to a child's face.
            </p>
            <div className="footer__reg">
              <span>🇮🇳 Registered with Govt. of India</span>
            </div>
          </div>

          {/* Links */}
          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              {[
                ['/', 'Home'],
                ['/about', 'About Us'],
                ['/activities', 'Activities'],
                ['/gallery', 'Gallery'],
                ['/contact', 'Contact Us'],
                ['/donate', 'Donate Now'],
              ].map(([to, label]) => (
                <li key={to}><Link to={to}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div className="footer__col">
            <h4>Donation Account</h4>
            <div className="footer__account">
              <div className="footer__account-name">VINAYAKA NEED CHARITABLE TRUST</div>
              <div className="footer__account-row"><span>Account No.</span><strong>510909010027634</strong></div>
              <div className="footer__account-row"><span>Bank</span><strong>City Union Bank</strong></div>
              <div className="footer__account-row"><span>Branch Code</span><strong>211</strong></div>
              <div className="footer__account-row"><span>IFSC</span><strong>CIUB0000211</strong></div>
              <div className="footer__account-row"><span>GPay / UPI</span><strong>9500969946</strong></div>
            </div>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4>Get in Touch</h4>
            <ul className="footer__contact-list">
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>Coimbatore, Tamil Nadu, India</span>
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+919500969946">+91 95009 69946</a>
              </li>
              <li>
                <span className="footer__contact-icon">✉️</span>
                <a href="mailto:vinayakaneedcharitabletrust@gmail.com">vinayakaneedcharitabletrust@gmail.com</a>
              </li>
            </ul>
            <Link to="/donate" className="btn btn-primary footer__donate-btn">
              Donate Now ♥
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="container footer__bottom-inner">
            <p>© 2015–{new Date().getFullYear()} Vinayaka Need Charitable Trust. All Rights Reserved.</p>
            <p className="footer__bottom-right">
              Made with ♥ for a better tomorrow
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
