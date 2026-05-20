"use client";

import Navbar from "../components/Navbar";
import MarketingFooter from "../components/MarketingFooter";
import styles from "./page.module.css";

interface Plan {
  id: string;
  name: string;
  price: string;
  priceMuted: string;
  description: string;
  isPopular?: boolean;
  features: string[];
}

const PLANS: Plan[] = [
  {
    id: "silver",
    name: "Silver Package",
    price: "Rp 149.000",
    priceMuted: "Rp 199.000",
    description: "Sempurna untuk undangan pernikahan esensial digital yang sederhana dan berkelas.",
    features: [
      "Landing Cover Premium",
      "Ayat & Quotes Pembuka",
      "Profil Kedua Mempelai",
      "Detail Acara (Akad & Resepsi)",
      "Google Maps Terintegrasi",
      "Buku Tamu (Maks 100 Ucapan)",
      "Masa Aktif 3 Bulan",
    ],
  },
  {
    id: "gold",
    name: "Gold Package",
    price: "Rp 249.000",
    priceMuted: "Rp 349.000",
    description: "Keseimbangan sempurna antara fitur kaya dan visual romantis paling disukai.",
    isPopular: true,
    features: [
      "Semua Fitur Silver",
      "Real-time Countdown Timer",
      "Masonry Galeri Pre-wedding",
      "Lightbox Slider Foto",
      "Garis Waktu Perjalanan Cinta",
      "Autoplay Musik Latar",
      "Amplop Digital & Alamat Fisik",
      "Buku Tamu (Maks 500 Ucapan)",
      "Masa Aktif 6 Bulan",
    ],
  },
  {
    id: "platinum",
    name: "Platinum Package",
    price: "Rp 399.000",
    priceMuted: "Rp 549.000",
    description: "Pilihan eksklusif terbaik dengan domain kustom dan fungsionalitas tanpa batas.",
    features: [
      "Semua Fitur Gold",
      "Domain Kustom (.com/.id) 1 Tahun",
      "WhatsApp Invite Generator",
      "Integrasi RSVP Jumlah Tamu",
      "Buku Tamu Tanpa Batas",
      "Kustom Lagu Latar Sendiri",
      "Masa Aktif Selamanya",
      "Prioritas Layanan Bantuan 24/7",
    ],
  },
];

const COMPARISONS = [
  { feature: "Landing Cover", silver: true, gold: true, platinum: true },
  { feature: "Quotes & Ayat Suci", silver: true, gold: true, platinum: true },
  { feature: "Profil Mempelai", silver: true, gold: true, platinum: true },
  { feature: "Google Maps Embed", silver: true, gold: true, platinum: true },
  { feature: "Countdown Timer", silver: false, gold: true, platinum: true },
  { feature: "Galeri Foto Masonry", silver: false, gold: true, platinum: true },
  { feature: "Story/Love Timeline", silver: false, gold: true, platinum: true },
  { feature: "Autoplay Musik Latar", silver: false, gold: true, platinum: true },
  { feature: "Amplop Digital Seal Lilin", silver: false, gold: true, platinum: true },
  { feature: "RSVP Jumlah Tamu", silver: false, gold: true, platinum: true },
  { feature: "WhatsApp Invite Link", silver: false, gold: false, platinum: true },
  { feature: "Custom Domain (.com)", silver: false, gold: false, platinum: true },
  { feature: "Masa Aktif", silver: "3 Bulan", gold: "6 Bulan", platinum: "Selamanya" },
];

export default function PricingPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Hero Area */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.subtitle}>PRICING PLANS</span>
            <h1 className={styles.title}>Pilihan Paket Terbaik</h1>
            <div className="floral-divider">
              <span style={{ fontSize: "1.2rem", color: "var(--accent)" }}>✿</span>
            </div>
            <p className={styles.introText}>
              Investasi terbaik untuk membagikan kabar bahagia Anda dengan cara yang paling romantis, praktis, dan ramah lingkungan.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className={styles.pricingSection}>
          <div className={styles.container}>
            <div className={styles.cardsContainer}>
              {PLANS.map((plan) => (
                <div 
                  key={plan.id} 
                  className={`${styles.card} ${plan.isPopular ? styles.popularCard : ""}`}
                >
                  {plan.isPopular && <span className={styles.popularBadge}>Paling Populer</span>}
                  
                  <h3 className={styles.planName}>{plan.name}</h3>
                  <p className={styles.planDesc}>{plan.description}</p>
                  
                  <div className={styles.priceRow}>
                    <span className={styles.oldPrice}>{plan.priceMuted}</span>
                    <span className={styles.price}>{plan.price}</span>
                  </div>
                  
                  <hr className={styles.cardDivider} />
                  
                  <ul className={styles.featuresList}>
                    {plan.features.map((feat, idx) => (
                      <li key={idx}>
                        <span className={styles.checkIcon}>✓</span> {feat}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://api.whatsapp.com/send?phone=628123456789&text=Halo%20Undangly,%20saya%20ingin%20memesan%20${encodeURIComponent(plan.name)}.`}
                    className={`${styles.selectBtn} ${plan.isPopular ? styles.popularBtn : ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pesan Paket Ini
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table Section */}
        <section className={styles.comparisonSection}>
          <div className={styles.container}>
            <h2 className={styles.tableTitle}>Bandingkan Detail Fitur</h2>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Fitur Undangan</th>
                    <th>Silver</th>
                    <th>Gold</th>
                    <th>Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISONS.map((row, idx) => (
                    <tr key={idx}>
                      <td className={styles.featureName}>{row.feature}</td>
                      <td>
                        {typeof row.silver === "boolean" ? (
                          row.silver ? <span className={styles.yes}>✓</span> : <span className={styles.no}>✕</span>
                        ) : (
                          <span className={styles.textVal}>{row.silver}</span>
                        )}
                      </td>
                      <td>
                        {typeof row.gold === "boolean" ? (
                          row.gold ? <span className={styles.yes}>✓</span> : <span className={styles.no}>✕</span>
                        ) : (
                          <span className={styles.textVal}>{row.gold}</span>
                        )}
                      </td>
                      <td>
                        {typeof row.platinum === "boolean" ? (
                          row.platinum ? <span className={styles.yes}>✓</span> : <span className={styles.no}>✕</span>
                        ) : (
                          <span className={styles.textVal}>{row.platinum}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
