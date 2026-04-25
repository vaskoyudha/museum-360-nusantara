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
import { audienceBenefits, galleryItems, museumProfile, museums, type Museum } from './data/museums';
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
      <TourSection activeMuseum={activeMuseum} museums={museums} onSelect={setActiveMuseum} />
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
        <h1>Tour Museum Mpu Tantular in 360°</h1>
        <p className="hero-copy">Move through 23 real panorama points from Museum Mpu Tantular in Sidoarjo — from the entrance gate to route turns, galleries, and stair transitions.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#tour-tour"><Compass size={20} /> Start 360 Tour</a>
          <a className="button button-ghost" href="#museums"><Landmark size={20} /> Explore Museums</a>
        </div>
      </div>
      <div className="hero-proof glass-strip" aria-label="Museum360 highlights">
        <span><Compass size={22} /> 23 scenes<br /><small>Mpu Tantular route</small></span>
        <span><Sparkles size={22} /> Real panoramas<br /><small>From your asset folder</small></span>
        <span><MapPin size={22} /> Sidoarjo, East Java<br /><small>Museum Mpu Tantular</small></span>
      </div>
    </section>
  );
}

function FeaturedMuseums({ museums: featured, activeId, onSelect }: { museums: Museum[]; activeId: string; onSelect: (museum: Museum) => void }) {
  return (
    <section id="museums" className="museum-section section-pad">
      <div className="section-heading editorial-heading">
        <p className="eyebrow"><span /> Museum Mpu Tantular 360 Route</p>
        <h2>Explore the Whole Museum Route</h2>
        <p>Every card is built from the real 8000×4000 panorama images you provided for Museum Mpu Tantular.</p>
        <a className="text-link" href="#tour-tour">Open route scenes <ArrowRight size={18} /></a>
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
            <span
              className={`museum-thumb ${museum.accent}`}
              aria-hidden="true"
              style={{ backgroundImage: `linear-gradient(180deg, rgba(36, 29, 23, 0.05), rgba(36, 29, 23, 0.42)), url(${museum.image})` }}
            >
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
        <p className="eyebrow"><span /> Museum Mpu Tantular 360 Tour</p>
        <h2>Enter Museum Mpu Tantular</h2>
        <p>Choose any captured route point, then drag the 360° viewer to look around the actual museum panorama.</p>
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
        <h3>{activeMuseum.highlight}</h3>
        <p><MapPin size={17} /> {activeMuseum.name} · {activeMuseum.city}, {activeMuseum.province}</p>
        <hr />
        <p className="scene-note">Loaded from the supplied Museum Mpu Tantular panorama folder.</p>
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
        <p className="eyebrow"><span /> Museum Mpu Tantular | Digital Visit</p>
        <h2>Built Around Your Museum Photos</h2>
        <p>The website now uses the real Mpu Tantular 360 scenes as the center of the experience, with a glass interface wrapped around them.</p>
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
        <strong>{museumProfile.sceneCount}<span>Scenes</span></strong>
        <strong>360°<span>Panoramas</span></strong>
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
          <h2>Explore Museum Mpu Tantular’s Route</h2>
          <p>A gallery-led overview using selected frames from the supplied Museum Mpu Tantular panorama set.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => {
            const Icon = icons[index];
            return (
              <article
                className={`gallery-card gallery-${index + 1}`}
                key={item.title}
                style={{ backgroundImage: `linear-gradient(180deg, rgba(36, 29, 23, 0.04), rgba(36, 29, 23, 0.48)), url(${item.image})` }}
              >
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
        <h2>Plan a Real Visit After the Mpu Tantular Tour</h2>
        <p>The route preview is built from supplied photos; verify opening hours and ticket details with official museum sources before production.</p>
        <div className="visit-grid">
          <InfoTile icon={Clock3} title="Opening Hours" text="Verify current hours with official Museum Mpu Tantular channels." />
          <InfoTile icon={MapPin} title="Location" text="Sidoarjo, East Java — add official map link before production." />
          <InfoTile icon={Ticket} title="Duration" text="23 captured panorama points for the virtual route." />
          <InfoTile icon={BookOpen} title="Collection Focus" text="Route scenes, galleries, access points, and stair transitions." />
        </div>
      </aside>
      <div className="final-cta glass-panel">
        <p>Begin with the 360° route, continue with a real Museum Mpu Tantular visit.</p>
        <a className="button button-primary" href="#tour-tour"><Compass size={19} /> Start the Tour</a>
        <a className="button button-ghost" href="#museums"><BookOpen size={19} /> View Museum Guide</a>
      </div>
      <footer className="footer-line">
        <strong>Museum360 Nusantara</strong>
        <span>Museum Mpu Tantular 360 route powered by your panorama assets.</span>
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
