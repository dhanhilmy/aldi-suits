export const brand = { name: 'ALDI Suits', location: 'Waru, Sidoarjo', tagline: 'Look sharp. Keep it simple.' }
export const contact = {
  phoneDisplay: '0812 1779 0360', phoneInternational: '6281217790360',
  instagram: '@aldsuits', instagramUrl: 'https://www.instagram.com/aldsuits/',
  address: 'Jl. Slamet III No. 1, Pepelegi Indah, Waru, Sidoarjo',
  mapUrl: 'https://maps.google.com/?q=Jl.+Slamet+III+No.+1,+Pepelegi+Indah,+Waru,+Sidoarjo',
}
export const createWhatsAppUrl = (message = 'Halo ALDI Suits, saya ingin bertanya tentang pilihan jas dan ketersediaannya.') =>
  'https://wa.me/' + contact.phoneInternational + '?text=' + encodeURIComponent(message)
export const weddingCollection = { name: 'Koleksi Jas Pengantin', price: 'Rp800.000', unit: 'per set' }
export const weddingAddOns = [
  { name: 'Kemeja Polos', price: 'Rp100.000' },
  { name: 'Kemeja Plisket', price: 'Rp150.000' },
  { name: 'Dasi Panjang / Kupu-kupu', price: 'Rp100.000', detail: 'per 5 pieces' },
]
export const weddingPackages = [
  { name: 'Paket I', items: ['2 stel jas orang tua atau saudara'], price: 'Rp1.000.000' },
  { name: 'Paket II', items: ['1 stel jas pengantin', '2 stel jas orang tua', '2 stel jas saudara'], price: 'Rp2.800.000' },
  { name: 'Paket III', items: ['2 stel jas pengantin', '2 stel jas orang tua', '2 stel jas saudara'], price: 'Rp3.400.000' },
]
export const eventSuits = [
  { name: 'Jas, Celana, Dasi', price: 'Rp600.000' },
  { name: 'Jas & Dasi', price: 'Rp350.000' },
]
export const customOptions = [
  { name: 'Hak Milik', price: 'Mulai Rp4.500.000' },
  { name: 'Sewa Perdana', price: 'Mulai Rp3.500.000' },
]
export const rentalSteps = [
  { name: 'Konsultasi', description: 'Diskusikan kebutuhan acara, pilihan set, dan tanggal pemakaian.' },
  { name: 'Fitting', description: 'Konfirmasikan ukuran dan kecocokan jas dengan tim.' },
  { name: 'Reservasi', description: 'Pastikan pilihan, harga, jadwal, dan ketentuan sewa.' },
  { name: 'Pengambilan', description: 'Ambil jas sesuai jadwal yang disepakati.' },
]
export const rentalTerms = [
  'Penyewa menyerahkan KTP atau uang deposit.',
  'Maksimal durasi sewa: 4 hari.',
  'Kerusakan atau kehilangan menjadi tanggung jawab penyewa.',
  'Keterlambatan pengembalian dikenakan Rp100.000 per hari.',
  'DP tidak dapat dikembalikan, tetapi dapat dialihkan ke tanggal lain dalam maksimal 1 tahun dari tanggal awal.',
]
