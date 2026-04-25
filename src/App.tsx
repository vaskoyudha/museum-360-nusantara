import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  Clock3,
  Compass,
  GraduationCap,
  Landmark,
  MapPin,
  Menu,
  MonitorSmartphone,
  Sparkles,
  Ticket,
  UsersRound,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { audienceBenefits, galleryItems, museums, type Museum } from './data/museums';
import { TourViewer } from './components/TourViewer';

const navItems = ['Museums', '360 Tour', 'Stories', 'Visit'];

function App() {
  const [activeMuseum, setActiveMuseum] = useState<Museum>(museums[0]);
  const primaryMuseums = useMemo(() => museums.slice(0, 4), []);

  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <FeaturedMuseums museums={primaryMuseums} activeId={activeMuseum.id} onSelect={setActiveMuseum} />
      <TourSection activeMuseum={activeMuseum} museums={primaryMuseums} onSelect={setActiveMuseum} />
      <AudienceSection />
      <GalleryVisitSection />
    </main>
  );
}

function Header() {
  return (
    <header className="glass-nav" aria-label="Primary navigation">
      <a className="brand-mark" href="#top" aria-label="Museum360 Nusantara home">
        <span className="brand-symbol">✦</span>
        <span><strong>Museum360</strong> Nusantara</span>
      </a>
      <nav className="nav-links" aria-label="Site sections">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replace('360 ', 'tour-').replace(' ', '-')}`}>{item}</a>
        ))}
      </nav>
      <button className="icon-button" type="button" aria-label="Open menu">
        <Menu size={22} />
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section section-pad">
      <div className="hero-atmosphere" aria-hidden="true" />
      <div className="hero-card glass-panel reveal-card">
        <p className="eyebrow"><span /> 360° Immersive Museum Experience</p>
        <h1>Step Inside Indonesia’s Living Heritage</h1>
        <p className="hero-copy">Explore museum halls, artifacts, and stories through immersive 360° virtual tours built for curious visitors everywhere.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#tour-tour"><Compass size={20} /> Start 360 Tour</a>
          <a className="button button-ghost" href="#museums"><Landmark size={20} /> Explore Museums</a>
        </div>
      </div>
      <div className="hero-proof glass-strip" aria-label="Museum360 highlights">
        <span><Compass size={22} /> 360° immersive<br /><small>Interactive experience</small></span>
        <span><Sparkles size={22} /> Authentic artifacts<br /><small>Digital preservation</small></span>
        <span><MapPin size={22} /> Indonesian heritage<br /><small>From Sabang to Merauke</small></span>
      </div>
    </section>
  );
}

function FeaturedMuseums({ museums: featured, activeId, onSelect }: { museums: Museum[]; activeId: string; onSelect: (museum: Museum) => void }) {
  return (
    <section id="museums" className="museum-section section-pad">
      <div className="section-heading editorial-heading">
        <p className="eyebrow"><span /> Featured Indonesian Museums</p>
        <h2>Discover Museums Across Indonesia</h2>
        <p>Curated halls, collections, and stories from Jakarta, Yogyakarta, Bandung, and beyond.</p>
        <a className="text-link" href="#tour-tour">Explore all museums <ArrowRight size={18} /></a>
      </div>
      <div className="museum-grid">
        {featured.map((museum, index) => (
          <button
            type="button"
            className={`museum-card glass-panel ${museum.id === activeId ? 'active' : ''}`}
            key={museum.id}
            onClick={() => onSelect(museum)}
          >
            <span className="card-index">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{museum.name}</h3>
              <p className="location"><MapPin size={17} /> {museum.city}</p>
              <p>{museum.description}</p>
              <span className="tag-pill"><Landmark size={15} /> {museum.category}</span>
            </div>
            <span className={`museum-thumb ${museum.accent}`} aria-hidden="true">
              <span />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function TourSection({ activeMuseum, museums: scenes, onSelect }: { activeMuseum: Museum; museums: Museum[]; onSelect: (museum: Museum) => void }) {
  return (
    <section id="tour-tour" className="tour-section section-pad">
      <div className="tour-copy">
        <p className="eyebrow"><span /> 360 Tour Experience</p>
        <h2>Enter the 360° Hall</h2>
        <p>Move through curated spaces, pause at artifacts, and discover context without leaving your browser.</p>
        <div className="scene-list" aria-label="Choose museum scene">
          {scenes.map((scene) => (
            <button className={scene.id === activeMuseum.id ? 'active' : ''} type="button" key={scene.id} onClick={() => onSelect(scene)}>
              <Landmark size={18} /> {scene.highlight}
            </button>
          ))}
        </div>
      </div>
      <TourViewer museum={activeMuseum} />
      <aside className="current-scene glass-panel">
        <span className="round-icon"><Landmark size={22} /></span>
        <p className="eyebrow small">Current Scene</p>
        <h3>{activeMuseum.name}</h3>
        <p><MapPin size={17} /> {activeMuseum.city}, {activeMuseum.province}</p>
        <hr />
        <p className="scene-note">Interactive markers available when real panorama hotspots are added.</p>
      </aside>
    </section>
  );
}

function AudienceSection() {
  const icons = [GraduationCap, Ticket, BookOpen, UsersRound];

  return (
    <section id="stories" className="audience-section section-pad">
      <div className="rhythm-line" aria-hidden="true"><span>Explore</span><span>Discover</span><span>Connect</span></div>
      <div className="section-heading audience-heading">
        <p className="eyebrow"><span /> Audience Benefits | Cultural Storytelling</p>
        <h2>Built for Curious Visitors</h2>
        <p>From classrooms to travel planning, every tour turns heritage into something people can explore.</p>
      </div>
      <div className="benefit-grid">
        {audienceBenefits.map((benefit, index) => {
          const Icon = icons[index];
          return (
            <article className="benefit-card glass-panel" key={benefit.title}>
              <span className="round-icon"><Icon size={32} /></span>
              <div>
                <h3>{benefit.title}</h3>
                <p>{benefit.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="metrics-strip glass-panel">
        <strong>4+<span>Cities</span></strong>
        <strong>360°<span>Views</span></strong>
        <strong><MonitorSmartphone size={54} /><span>All Devices</span></strong>
      </div>
    </section>
  );
}

function GalleryVisitSection() {
  const icons = [Sparkles, Building2, BookOpen, MapPin];

  return (
    <section id="visit" className="gallery-visit section-pad">
      <div className="gallery-panel">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Heritage Gallery</p>
          <h2>Explore Nusantara’s Living Heritage</h2>
          <p>Artifacts, architecture, stories, and curated routes — gateways to the cultures that shape the archipelago.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <article className={`gallery-card gallery-${index + 1}`} key={item.title}>
                <div className="gallery-overlay glass-panel">
                  <Icon size={25} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                  <ArrowRight size={22} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <aside className="visit-card glass-panel">
        <span className="round-icon"><CalendarDays size={24} /></span>
        <h2>Plan a Real Visit After the Virtual Tour</h2>
        <p>Demo planning details are provided as content placeholders; verify official museum sources before production.</p>
        <div className="visit-grid">
          <InfoTile icon={Clock3} title="Opening Hours" text="Tuesday – Sunday, 09:00 – 17:00 WIB" />
          <InfoTile icon={MapPin} title="Location" text="Museum guide pages can link to official maps." />
          <InfoTile icon={Ticket} title="Duration" text="2–3 hours for galleries, stories, and immersive experiences." />
          <InfoTile icon={BookOpen} title="Collection Focus" text="Civilizations, maritime heritage, daily life, and craftsmanship." />
        </div>
      </aside>
      <div className="final-cta glass-panel">
        <p>Begin with a virtual hall, continue with a real visit.</p>
        <a className="button button-primary" href="#tour-tour"><Compass size={19} /> Start the Tour</a>
        <a className="button button-ghost" href="#museums"><BookOpen size={19} /> View Museum Guide</a>
      </div>
      <footer className="footer-line">
        <strong>Museum360 Nusantara</strong>
        <span>Connecting heritage, inspiring tomorrow.</span>
      </footer>
    </section>
  );
}

function InfoTile({ icon: Icon, title, text }: { icon: typeof Clock3; title: string; text: string }) {
  return (
    <article className="info-tile">
      <Icon size={22} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default App;
