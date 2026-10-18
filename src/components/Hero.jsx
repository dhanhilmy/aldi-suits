import { ArrowDown, ArrowUpRight, MessageCircle } from 'lucide-react'
import { brand, createWhatsAppUrl } from '../data.js'
export default function Hero() {
  return <section className="hero" id="home" aria-labelledby="hero-title">
    <div className="hero-copy">
      <p className="eyebrow hero-eyebrow"><span />Wedding · Formal · Custom-made</p>
      <h1 id="hero-title">Tampil rapi<br />di momen <em>berarti.</em></h1>
      <p className="hero-description">Pilihan jas pengantin, acara formal, dan custom-made dari ALDI Suits di Waru, Sidoarjo.</p>
      <div className="hero-actions">
        <a className="button button-light" href={createWhatsAppUrl('Halo ALDI Suits, saya ingin konsultasi pilihan jas.')}><MessageCircle size={17} /> Konsultasi via WhatsApp <ArrowUpRight size={15} /></a>
        <a className="text-link light-link" href="#collection">Lihat koleksi <ArrowDown size={15} /></a>
      </div>
      <p className="hero-tagline">{brand.tagline}</p>
    </div>
    <div className="hero-image-wrap"><img src="/images/hero-wedding.jpg" alt="Model mengenakan jas pengantin formal" fetchPriority="high" /><span className="hero-image-caption">Pilihan jas ALDI Suits <span>Waru, Sidoarjo</span></span></div>
  </section>
}
