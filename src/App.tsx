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

const navItems = [
  { label: 'Museum', href: '#museums' },
  { label: 'Tur 360', href: '#tour-tour' },
  { label: 'Cerita', href: '#stories' },
  { label: 'Kunjungi', href: '#visit' },
];

function App() {
  const [activeMuseum, setActiveMuseum] = useState<Museum>(museums[0]);
  const primaryMuseum = useMemo(() => museums.slice(0, 4), []);

  return (
    <main className="site-shell">
      <Header />
      <Hero />
      <FeaturedMuseum museums={primaryMuseum} activeId={activeMuseum.id} onSelect={setActiveMuseum} />
      <TourSection activeMuseum={activeMuseum} museums={museums} onSelect={setActiveMuseum} />
      <AudienceSection />
      <GalleryKunjungiSection />
    </main>
  );
}

function Header() {
  return (
    <header className="glass-nav" aria-label="Navigasi utama">
      <a className="brand-mark" href="#top" aria-label="beranda Museum360 Nusantara">
        <span className="brand-symbol">✦</span>
        <span><strong>Museum360</strong> Nusantara</span>
      </a>
      <nav className="nav-links" aria-label="Bagian situs">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <button className="icon-button" type="button" aria-label="Buka menu">
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
        <p className="eyebrow"><span /> Pengalaman Museum 360°</p>
        <h1>Jelajahi Museum Mpu Tantular dalam 360°</h1>
        <p className="hero-copy">Susuri 23 titik panorama asli Museum Mpu Tantular di Sidoarjo — mulai dari gerbang masuk, percabangan rute, ruang pamer, hingga area tangga.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#tour-tour"><Compass size={20} /> Mulai Tur 360</a>
          <a className="button button-ghost" href="#museums"><Landmark size={20} /> Jelajahi Museum</a>
        </div>
      </div>
      <div className="hero-proof glass-strip" aria-label="Sorotan Museum360">
        <span><Compass size={22} /> 23 titik<br /><small>Rute Mpu Tantular</small></span>
        <span><Sparkles size={22} /> Panorama asli<br /><small>Dari folder asetmu</small></span>
        <span><MapPin size={22} /> Sidoarjo, Jawa Timur<br /><small>Museum Mpu Tantular</small></span>
      </div>
    </section>
  );
}

function FeaturedMuseum({ museums: featured, activeId, onSelect }: { museums: Museum[]; activeId: string; onSelect: (museum: Museum) => void }) {
  return (
    <section id="museums" className="museum-section section-pad">
      <div className="section-heading editorial-heading">
        <p className="eyebrow"><span /> Rute 360 Museum Mpu Tantular</p>
        <h2>Jelajahi Seluruh Rute Museum</h2>
        <p>Setiap kartu menggunakan gambar panorama asli 8000×4000 yang kamu sediakan untuk Museum Mpu Tantular.</p>
        <a className="text-link" href="#tour-tour">Buka titik rute <ArrowRight size={18} /></a>
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
        <p className="eyebrow"><span /> Museum Mpu Tantular Tur 360</p>
        <h2>Masuk ke Museum Mpu Tantular</h2>
        <p>Pilih salah satu titik rute, lalu geser viewer 360° untuk melihat panorama museum yang sebenarnya.</p>
        <div className="scene-list" aria-label="Pilih titik museum">
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
        <p className="eyebrow small">Titik Saat Ini</p>
        <h3>{activeMuseum.highlight}</h3>
        <p><MapPin size={17} /> {activeMuseum.name} · {activeMuseum.city}, {activeMuseum.province}</p>
        <hr />
        <p className="scene-note">Dimuat dari folder panorama Museum Mpu Tantular yang kamu berikan.</p>
      </aside>
    </section>
  );
}

function AudienceSection() {
  const icons = [GraduationCap, Ticket, BookOpen, UsersRound];

  return (
    <section id="stories" className="audience-section section-pad">
      <div className="rhythm-line" aria-hidden="true"><span>Jelajahi</span><span>Temukan</span><span>Terhubung</span></div>
      <div className="section-heading audience-heading">
        <p className="eyebrow"><span /> Museum Mpu Tantular | Kunjungan Digital</p>
        <h2>Dibangun dari Foto Museum yang Kamu Berikan</h2>
        <p>Website ini sekarang menjadikan scene 360 asli Mpu Tantular sebagai pusat pengalaman, dibungkus dengan antarmuka kaca yang modern.</p>
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
        <strong>{museumProfile.sceneCount}<span>Titik</span></strong>
        <strong>360°<span>Panorama</span></strong>
        <strong><MonitorSmartphone size={54} /><span>Semua Perangkat</span></strong>
      </div>
    </section>
  );
}

function GalleryKunjungiSection() {
  const icons = [Sparkles, Building2, BookOpen, MapPin];

  return (
    <section id="visit" className="gallery-visit section-pad">
      <div className="gallery-panel">
        <div className="section-heading compact">
          <p className="eyebrow"><span /> Galeri Warisan</p>
          <h2>Jelajahi Rute Museum Mpu Tantular</h2>
          <p>Ringkasan visual berbasis galeri dari frame pilihan dalam kumpulan panorama Museum Mpu Tantular.</p>
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
        <h2>Rencanakan Kunjungan Setelah Tur Mpu Tantular</h2>
        <p>Pratinjau rute dibuat dari foto yang kamu berikan; pastikan jam buka dan tiket melalui sumber resmi museum sebelum produksi.</p>
        <div className="visit-grid">
          <InfoTile icon={Clock3} title="Jam Buka" text="Cek jam operasional terbaru melalui kanal resmi Museum Mpu Tantular." />
          <InfoTile icon={MapPin} title="Lokasi" text="Sidoarjo, Jawa Timur — tambahkan tautan peta resmi sebelum produksi." />
          <InfoTile icon={Ticket} title="Durasi" text="23 titik panorama untuk rute virtual." />
          <InfoTile icon={BookOpen} title="Fokus Koleksi" text="Scene rute, ruang pamer, akses, dan transisi tangga." />
        </div>
      </aside>
      <div className="final-cta glass-panel">
        <p>Mulai dari rute 360°, lalu lanjutkan dengan kunjungan langsung ke Museum Mpu Tantular.</p>
        <a className="button button-primary" href="#tour-tour"><Compass size={19} /> Mulai Tur</a>
        <a className="button button-ghost" href="#museums"><BookOpen size={19} /> Lihat Panduan Museum</a>
      </div>
      <footer className="footer-line">
        <strong>Museum360 Nusantara</strong>
        <span>Rute 360 Museum Mpu Tantular didukung oleh aset panorama milikmu.</span>
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
