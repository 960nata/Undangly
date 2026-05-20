"use client";

import styles from "./Story.module.css";

interface StoryStep {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const STORY_STEPS: StoryStep[] = [
  {
    id: 1,
    date: "Agustus 2023",
    title: "Pertemuan Pertama",
    subtitle: "Awal Mula Cerita Kita",
    description: "Semua dimulai dari ketidaksengajaan di sebuah kedai kopi hangat di sudut kota Bandung. Pertemuan sederhana yang menuntun pada obrolan berjam-jam tanpa henti dan kecocokan yang tidak terduga.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.5 12h-13m13 0a2.5 2.5 0 11-5 0m5 0v3.5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 013.5 15.5V12m15 0a2.5 2.5 0 00-2.5-2.5H5A2.5 2.5 0 002.5 12m16 0V9a2.5 2.5 0 00-2.5-2.5h-1" />
      </svg>
    ),
  },
  {
    id: 2,
    date: "Desember 2024",
    title: "Menjalin Kasih",
    subtitle: "Dua Hati Satu Tujuan",
    description: "Setelah melewati bulan-bulan penuh tawa, berbagi mimpi, dan saling memahami, kami memutuskan untuk mengikat rasa dalam sebuah komitmen tulus. Berjanji untuk berjalan beriringan melangkah maju.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    date: "Oktober 2026",
    title: "Momen Lamaran",
    subtitle: "Satu Langkah Lebih Dekat",
    description: "Di hadapan kedua keluarga besar tercinta, Arnold menyatakan niat sucinya untuk meminang Kila sebagai pendamping hidupnya. Cincin yang tersemat menjadi simbol janji suci menuju pelaminan.",
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function Story() {
  return (
    <section className={`${styles.storySection} reveal`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.category}>OUR LOVE JOURNEY</span>
          <h2 className={styles.title}>Perjalanan Cinta</h2>
          <div className="floral-divider">
            <span style={{ fontSize: "1.2rem", color: "var(--accent)" }}>✿</span>
          </div>
          <p className={styles.subtitle}>
            Bagaimana takdir mempertemukan kami, menumbuhkan kasih, dan mempersiapkan kami menuju lembaran hidup yang baru.
          </p>
        </div>

        {/* Timeline */}
        <div className={styles.timeline}>
          {STORY_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className={`${styles.timelineItem} ${
                idx % 2 === 0 ? styles.left : styles.right
              }`}
            >
              {/* Timeline Dot */}
              <div className={styles.dot}>
                <div className={styles.iconWrapper}>{step.icon}</div>
              </div>

              {/* Timeline Card */}
              <div className={styles.card}>
                <span className={styles.dateBadge}>{step.date}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <h4 className={styles.cardSubtitle}>{step.subtitle}</h4>
                <p className={styles.description}>{step.description}</p>
                <div className={styles.cardDecoration} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
