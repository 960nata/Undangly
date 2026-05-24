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
        <section className={styles.heroEditorial}>
          <div className={styles.container}>
            <div className={styles.heroEditorialGrid}>
              <div className={styles.heroEditorialContent}>
                <div className={styles.editorialBadge}>
                  <i className="fa-solid fa-sparkles"></i> Lebih dari sekadar undangan
                </div>
                <h1 className={styles.editorialTitle}>
                  Bagikan <span className={styles.editorialItalic}>Cinta</span> Anda <br />
                  Tanpa <span className={styles.editorialHighlight}>Batas</span>
                </h1>
                <p className={styles.editorialDescription}>
                  Platform pembuatan undangan digital paling elegan. Desain eksklusif, fitur RSVP interaktif, dan galeri memukau dalam satu sentuhan.
                </p>
                <div className={styles.editorialActions}>
                  <Link href="/templates" className={styles.btnPrimary}>
                    Buat Undangan <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
                  </Link>
                  <Link href="/preview" className={styles.btnSecondary}>
                    Eksplor Tema
                  </Link>
                </div>
                <div className={styles.userAvatars}>
                  <div className={styles.avatarsGroup}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100" alt="User 1" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100" alt="User 2" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100" alt="User 3" />
                    <div className={styles.avatarMore}>12k+</div>
                  </div>
                  <span className={styles.avatarsText}>Pasangan telah bergabung</span>
                </div>
              </div>
              
              <div className={styles.heroEditorialVisual}>
                <div className={styles.archFrame}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800" alt="Wedding Couple" className={styles.archImage} />
                </div>
                
                <div className={styles.polaroidFrame}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=400" alt="Detail" />
                  <div className={styles.polaroidText}>Rina & Dimas</div>
                </div>

                <div className={styles.floatingPremium}>
                  Premium<br/>Templates
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section id="cara-kerja" className={styles.steps}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Cara kerja</span>
              <h2 className={styles.sectionTitle}>Siap dalam 3 langkah mudah</h2>
              <div className="floral-divider">
                <i className="fa-solid fa-leaf"></i>
              </div>
              <p className={styles.sectionDesc}>Dari daftar sampai undangan jadi, cuma butuh beberapa menit saja.</p>
            </div>

            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>01</span>
                <div className={styles.stepIcon}>🎨</div>
                <h3 className={styles.stepTitle}>Pilih Template</h3>
                <p className={styles.stepDesc}>Pilih dari 50+ template premium yang sudah dikurasi. Tersedia tema modern, islami, adat, dan garden.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>02</span>
                <div className={styles.stepIcon}>✏️</div>
                <h3 className={styles.stepTitle}>Isi Data & Kustomisasi</h3>
                <p className={styles.stepDesc}>Masukkan nama, tanggal, foto, dan semua detail. Edit warna, font, dan konten sesuai keinginan.</p>
              </div>
              <div className={styles.stepCard}>
                <span className={styles.stepNumber}>03</span>
                <div className={styles.stepIcon}>💌</div>
                <h3 className={styles.stepTitle}>Bagikan ke Tamu</h3>
                <p className={styles.stepDesc}>Dapatkan link unik dan bagikan via WhatsApp, Instagram, atau email. Pantau RSVP real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="fitur" className={styles.features}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Fitur unggulan</span>
              <h2 className={styles.sectionTitle}>Semua yang Kamu Butuhkan</h2>
              <div className="floral-divider">
                <i className="fa-solid fa-heart"></i>
              </div>
              <p className={styles.sectionDesc}>Fitur lengkap untuk menyempurnakan hari bahagia pernikahan Anda.</p>
            </div>

            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-palette"></i>
                </div>
                <h3 className={styles.featureTitle}>50+ Template Premium</h3>
                <p className={styles.featureDesc}>Desain eksklusif dari desainer lokal terbaik. Tersedia tema modern, islami, Jawa, garden, dan lainnya.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-envelope-open-text"></i>
                </div>
                <h3 className={styles.featureTitle}>RSVP Real-time</h3>
                <p className={styles.featureDesc}>Form konfirmasi kehadiran otomatis. Data tamu langsung masuk ke dashboard. Export ke Excel kapan saja.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <h3 className={styles.featureTitle}>Integrasi Google Maps</h3>
                <p className={styles.featureDesc}>Peta interaktif langsung di undangan. Tamu tinggal klik untuk navigasi langsung ke lokasi acara.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-music"></i>
                </div>
                <h3 className={styles.featureTitle}>Musik & Galeri Foto</h3>
                <p className={styles.featureDesc}>Upload lagu favorit sebagai BGM. Tampilkan galeri foto pre-wed dengan lightbox yang elegan.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-comments"></i>
                </div>
                <h3 className={styles.featureTitle}>Buku Tamu Digital</h3>
                <p className={styles.featureDesc}>Tamu bisa kirim ucapan dan doa langsung di halaman undangan. Tampil cantik seperti guestbook fisik.</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <i className="fa-solid fa-wallet"></i>
                </div>
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
              <span className={styles.sectionSubtitle}>Template Pilihan</span>
              <h2 className={styles.sectionTitle}>Desain yang Tak Terlupakan</h2>
              <div className="floral-divider">
                <i className="fa-solid fa-gift"></i>
              </div>
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
                    <Link href="/preview" className={styles.btnPrimary}>
                      Lihat Demo <i className="fa-solid fa-eye" style={{ marginLeft: "8px" }}></i>
                    </Link>
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
                    <Link href="/preview" className={styles.btnPrimary}>
                      Lihat Demo <i className="fa-solid fa-eye" style={{ marginLeft: "8px" }}></i>
                    </Link>
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
                    <Link href="/preview" className={styles.btnPrimary}>
                      Lihat Demo <i className="fa-solid fa-eye" style={{ marginLeft: "8px" }}></i>
                    </Link>
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
                    <Link href="/preview" className={styles.btnPrimary}>
                      Lihat Demo <i className="fa-solid fa-eye" style={{ marginLeft: "8px" }}></i>
                    </Link>
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
                    <Link href="/preview" className={styles.btnPrimary}>
                      Lihat Demo <i className="fa-solid fa-eye" style={{ marginLeft: "8px" }}></i>
                    </Link>
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
                Lihat Semua Template <i className="fa-solid fa-circle-arrow-right" style={{ marginLeft: "8px", color: "var(--accent)" }}></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className={styles.pricing}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Harga</span>
              <h2 className={styles.sectionTitle}>Transparan, Tanpa Biaya Tersembunyi</h2>
              <div className="floral-divider">
                <i className="fa-solid fa-tag"></i>
              </div>
              <p className={styles.sectionDesc}>Pilih paket yang paling sesuai dengan kebutuhan perayaan Anda.</p>
            </div>

            <div className={styles.pricingGrid}>
              {/* Gratis */}
              <div className={styles.pricingCard}>
                <h3 className={styles.pricingName}>Gratis</h3>
                <div className={styles.pricingPrice}>Rp0</div>
                <span className={styles.pricingPeriod}>Selamanya gratis</span>
                <ul className={styles.pricingFeatures}>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> 3 template dasar
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> RSVP hingga 50 tamu
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> Buku tamu digital
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> Link undangan aktif 3 bulan
                  </li>
                  <li className={`${styles.pricingFeature} ${styles.pricingFeatureDisabled}`}>
                    <i className="fa-solid fa-circle-xmark"></i> Musik & galeri foto
                  </li>
                  <li className={`${styles.pricingFeature} ${styles.pricingFeatureDisabled}`}>
                    <i className="fa-solid fa-circle-xmark"></i> Amplop digital
                  </li>
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
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check" style={{ color: "var(--gold)" }}></i> Semua 50+ template premium
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check" style={{ color: "var(--gold)" }}></i> RSVP tanpa batas tamu
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check" style={{ color: "var(--gold)" }}></i> Musik & galeri foto HD
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check" style={{ color: "var(--gold)" }}></i> Amplop digital + QRIS
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check" style={{ color: "var(--gold)" }}></i> Countdown timer live
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check" style={{ color: "var(--gold)" }}></i> Link aktif selamanya
                  </li>
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
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> Semua fitur Pro
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> Custom domain sendiri
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> White-label (tanpa branding)
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> Dashboard multi-klien
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> Prioritas support
                  </li>
                  <li className={styles.pricingFeature}>
                    <i className="fa-solid fa-circle-check"></i> Invoice & laporan
                  </li>
                </ul>
                <a href="https://api.whatsapp.com/send?phone=628123456789" className={`${styles.pricingBtn} ${styles.pricingBtnSecondary}`} target="_blank" rel="noopener noreferrer">
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimoni" className={styles.testimonials}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionSubtitle}>Testimoni</span>
              <h2 className={styles.sectionTitle}>Kata Mereka yang Sudah Bahagia</h2>
              <div className="floral-divider">
                <i className="fa-solid fa-comments"></i>
              </div>
              <p className={styles.sectionDesc}>Cerita dari pasangan pengantin yang telah menggunakan layanan kami.</p>
            </div>

            <div className={styles.testimonialsGrid}>
              <div className={styles.testimonialCard}>
                <div>
                  <div className={styles.stars}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
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
                  <div className={styles.stars}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
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
                  <div className={styles.stars}>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
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
              <h2 className={styles.sectionTitle}>Pertanyaan yang Sering Ditanya</h2>
              <div className="floral-divider">
                <i className="fa-solid fa-circle-question"></i>
              </div>
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
                    <span className={`${styles.faqIcon} ${activeFaq === index ? styles.faqIconActive : ""}`}>
                      <i className="fa-solid fa-plus"></i>
                    </span>
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
                  Buat Undangan Gratis <i className="fa-solid fa-wand-magic-sparkles" style={{ marginLeft: "8px" }}></i>
                </a>
                <Link href="/templates" className={styles.btnOutlineWhite}>
                  Lihat Semua Template <i className="fa-solid fa-chevron-right" style={{ marginLeft: "8px" }}></i>
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
