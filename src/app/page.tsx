"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import MarketingFooter from "./components/MarketingFooter";
import styles from "./page.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Apakah undangan bisa dibuka di HP tamu?",
    answer: "Ya! Semua template kami responsive dan dioptimalkan untuk mobile. Tamu tinggal klik link, langsung terbuka indah di HP mereka tanpa perlu download apapun."
  },
  {
    question: "Berapa lama undangan aktif setelah dibuat?",
    answer: "Untuk paket Gratis, undangan aktif selama 3 bulan. Sedangkan untuk paket Pro, undangan Anda akan tetap aktif selamanya tanpa biaya perpanjangan."
  },
  {
    question: "Bisa ganti nama tamu di link undangan?",
    answer: "Tentu saja! Anda bisa membuat nama tamu tanpa batas secara otomatis langsung dari dashboard kami, sehingga setiap tamu menerima link personal (contoh: undangly.com/kila-arnold?to=Nama+Tamu)."
  },
  {
    question: "Apakah bisa upload foto sendiri?",
    answer: "Ya, Anda bisa dengan mudah mengunggah foto-foto pre-wedding terbaik Anda ke dalam galeri undangan, termasuk mengatur slide foto dan musik latar pilihan Anda."
  },
  {
    question: "Bagaimana cara lihat data RSVP tamu?",
    answer: "Setiap ada tamu yang mengisi konfirmasi kehadiran, datanya akan langsung masuk ke dashboard Anda secara real-time. Anda juga bisa mengekspor daftar kehadiran tersebut ke format Excel."
  }
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroGrid}>
              <div className={styles.heroLeft}>
                <span className={styles.badge}>✨ Undangan Digital #1 di Indonesia</span>
                <h1 className={styles.title}>
                  Undangan yang berkesan
                  <span className={styles.titleHighlight}>untuk hari istimewa</span>
                </h1>
                <p className={styles.description}>
                  Buat undangan pernikahan digital yang elegan, interaktif, dan mudah dibagikan — tanpa perlu keahlian desain apapun.
                </p>
                <div className={styles.heroActions}>
                  <Link href="/templates" className={styles.btnPrimary}>
                    Mulai Gratis Sekarang
                  </Link>
                  <Link href="/preview" className={styles.btnSecondary}>
                    Lihat Demo →
                  </Link>
                </div>
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>12k+</span>
                    <span className={styles.statLabel}>Pasangan bahagia</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>98%</span>
                    <span className={styles.statLabel}>Tamu terkesan</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>50+</span>
                    <span className={styles.statLabel}>Template premium</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statNum}>4.9★</span>
                    <span className={styles.statLabel}>Rating pengguna</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroRight}>
                <div className={styles.heroPreview}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600" 
                    alt="Undangly Preview" 
                    className={styles.heroImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className={styles.steps}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Cara kerja</span>
              <h2 className={styles.sectionTitle}>Siap dalam 3 langkah</h2>
              <p className={styles.sectionDesc}>Dari daftar sampai undangan jadi, cuma butuh beberapa menit.</p>
            </div>

            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>01</span>
                <div className={styles.stepIcon}>🎨</div>
                <h3 className={styles.stepTitle}>Pilih template</h3>
                <p className={styles.stepDesc}>Pilih dari 50+ template premium yang sudah dikurasi. Tersedia tema modern, islami, adat, dan garden.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>02</span>
                <div className={styles.stepIcon}>✏️</div>
                <h3 className={styles.stepTitle}>Isi data & kustomisasi</h3>
                <p className={styles.stepDesc}>Masukkan nama, tanggal, foto, dan semua detail. Edit warna, font, dan konten sesuai keinginan.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>03</span>
                <div className={styles.stepIcon}>💌</div>
                <h3 className={styles.stepTitle}>Bagikan ke tamu</h3>
                <p className={styles.stepDesc}>Dapatkan link unik dan bagikan via WhatsApp, Instagram, atau email. Pantau RSVP real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Fitur unggulan</span>
              <h2 className={styles.sectionTitle}>Semua yang kamu butuhkan</h2>
              <p className={styles.sectionDesc}>Fitur lengkap untuk menyempurnakan hari bahagia pernikahan Anda.</p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎭</div>
                <h3 className={styles.featureTitle}>50+ Template Premium</h3>
                <p className={styles.featureDesc}>Desain eksklusif dari desainer lokal terbaik. Tersedia tema modern, islami, Jawa, garden, dan lainnya.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>✉️</div>
                <h3 className={styles.featureTitle}>RSVP Real-time</h3>
                <p className={styles.featureDesc}>Form konfirmasi kehadiran otomatis. Data tamu langsung masuk ke dashboard. Export ke Excel kapan saja.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🗺️</div>
                <h3 className={styles.featureTitle}>Integrasi Google Maps</h3>
                <p className={styles.featureDesc}>Peta interaktif langsung di undangan. Tamu tinggal klik untuk navigasi langsung ke lokasi acara.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🎵</div>
                <h3 className={styles.featureTitle}>Musik & Galeri Foto</h3>
                <p className={styles.featureDesc}>Upload lagu favorit sebagai BGM. Tampilkan galeri foto pre-wed dengan lightbox yang elegan.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💬</div>
                <h3 className={styles.featureTitle}>Buku Tamu Digital</h3>
                <p className={styles.featureDesc}>Tamu bisa kirim ucapan dan doa langsung di halaman undangan. Tampil cantik seperti guestbook fisik.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>💳</div>
                <h3 className={styles.featureTitle}>Amplop Digital</h3>
                <p className={styles.featureDesc}>Tampilkan nomor rekening & QRIS dengan animasi amplop yang menarik. Copy-paste sekali klik.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Templates Showcase Section */}
        <section className={styles.templates}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Template pilihan</span>
              <h2 className={styles.sectionTitle}>Desain yang tak terlupakan</h2>
              <p className={styles.sectionDesc}>Setiap template dibuat dengan detail dan penuh cinta oleh desainer Indonesia.</p>
            </div>

            <div className={styles.templatesGrid}>
              {/* Template 1 */}
              <div className={styles.templateCard}>
                <div className={styles.templateImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=400" 
                    alt="Rina & Dimas Template" 
                    className={styles.templateImage}
                  />
                  <span className={styles.templateTag}>Populer</span>
                  <div className={styles.templateOverlay}>
                    <Link href="/preview" className={styles.btnPrimary}>Lihat Demo</Link>
                  </div>
                </div>
                <div className={styles.templateCardContent}>
                  <span className={styles.templateStyle}>Elegan • Mewah</span>
                  <h3 className={styles.templateTitle}>THE WEDDING OF</h3>
                  <div className={styles.templateMeta}>
                    <span className={styles.templateDate}>Rina & Dimas</span>
                    <span className={styles.templateColor}>Dusty Plum</span>
                  </div>
                </div>
              </div>

              {/* Template 2 */}
              <div className={styles.templateCard}>
                <div className={styles.templateImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400" 
                    alt="Siti & Hafidz Template" 
                    className={styles.templateImage}
                  />
                  <div className={styles.templateOverlay}>
                    <Link href="/preview" className={styles.btnPrimary}>Lihat Demo</Link>
                  </div>
                </div>
                <div className={styles.templateCardContent}>
                  <span className={styles.templateStyle}>Natural • Botanical</span>
                  <h3 className={styles.templateTitle}>UNDANGAN PERNIKAHAN</h3>
                  <div className={styles.templateMeta}>
                    <span className={styles.templateDate}>Siti & Hafidz</span>
                    <span className={styles.templateColor}>Sage & Gold</span>
                  </div>
                </div>
              </div>

              {/* Template 3 */}
              <div className={styles.templateCard}>
                <div className={styles.templateImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400" 
                    alt="Maya & Reza Template" 
                    className={styles.templateImage}
                  />
                  <div className={styles.templateOverlay}>
                    <Link href="/preview" className={styles.btnPrimary}>Lihat Demo</Link>
                  </div>
                </div>
                <div className={styles.templateCardContent}>
                  <span className={styles.templateStyle}>Romantis • Feminin</span>
                  <h3 className={styles.templateTitle}>WITH LOVE</h3>
                  <div className={styles.templateMeta}>
                    <span className={styles.templateDate}>Maya & Reza</span>
                    <span className={styles.templateColor}>Dusty Rose</span>
                  </div>
                </div>
              </div>

              {/* Template 4 */}
              <div className={styles.templateCard}>
                <div className={styles.templateImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=400" 
                    alt="Nadia & Farhan Template" 
                    className={styles.templateImage}
                  />
                  <span className={styles.templateTag}>Baru</span>
                  <div className={styles.templateOverlay}>
                    <Link href="/preview" className={styles.btnPrimary}>Lihat Demo</Link>
                  </div>
                </div>
                <div className={styles.templateCardContent}>
                  <span className={styles.templateStyle}>Royal • Modern</span>
                  <h3 className={styles.templateTitle}>WEDDING INVITATION</h3>
                  <div className={styles.templateMeta}>
                    <span className={styles.templateDate}>Nadia & Farhan</span>
                    <span className={styles.templateColor}>Midnight Gold</span>
                  </div>
                </div>
              </div>

              {/* Template 5 */}
              <div className={styles.templateCard}>
                <div className={styles.templateImageWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=400" 
                    alt="Zahra & Ilham Template" 
                    className={styles.templateImage}
                  />
                  <div className={styles.templateOverlay}>
                    <Link href="/preview" className={styles.btnPrimary}>Lihat Demo</Link>
                  </div>
                </div>
                <div className={styles.templateCardContent}>
                  <span className={styles.templateStyle}>Islami • Sakral</span>
                  <h3 className={styles.templateTitle}>BISMILLAH</h3>
                  <div className={styles.templateMeta}>
                    <span className={styles.templateDate}>Zahra & Ilham</span>
                    <span className={styles.templateColor}>Emerald Islami</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.templatesAction}>
              <Link href="/templates" className={styles.btnSecondary}>
                Lihat Semua Template
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className={styles.pricing}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Harga</span>
              <h2 className={styles.sectionTitle}>Transparan, tanpa biaya tersembunyi</h2>
              <p className={styles.sectionDesc}>Pilih paket yang paling sesuai dengan kebutuhan perayaan Anda.</p>
            </div>

            <div className={styles.pricingGrid}>
              {/* Gratis */}
              <div className={styles.pricingCard}>
                <h3 className={styles.pricingName}>Gratis</h3>
                <div className={styles.pricingPrice}>Rp0</div>
                <span className={styles.pricingPeriod}>Selamanya gratis</span>
                <ul className={styles.pricingFeatures}>
                  <li className={styles.pricingFeature}>✓ 3 template dasar</li>
                  <li className={styles.pricingFeature}>✓ RSVP hingga 50 tamu</li>
                  <li className={styles.pricingFeature}>✓ Buku tamu digital</li>
                  <li className={styles.pricingFeature}>✓ Link undangan aktif 3 bulan</li>
                  <li className={`${styles.pricingFeature} ${styles.pricingFeatureDisabled}`}>— Musik & galeri foto</li>
                  <li className={`${styles.pricingFeature} ${styles.pricingFeatureDisabled}`}>— Amplop digital</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=628123456789" className={`${styles.pricingBtn} ${styles.pricingBtnSecondary}`} target="_blank" rel="noopener noreferrer">
                  Mulai Gratis
                </a>
              </div>

              {/* Pro */}
              <div className={`${styles.pricingCard} ${styles.pricingCardPopular}`}>
                <span className={styles.popularBadge}>⭐ Paling Populer</span>
                <h3 className={styles.pricingName}>Pro</h3>
                <div className={styles.pricingPrice}>Rp149k</div>
                <span className={styles.pricingPeriod}>Sekali bayar, seumur hidup</span>
                <ul className={styles.pricingFeatures}>
                  <li className={styles.pricingFeature}>✓ Semua 50+ template premium</li>
                  <li className={styles.pricingFeature}>✓ RSVP tanpa batas tamu</li>
                  <li className={styles.pricingFeature}>✓ Musik & galeri foto HD</li>
                  <li className={styles.pricingFeature}>✓ Amplop digital + QRIS</li>
                  <li className={styles.pricingFeature}>✓ Countdown timer live</li>
                  <li className={styles.pricingFeature}>✓ Link aktif selamanya</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=628123456789" className={`${styles.pricingBtn} ${styles.pricingBtnPrimary}`} target="_blank" rel="noopener noreferrer">
                  Pilih Pro
                </a>
              </div>

              {/* Bisnis */}
              <div className={styles.pricingCard}>
                <h3 className={styles.pricingName}>Bisnis</h3>
                <div className={styles.pricingPrice}>Rp49k</div>
                <span className={styles.pricingPeriod}>Per undangan / bulan</span>
                <ul className={styles.pricingFeatures}>
                  <li className={styles.pricingFeature}>✓ Semua fitur Pro</li>
                  <li className={styles.pricingFeature}>✓ Custom domain sendiri</li>
                  <li className={styles.pricingFeature}>✓ White-label (tanpa branding)</li>
                  <li className={styles.pricingFeature}>✓ Dashboard multi-klien</li>
                  <li className={styles.pricingFeature}>✓ Prioritas support</li>
                  <li className={styles.pricingFeature}>✓ Invoice & laporan</li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=628123456789" className={`${styles.pricingBtn} ${styles.pricingBtnSecondary}`} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Testimoni</span>
              <h2 className={styles.sectionTitle}>Kata mereka yang sudah bahagia</h2>
              <p className={styles.sectionDesc}>Cerita dari pasangan pengantin yang telah menggunakan layanan kami.</p>
            </div>

            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div>
                  <div className={styles.stars}>★★★★★</div>
                  <p className={styles.quote}>
                    &ldquo;Tamunya pada bilang undangannya paling keren yang pernah mereka dapat. Countdown timer-nya bikin deg-degan terus!&rdquo;
                  </p>
                </div>
                <div className={styles.clientInfo}>
                  <div className={styles.clientAvatar}>RS</div>
                  <div>
                    <h4 className={styles.clientName}>Rina & Sandi</h4>
                    <span className={styles.clientMeta}>Jakarta • Menikah 2024</span>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div>
                  <div className={styles.stars}>★★★★★</div>
                  <p className={styles.quote}>
                    &ldquo;Gampang banget dipakai, desainnya bagus-bagus. RSVP langsung kelihatan siapa aja yang hadir. Recommended banget!&rdquo;
                  </p>
                </div>
                <div className={styles.clientInfo}>
                  <div className={styles.clientAvatar}>MH</div>
                  <div>
                    <h4 className={styles.clientName}>Maya & Hafidz</h4>
                    <span className={styles.clientMeta}>Surabaya • Menikah 2024</span>
                  </div>
                </div>
              </div>

              <div className={styles.testimonialCard}>
                <div>
                  <div className={styles.stars}>★★★★★</div>
                  <p className={styles.quote}>
                    &ldquo;Pakai paket Pro, worth it banget. Amplop digitalnya praktis, ga perlu repot-repot cetak amplop fisik lagi.&rdquo;
                  </p>
                </div>
                <div className={styles.clientInfo}>
                  <div className={styles.clientAvatar}>NF</div>
                  <div>
                    <h4 className={styles.clientName}>Nadia & Farhan</h4>
                    <span className={styles.clientMeta}>Bandung • Menikah 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faq}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>FAQ</span>
              <h2 className={styles.sectionTitle}>Pertanyaan yang sering ditanya</h2>
              <p className={styles.sectionDesc}>Semua yang perlu Anda ketahui tentang pembuatan undangan kami.</p>
            </div>

            <div className={styles.faqContainer}>
              {FAQS.map((faq, index) => (
                <div key={index} className={styles.faqItem}>
                  <button 
                    onClick={() => toggleFaq(index)} 
                    className={styles.faqQuestion}
                  >
                    <span>{faq.question}</span>
                    <span className={`${styles.faqIcon} ${activeFaq === index ? styles.faqIconActive : ""}`}>+</span>
                  </button>
                  <div 
                    className={`${styles.faqAnswer} ${activeFaq === index ? styles.faqAnswerActive : ""}`}
                  >
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Mulai buat undangan impianmu sekarang</h2>
              <p className={styles.ctaDesc}>
                Gratis untuk selamanya. Upgrade kapan saja. Tidak perlu kartu kredit.
              </p>
              <div className={styles.ctaActions}>
                <a href="https://api.whatsapp.com/send?phone=628123456789" className={styles.btnWhite} target="_blank" rel="noopener noreferrer">
                  Buat Undangan Gratis
                </a>
                <Link href="/templates" className={styles.btnOutlineWhite}>
                  Lihat Semua Template
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
