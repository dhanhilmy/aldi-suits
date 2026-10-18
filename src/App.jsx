import { ArrowRight, ArrowUpRight, Camera, Check, MapPin, MessageCircle, Phone } from 'lucide-react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SectionHeading from './components/SectionHeading.jsx'
import { contact, createWhatsAppUrl, customOptions, eventSuits, rentalSteps, rentalTerms, weddingAddOns, weddingCollection, weddingPackages } from './data.js'

function CollectionSection() {
  return <section className="section collection-section" id="collection" aria-labelledby="collection-title">
    <div className="collection-intro">
      <div><p className="eyebrow">01 / Tentang ALDI Suits</p><h2 className="intro-statement" id="collection-title">Jas untuk momen yang berarti.</h2><p className="section-description">ALDI Suits menawarkan sewa jas pengantin, pilihan untuk acara formal, paket keluarga, dan opsi custom-made.</p></div>
      <div className="collection-price"><span>{weddingCollection.name}</span><strong>{weddingCollection.price}</strong><small>{weddingCollection.unit}</small></div>
    </div>
    <div className="collection-grid">
      <article className="collection-photo"><img src="/images/group-look.jpg" alt="Beberapa model mengenakan pilihan jas formal ALDI Suits" loading="lazy" /><span className="photo-caption">ALDI Suits · Sidoarjo</span></article>
      <div className="collection-details">
        <div className="detail-block"><p className="eyebrow">Tambahan pilihan</p><h3>Wedding add-ons</h3><p className="detail-note">Pilihan tambahan ini tidak termasuk dalam harga set jas pengantin.</p>
          <ul className="price-list">{weddingAddOns.map(item => <li key={item.name}><span>{item.name}{item.detail ? <small>{item.detail}</small> : null}</span><strong>{item.price}</strong></li>)}</ul>
        </div>
        <div className="detail-block event-prices"><p className="eyebrow">Acara lainnya</p><h3>Jas formal</h3>{eventSuits.map(item => <div className="compact-price" key={item.name}><span>{item.name}</span><strong>{item.price}</strong></div>)}</div>
      </div>
    </div>
  </section>
}
function PackageSection() {
  return <section className="section packages-section" id="packages" aria-labelledby="packages-title">
    <SectionHeading titleId="packages-title" eyebrow="02 / Paket pernikahan" title="Untuk pengantin dan keluarga." description="Pilih paket jas sesuai kebutuhan hari pernikahan Anda." />
    <div className="package-grid">{weddingPackages.map((item, index) => <article className={'package-card' + (index === 1 ? ' package-card-featured' : '')} key={item.name}>
      <div className="package-card-top"><span>{item.name}</span><span>0{index + 1}</span></div><ul>{item.items.map(part => <li key={part}><Check size={15} aria-hidden="true" />{part}</li>)}</ul>
      <div className="package-price">{item.price}</div><a className="package-link" href={createWhatsAppUrl('Halo ALDI Suits, saya ingin bertanya tentang ' + item.name + '.')} target="_blank" rel="noreferrer" aria-label={'Tanyakan ' + item.name + ' melalui WhatsApp'}>Tanya paket ini <ArrowUpRight size={15} /></a>
    </article>)}</div>
    <p className="package-note">Rincian paket mengikuti informasi yang diberikan dan perlu dikonfirmasi sebelum publikasi resmi.</p>
  </section>
}
function CustomAndProcessSection() {
  return <section className="section custom-section" id="custom" aria-labelledby="custom-title">
    <div className="custom-top"><div className="custom-photo"><img src="/images/custom-suit.jpg" alt="Model mengenakan jas dengan potongan formal" loading="lazy" /></div><div className="custom-copy">
      <SectionHeading titleId="custom-title" eyebrow="03 / Custom-made" title="Dibuat sesuai pilihan Anda." description="Opsi custom-made tersedia dengan pilihan hak milik atau sewa perdana." />
      <p className="custom-includes">Informasi set dapat mencakup jas, celana, rompi, kemeja, dan dasi — atau mengikuti desain custom.</p>
      <div className="custom-options">{customOptions.map((item, index) => <div className="custom-option" key={item.name}><span>0{index + 1}</span><strong>{item.name}</strong><b>{item.price}</b></div>)}</div>
      <p className="fine-print">Harga merupakan harga mulai. Detail, waktu pengerjaan, dan ketentuan custom perlu dikonfirmasi.</p>
    </div></div>
    <div className="process-wrap"><SectionHeading eyebrow="04 / Alur dan ketentuan" title="Dari konsultasi sampai pengambilan." description="Alur umum sewa jas. Konfirmasi detail dengan tim ALDI Suits sebelum reservasi." />
      <ol className="steps-grid">{rentalSteps.map((step, index) => <li key={step.name}><span className="step-number">0{index + 1}</span><h3>{step.name}</h3><p>{step.description}</p></li>)}</ol>
      <details className="terms-disclosure"><summary>Syarat sewa yang perlu dikonfirmasi <span aria-hidden="true">+</span></summary><ol className="terms-list">{rentalTerms.map((term, index) => <li key={term}><span>0{index + 1}</span><p>{term}</p></li>)}</ol><p className="verification-note">Draf ketentuan ini perlu diverifikasi oleh ALDI Suits sebelum dipublikasikan.</p></details>
    </div>
  </section>
}
function ContactSection() {
  return <section className="contact-section" id="contact" aria-labelledby="contact-title">
    <div className="contact-image"><img src="/images/event-suits.jpg" alt="Pilihan jas berwarna untuk acara formal" loading="lazy" /></div>
    <div className="contact-content"><p className="eyebrow">05 / Hubungi kami</p><h2 id="contact-title">Mulai dengan<br /><em>konsultasi.</em></h2>
      <p className="contact-description">Tanyakan pilihan jas dan detail ketersediaannya langsung kepada tim ALDI Suits.</p>
      <a className="button button-terracotta" href={createWhatsAppUrl()} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Konsultasi via WhatsApp <ArrowUpRight size={15} /></a>
      <div className="contact-details"><a href={'tel:+' + contact.phoneInternational}><Phone size={16} /><span>{contact.phoneDisplay}</span></a>
        <a href={contact.instagramUrl} target="_blank" rel="noreferrer"><Camera size={16} /><span>{contact.instagram}</span><ArrowUpRight size={14} /></a>
        <a href={contact.mapUrl} target="_blank" rel="noreferrer"><MapPin size={17} /><span>{contact.address}</span><ArrowUpRight size={14} /></a>
      </div>
    </div>
  </section>
}
function Footer() {
  return <footer className="site-footer"><a className="wordmark footer-wordmark" href="#home"><span>ALDI</span><small>SUITS</small></a><p>Jas pengantin & formal · Waru, Sidoarjo</p><a className="back-top" href="#home">Kembali ke atas <ArrowRight size={14} /></a><small className="copyright">© {new Date().getFullYear()} ALDI Suits</small></footer>
}
export default function App() {
  return <><a className="skip-link" href="#main-content">Lewati ke konten</a><Header /><main id="main-content"><Hero /><CollectionSection /><PackageSection /><CustomAndProcessSection /><ContactSection /></main><Footer /></>
}
