"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import MarketingFooter from "../components/MarketingFooter";
import styles from "./page.module.css";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Berapa lama proses pembuatan undangan digital?",
    answer: "Undangan digital Anda bisa langsung aktif hanya dalam waktu 5 hingga 10 menit setelah Anda melakukan registrasi, memilih tema, dan mengisikan rincian data pernikahan di dashboard pengelolaan kami.",
  },
  {
    question: "Apakah saya bisa mengubah/merevisi data setelah undangan aktif?",
    answer: "Tentu saja! Kami memberikan fasilitas revisi tanpa batas (unlimited revisions) untuk data pernikahan Anda—seperti waktu akad/resepsi, lokasi maps, nama orang tua, hingga galeri foto—kapan saja sebelum hari H berlangsung.",
  },
  {
    question: "Bagaimana cara tamu memberikan amplop digital atau hadiah fisik?",
    answer: "Di dalam undangan terdapat bagian khusus 'Tanda Kasih' yang interaktif berbentuk amplop bersegel lilin emas. Tamu cukup mengeklik segel tersebut, lalu amplop akan terbuka menampilkan nomor rekening BCA/Mandiri atau alamat pengiriman kado fisik. Mereka juga dapat menyalin nomor rekening tersebut secara instan dengan sekali klik.",
  },
  {
    question: "Apakah musik latar (background music) bisa diganti sesuai keinginan?",
    answer: "Bisa. Untuk Paket Gold dan Platinum, Anda dapat bebas memilih dari ratusan koleksi lagu romantis instrumental berlisensi yang telah kami sediakan. Khusus untuk Paket Platinum, Anda bahkan dapat mengunggah file musik atau lagu favorit pilihan Anda sendiri.",
  },
  {
    question: "Bagaimana sistem pengiriman link khusus nama tamu undangan?",
    answer: "Kami telah mengintegrasikan Generator Undangan WhatsApp otomatis. Anda cukup memasukkan nama tamu (misal: 'Budi Santoso & Pasangan') di kolom generator, klik 'Bagikan ke WhatsApp', dan sistem akan otomatis menyalin pesan undangan rapi yang memuat pranala personalisasi tamu tersebut (misal: `undangly.com?to=Budi+Santoso`).",
  },
  {
    question: "Apakah data kehadiran RSVP tamu aman dan bisa dipantau?",
    answer: "Sangat aman. Setiap kali tamu melakukan konfirmasi kehadiran di form RSVP undangan Anda, data tersebut akan terekam secara real-time ke dalam database aman kami. Anda dapat melihat, memantau jumlah total tamu yang akan hadir, serta membaca pesan ucapan doa restu mereka kapan saja.",
  },
];

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Default open the first one

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className={styles.pageWrapper}>
      <Navbar />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.subtitle}>HAVE QUESTIONS?</span>
            <h1 className={styles.title}>Pertanyaan Umum (FAQ)</h1>
            <div className="floral-divider">
              <span style={{ fontSize: "1.2rem", color: "var(--accent)" }}>✿</span>
            </div>
            <p className={styles.introText}>
              Temukan jawaban untuk berbagai pertanyaan yang paling sering diajukan mengenai fitur, cara pembuatan, dan pengelolaan undangan digital di Undangly.
            </p>
          </div>
        </section>

        {/* FAQ Accordion Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={styles.faqContainer}>
              {FAQS.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div 
                    key={idx} 
                    className={`${styles.faqCard} ${isOpen ? styles.cardActive : ""}`}
                  >
                    <button 
                      onClick={() => toggleFaq(idx)} 
                      className={styles.questionBtn}
                      aria-expanded={isOpen}
                    >
                      <span className={styles.questionText}>{faq.question}</span>
                      <span className={`${styles.arrow} ${isOpen ? styles.arrowRotated : ""}`}>
                        ▼
                      </span>
                    </button>
                    
                    <div 
                      className={`${styles.answerWrapper} ${isOpen ? styles.answerOpen : ""}`}
                    >
                      <p className={styles.answerText}>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Still Have Questions CTA */}
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaTitle}>Masih memiliki pertanyaan lain?</h3>
              <p className={styles.ctaText}>
                Hubungi tim CS kami yang ramah. Kami siap membantu mempersiapkan hari istimewa Anda dengan sepenuh hati.
              </p>
              <a 
                href="https://api.whatsapp.com/send?phone=628123456789&text=Halo%20Undangly,%20saya%20memiliki%20pertanyaan%20mengenai%20undangan%20digital."
                className={styles.ctaBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Hubungi Kami
              </a>
            </div>
          </div>
        </section>
      </main>

      <MarketingFooter />
    </div>
  );
}
