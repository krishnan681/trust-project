import { useEffect, useRef, useState } from 'react'
import './Donate.css'

const presets = [500, 1000, 2500, 5000, 10000, 15000]

const impacts = [
  { amount: '₹500',    icon: '🥗', desc: 'Sponsors one meal for 10 children' },
  { amount: '₹1,000',  icon: '📚', desc: 'Provides study materials for one child' },
  { amount: '₹5,500',  icon: '🍳', desc: 'Breakfast for 50 children for one day' },
  { amount: '₹6,500',  icon: '🍛', desc: 'Lunch for 50 children for one day' },
  { amount: '₹15,000', icon: '🌟', desc: 'Full day of meals for 50 children' },
]

export default function Donate() {
  const revealRefs = useRef([])
  const [amount, setAmount] = useState('')
  const [custom, setCustom] = useState('')
  const [mode, setMode] = useState('upi')

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

  const selectAmount = val => {
    setAmount(val)
    setCustom('')
  }

  const finalAmount = custom || amount

  return (
    <main className="donate page-enter">

      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="container page-hero__content">
          <span className="section-tag">Donate</span>
          <h1>Your Generosity<br/><em>Changes Lives</em></h1>
          <p>Every contribution — big or small — directly impacts the life of a child in need.</p>
        </div>
      </section>

      <section className="donate-main">
        <div className="container donate-grid">

          {/* Form panel */}
          <div className="donate-panel reveal" ref={addRef}>
            <h3>Make a Donation</h3>
            <p className="donate-panel__sub">Choose an amount and payment method below.</p>

            {/* Preset amounts */}
            <div className="donate-presets">
              {presets.map(p => (
                <button
                  key={p}
                  className={`donate-preset ${amount === p && !custom ? 'active' : ''}`}
                  onClick={() => selectAmount(p)}
                >
                  ₹{p.toLocaleString()}
                </button>
              ))}
            </div>

            <div className="donate-custom">
              <label>Or enter custom amount</label>
              <div className="donate-custom__input">
                <span>₹</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={e => { setCustom(e.target.value); setAmount('') }}
                  min="1"
                />
              </div>
            </div>

            {finalAmount && (
              <div className="donate-amount-display">
                Donating: <strong>₹{Number(finalAmount).toLocaleString()}</strong>
              </div>
            )}

            {/* Payment mode tabs */}
            <div className="donate-modes">
              {[
                { id: 'upi',  label: '📱 UPI / GPay' },
                { id: 'bank', label: '🏦 Bank Transfer' },
                { id: 'qr',   label: '📷 QR Code' },
              ].map(m => (
                <button
                  key={m.id}
                  className={`donate-mode-btn ${mode === m.id ? 'active' : ''}`}
                  onClick={() => setMode(m.id)}
                >
                  {m.label}
                </button>
              ))}
            </div>

            {mode === 'upi' && (
              <div className="donate-detail-box">
                <div className="donate-detail-row">
                  <span>UPI ID / GPay Number</span>
                  <strong>9500969946</strong>
                </div>
                <div className="donate-detail-row">
                  <span>Name</span>
                  <strong>Vinayaka Need Charitable Trust</strong>
                </div>
                <p className="donate-detail-note">
                  Open any UPI app (GPay, PhonePe, Paytm, BHIM) and send to <strong>9500969946</strong>
                </p>
              </div>
            )}

            {mode === 'bank' && (
              <div className="donate-detail-box">
                {[
                  ['Account Name',   'VINAYAKA NEED CHARITABLE TRUST'],
                  ['Account Number', '510909010027634'],
                  ['Bank',           'City Union Bank'],
                  ['Branch Code',    '211'],
                  ['IFSC Code',      'CIUB0000211'],
                ].map(([label, val]) => (
                  <div className="donate-detail-row" key={label}>
                    <span>{label}</span>
                    <strong>{val}</strong>
                  </div>
                ))}
              </div>
            )}

            {mode === 'qr' && (
              <div className="donate-qr-box">
                <div className="donate-qr-placeholder">
                  <span>📷</span>
                  <p>Scan this QR code with any UPI app to donate</p>
                  <p className="donate-qr-id">UPI: 9500969946</p>
                </div>
                <p className="donate-detail-note">
                  Open your camera or any UPI app and scan the QR code above.
                </p>
              </div>
            )}

            <div className="donate-note">
              <span>🔒</span>
              <p>All donations go directly to child welfare programs. We are registered with the Government of India.</p>
            </div>
          </div>

          {/* Impact panel */}
          <div className="donate-impact reveal" ref={addRef}>
            <span className="section-tag">Your Impact</span>
            <h2 className="section-title">What Your Gift Does</h2>
            <div className="ornament"><span>✦</span></div>

            <div className="donate-impact__items">
              {impacts.map(imp => (
                <div className="donate-impact__item" key={imp.amount}>
                  <div className="donate-impact__icon">{imp.icon}</div>
                  <div>
                    <strong>{imp.amount}</strong>
                    <p>{imp.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="donate-trust">
              <h4>Why Trust Us?</h4>
              <ul>
                <li>✓ Registered Non-Profit (Govt. of India)</li>
                <li>✓ Operating since January 2015</li>
                <li>✓ 10,000+ lives impacted annually</li>
                <li>✓ 100% transparent fund usage</li>
                <li>✓ Regular updates to donors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
