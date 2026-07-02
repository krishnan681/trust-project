import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import welcomeImage from "../assets/welcome-image.jpg";

const services = [
  {
    icon: "🍱",
    title: "Food & Nutrition",
    desc: "Daily nutritious meals for 50+ children — breakfast, lunch, and dinner provided with care every single day.",
  },
  {
    icon: "🏠",
    title: "Shelter & Safety",
    desc: "Safe, nurturing homes for abandoned and mentally challenged children who need protection and belonging.",
  },
  {
    icon: "👕",
    title: "Clothing",
    desc: "Seasonal clothing and essentials provided to ensure every child stays comfortable and dignified.",
  },
  {
    icon: "📚",
    title: "Education Events",
    desc: "Skill-building workshops, schooling support, and educational events to open doors of opportunity.",
  },
  {
    icon: "💪",
    title: "Empowerment",
    desc: "Programs that strengthen individuals to become self-reliant and contribute positively to society.",
  },
  {
    icon: "🏥",
    title: "Medical Treatment",
    desc: "Healthcare access including therapies and specialised medical care for children with special needs.",
  },
];

const stats = [
  { number: "10,000+", label: "Lives impacted yearly" },
  { number: "2015", label: "Year established" },
  { number: "50+", label: "Children in shelter" },
  { number: "100%", label: "Non-profit commitment" },
];

const foodSponsor = [
  { label: "Special Food for 1 Day", amount: "₹15,000" },
  { label: "Morning Breakfast", amount: "₹5,500" },
  { label: "Afternoon Lunch", amount: "₹6,500" },
  { label: "Night Dinner", amount: "₹5,500" },
];

export default function Home() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <main className="home page-enter">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__pattern" />
        </div>

        <div className="container hero__content">
          <div className="hero__badge">
            Est. January 2015 · Coimbatore, Tamil Nadu
          </div>
          <h1 className="hero__title">
            Every Child Deserves
            <br />
            <em>Care, Love & Hope</em>
          </h1>
          <p className="hero__sub">
            Vinayaka Need Charitable Trust — a registered Non-Profit
            organization uplifting lives through Food, Shelter, Education, and
            Medical Care. Targeting <strong>10,000+ lives</strong> every year.
          </p>
          <div className="hero__actions">
            <Link to="/donate" className="btn btn-primary hero__cta">
              ♥ Donate Now
            </Link>
            <Link to="/about" className="btn btn-outline hero__learn">
              Learn About Us
            </Link>
          </div>
        </div>
        <div className="hero__stats">
          <div className="container">
            <div className="hero__stats-grid">
              {stats.map((s) => (
                <div key={s.label} className="hero__stat">
                  <span className="hero__stat-number">{s.number}</span>
                  <span className="hero__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Welcome ── */}
      <section className="welcome">
        <div className="container welcome__grid">
          <div className="welcome__visual" ref={addRef}>
            <div className="welcome__img-wrap">
              <div className="welcome__img-placeholder">
                <img
                  src={welcomeImage}
                  alt="Children at Vinayaka Need Charitable Trust"
                  className="welcome__image"
                />
              </div>
              <div className="welcome__badge-float">
                <strong>10,000+</strong>
                <span>Lives per year</span>
              </div>
            </div>
          </div>
          <div className="welcome__text reveal" ref={addRef}>
            <span className="section-tag">Welcome</span>
            <h2 className="section-title">
              Serving Communities
              <br />
              Since 2015
            </h2>
            <div className="ornament">
              <span>✦</span>
            </div>
            <p className="welcome__para">
              Vinayaka Need Charitable Trust is a registered Non-Profit
              organisation acting independently for community-based development.
              We believe every child is unique — their needs, their abilities,
              their potential.
            </p>
            <p className="welcome__para">
              We assign special educators to children based on their individual
              conditions, and every three months each child's progress is
              individually assessed. Our personalised approach ensures no child
              is left behind.
            </p>
            <div className="welcome__actions">
              <Link to="/about" className="btn btn-primary">
                Our Story
              </Link>
              <Link to="/activities" className="btn btn-outline">
                See Activities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="services">
        <div className="container">
          <div className="services__header reveal" ref={addRef}>
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">Pillars of Our Service</h2>
            <p className="section-subtitle">
              Comprehensive care that covers every dimension of a child's
              wellbeing and future.
            </p>
          </div>
          <div className="services__grid">
            {services.map((s, i) => (
              <div
                className="service-card reveal"
                ref={addRef}
                key={s.title}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="service-card__icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Food Sponsor ── */}
      <section className="sponsor">
        <div className="container">
          <div className="sponsor__inner reveal" ref={addRef}>
            <div className="sponsor__left">
              <span className="section-tag">Food Sponsorship</span>
              <h2 className="section-title">
                Feed 50 Children
                <br />
                for a Day
              </h2>
              <p className="section-subtitle">
                Your single contribution provides a full day of nourishment for
                50 children in our shelter. Choose what you'd like to sponsor.
              </p>
              <Link
                to="/donate"
                className="btn btn-primary"
                style={{ marginTop: 24 }}
              >
                Sponsor a Meal
              </Link>
            </div>
            <div className="sponsor__cards">
              {foodSponsor.map((f) => (
                <div className="sponsor__card" key={f.label}>
                  <span className="sponsor__card-label">{f.label}</span>
                  <span className="sponsor__card-amount">{f.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta reveal" ref={addRef}>
        <div className="container">
          <div className="home-cta__inner">
            <h2>Your Support Can Change a Life</h2>
            <p>
              Every rupee you give goes directly toward the care, education, and
              wellbeing of a child in need.
            </p>
            <div className="home-cta__actions">
              <Link to="/donate" className="btn btn-white">
                ♥ Donate Now
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline"
                style={{ color: "#fff", borderColor: "rgba(255,255,255,0.6)" }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
