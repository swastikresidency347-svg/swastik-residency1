import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const phone = '8328041865'
const whatsapp = `https://wa.me/91${phone}?text=${encodeURIComponent(
  'Hello Swastik Residency, I would like to enquire about room availability.'
)}`
const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  site.address
)}`

const rooms = [
  { name: 'Double Room', image: '/double-room.jpg', desc: 'Comfortable room for couples or small families.', tag: 'Double' },
  { name: 'Triple Room', image: '/triple-room.jpg', desc: 'Spacious setup suitable for families and small groups.', tag: 'Triple' },
  { name: 'Duplex Room', image: '/duplex-room.jpg', desc: 'Extra space for guests looking for a larger stay.', tag: 'Duplex' },
]

function App() {
  const [menu, setMenu] = useState(false)

  return (
    <div>
      <header className="nav">
        <a className="brand" href="#home" onClick={() => setMenu(false)}>
          <span className="brand-mark">SR</span>
          <span><strong>{site.name}</strong><small>Mantralayam</small></span>
        </a>
        <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">☰</button>
        <nav className={menu ? 'open' : ''}>
          <a href="#rooms" onClick={() => setMenu(false)}>Rooms</a>
          <a href="#amenities" onClick={() => setMenu(false)}>Amenities</a>
          <a href="#gallery" onClick={() => setMenu(false)}>Gallery</a>
          <a href="#location" onClick={() => setMenu(false)}>Location</a>
          <a className="nav-book" href={whatsapp} target="_blank" rel="noreferrer">Book / Enquire</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">{site.tagline}</p>
            <h1>Stay comfortably.<br /><em>Visit peacefully.</em></h1>
            <p className="hero-text">
              Welcome to {site.name} — clean, comfortable rooms with essential amenities
              for families and pilgrims visiting Mantralayam.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Us</a>
              <a className="btn secondary" href="#rooms">Explore Rooms</a>
            </div>
            <div className="quick">
              <span>From <b>₹{site.startPrice.toLocaleString('en-IN')}</b></span>
              <span>•</span>
              <span>Wi-Fi</span>
              <span>•</span>
              <span>Hot Water</span>
              <span>•</span>
              <span>Lift</span>
            </div>
          </div>
          <div className="hero-card">
            <img src="/double-room.jpg" alt="Double room at Swastik Residency" />
            <div className="hero-card-caption"><span>Comfortable rooms</span><b>View rooms ↓</b></div>
          </div>
        </section>

        <section className="intro">
          <p className="eyebrow">Welcome</p>
          <h2>A simple, comfortable stay for your Mantralayam visit.</h2>
          <p>
            Whether you are visiting for pilgrimage or travelling with family, Swastik Residency
            offers practical accommodation with clean rooms and convenient facilities.
          </p>
        </section>

        <section id="rooms" className="section">
          <div className="section-head">
            <div><p className="eyebrow">Accommodation</p><h2>Choose your room</h2></div>
            <p>Room rates start from <strong>₹{site.startPrice.toLocaleString('en-IN')}</strong>. Contact us for current availability and exact pricing.</p>
          </div>
          <div className="room-grid">
            {rooms.map(room => (
              <article className="room" key={room.name}>
                <div className="room-img"><img src={room.image} alt={room.name} loading="lazy" /><span>{room.tag}</span></div>
                <div className="room-body"><h3>{room.name}</h3><p>{room.desc}</p><div className="price">{room.price ? `₹${Number(room.price).toLocaleString('en-IN')}` : 'Contact for price'}</div><a href={whatsapp} target="_blank" rel="noreferrer">Check availability →</a></div>
              </article>
            ))}
          </div>
        </section>

        <section id="amenities" className="amenities">
          <div><p className="eyebrow">Essentials</p><h2>Everything you need for a relaxed stay.</h2></div>
          <div className="amenity-grid">
            <div><span>⌁</span><h3>{site.amenities[0]||'Wi-Fi'}</h3><p>Stay connected during your visit.</p></div>
            <div><span>♨</span><h3>{site.amenities[1]||'Hot Water'}</h3><p>Hot water available for your comfort.</p></div>
            <div><span>⇅</span><h3>{site.amenities[2]||'Lift'}</h3><p>Convenient access to the floors.</p></div>
          </div>
        </section>

        <section id="gallery" className="section gallery">
          <div className="section-head"><div><p className="eyebrow">Gallery</p><h2>See your stay</h2></div><p>More property and building photos can be added here.</p></div>
          <div className="gallery-grid">
            <img src="/triple-room.jpg" alt="Triple room" loading="lazy" />
            <img src="/double-room.jpg" alt="Double room" loading="lazy" />
            <img src="/duplex-room.jpg" alt="Duplex room" loading="lazy" />
          </div>
        </section>

        <section id="location" className="location">
          <div>
            <p className="eyebrow">Find us</p>
            <h2>Conveniently located in Mantralayam.</h2>
            <p>{site.address}</p>
            <a className="btn primary" href={maps} target="_blank" rel="noreferrer">Open in Google Maps</a>
          </div>
          <div className="map-card">
            <div className="pin">⌖</div>
            <strong>{site.name}</strong>
            <span>Nagaladina Road, Mantralayam</span>
          </div>
        </section>

        <section className="cta">
          <p className="eyebrow">Plan your stay</p>
          <h2>Ready to book your room?</h2>
          <p>Call or WhatsApp us to check availability and rates.</p>
          <div className="hero-actions">
            <a className="btn primary" href={`tel:+91${phone}`}>Call 8328041865</a>
            <a className="btn light" href={whatsapp} target="_blank" rel="noreferrer">WhatsApp Booking</a>
          </div>
        </section>
      </main>

      <footer>
        <div><strong>{site.name}</strong><p>Comfortable stay in Mantralayam.</p></div>
        <div><p>Nagaladina Road, Mantralayam, Kurnool, AP – 518345</p><p>+91 83280 41865</p></div>
        <p className="copyright">© {new Date().getFullYear()} Swastik Residency. All rights reserved.</p>
      </footer>

      <a className="floating-wa" href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
