"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import MarketingFooter from "../components/MarketingFooter";
import styles from "./page.module.css";

interface Template {
  id: string;
  name: string;
  category: "Romantis" | "Minimalis" | "Tradisional";
  tag?: string;
  imageUrl: string;
  demoUrl: string;
  description: string;
  features: string[];
}

const TEMPLATES: Template[] = [
  {
    id: "dusty-rose",
    name: "Dusty Rose (Featured)",
    category: "Romantis",
    tag: "Terpopuler",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    demoUrl: "/preview",
    description: "Desain romantis nan anggun dengan perpaduan warna merah muda berdebu, sentuhan emas, ornamen bunga, dan transisi reveal tirai pembuka yang dramatis.",
    features: ["Autoplay Musik", "13 Seksi Lengkap", "Akordeon Amplop", "Galeri Masonry Lightbox"],
  },
  {
    id: "forest-emerald",
    name: "Forest Emerald",
    category: "Romantis",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    demoUrl: "/preview?to=Tamu+VIP",
    description: "Keanggunan alam terpancar dari tema hijau zamrud gelap dikombinasikan dengan kilau emas mewah. Cocok untuk pernikahan bertema outdoor & forest.",
    features: ["Background Animasi", "Google Maps Embed", "Formulir Kehadiran", "Countdown Timer"],
  },
  {
    id: "midnight-minimalist",
    name: "Midnight Minimalist",
    category: "Minimalis",
    tag: "Terbaru",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800",
    demoUrl: "/preview?to=Kerabat+Dekat",
    description: "Gaya modern dengan pendekatan bersih, monokromatik, dan tata letak sans-serif kontemporer. Sangat elegan untuk pasangan berjiwa minimalis.",
    features: ["Desain Bersih", "Responsif Mobile-First", "Integrasi Kalender", "Buku Tamu Cepat"],
  },
  {
    id: "royal-gold",
    name: "Royal Gold",
    category: "Romantis",
    imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
    demoUrl: "/preview",
    description: "Kemewahan istana dengan dominasi warna emas kerajaan dan biru tua bangsawan. Memberikan nuansa formal, megah, dan sangat anggun.",
    features: ["Ornamen Emas Mewah", "Background Parallax", "Amplop Digital", "Ucapan Real-time"],
  },
  {
    id: "sweet-sakura",
    name: "Sweet Sakura",
    category: "Romantis",
    imageUrl: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800",
    demoUrl: "/preview",
    description: "Kecantikan bunga sakura musim semi yang mekar dengan gaya ilustrasi cat air bertekstur. Menghadirkan suasana sangat feminin dan puitis.",
    features: ["Ilustrasi Cat Air", "Musik Latar Soft", "Akordion Tanya Jawab", "Lightbox Galeri"],
  },
  {
    id: "jawa-klasik",
    name: "Jawa Klasik",
    category: "Tradisional",
    imageUrl: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800",
    demoUrl: "/preview",
    description: "Keindahan warisan budaya Jawa dengan ornamen batik klasik, warna cokelat sogan hangat, dan ilustrasi joglo yang sakral dan khidmat.",
    features: ["Ornamen Tradisional", "Gaya Sogan Klasik", "Integrasi Alamat Fisik", "RSVP Khusus"],
  },
];

export default function TemplatesPage() {
  const [filter, setFilter] = useState<string>("Semua");

  const filteredTemplates = TEMPLATES.filter((tpl) => {
    if (filter === "Semua") return true;
    return tpl.category === filter;
  });

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Editorial Hero Section */}
        <section className={styles.heroEditorial}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <span className={styles.subtitle}>ELEGANT DESIGNS</span>
              <h1 className={styles.title}>
                Katalog <span className={styles.italic}>Template</span> Premium
              </h1>
              <p className={styles.introText}>
                Eksplorasi koleksi desain eksklusif kami. Perpaduan harmonis antara keanggunan estetika dan struktur modern untuk menyampaikan kisah cinta Anda.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className={styles.filterSection}>
          <div className={styles.container}>
            <div className={styles.filterContainer}>
              {["Semua", "Romantis", "Minimalis", "Tradisional"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`${styles.filterBtn} ${filter === cat ? styles.filterActive : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Editorial Masonry Grid */}
            <div className={styles.masonryGrid}>
              {filteredTemplates.map((tpl, index) => (
                <div key={tpl.id} className={`${styles.card} ${index % 2 === 0 ? styles.cardTall : styles.cardShort}`}>
                  <div className={styles.imageWrapper}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={tpl.imageUrl} alt={tpl.name} className={styles.image} />
                    {tpl.tag && <span className={styles.tag}>{tpl.tag}</span>}
                    <div className={styles.imageOverlay}>
                      <a href={tpl.demoUrl} className={styles.previewBtn} target="_blank" rel="noopener noreferrer">
                        Lihat Live Demo ↗
                      </a>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardHeader}>
                      <span className={styles.tplCategory}>{tpl.category}</span>
                      <h3 className={styles.tplName}>{tpl.name}</h3>
                    </div>
                    <p className={styles.tplDesc}>{tpl.description}</p>
                    
                    <div className={styles.features}>
                      {tpl.features.slice(0, 3).map((feat, idx) => (
                        <span key={idx} className={styles.featureBadge}>
                          {feat}
                        </span>
                      ))}
                    </div>

                    <div className={styles.actions}>
                      <a href="/login" className={styles.btnPrimary}>
                        Pilih Desain
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
