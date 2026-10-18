import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { createWhatsAppUrl } from '../data.js'
const links = [['Koleksi', '#collection'], ['Paket', '#packages'], ['Custom-made', '#custom'], ['Kontak', '#contact']]
export default function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label="ALDI Suits, ke beranda" onClick={() => setOpen(false)}><span>ALDI</span><small>SUITS</small></a>
    <button className="menu-toggle" type="button" aria-label={open ? 'Tutup navigasi' : 'Buka navigasi'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
    <nav id="primary-navigation" className={'main-nav' + (open ? ' is-open' : '')} aria-label="Navigasi utama">
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="header-cta" href={createWhatsAppUrl()} target="_blank" rel="noreferrer">Konsultasi WhatsApp <ArrowUpRight size={15} aria-hidden="true" /></a>
    </nav>
  </header>
}
