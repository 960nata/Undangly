"use client";

import { useState } from "react";
import styles from "./Gallery.module.css";

interface Photo {
  id: number;
  url: string;
  caption: string;
  aspect: "portrait" | "landscape" | "square";
}

const PHOTOS: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800",
    caption: "Langkah Awal Bersama",
    aspect: "portrait",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800",
    caption: "Dekapan Kehangatan",
    aspect: "landscape",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800",
    caption: "Simbol Janji Suci",
    aspect: "square",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800",
    caption: "Menatap Masa Depan",
    aspect: "portrait",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=800",
    caption: "Keindahan yang Mekar",
    aspect: "square",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=800",
    caption: "Tawa dan Ceria Kita",
    aspect: "landscape",
  },
];

export default function Gallery() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveIdx(index);
  };

  const closeLightbox = () => {
    setActiveIdx(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % PHOTOS.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + PHOTOS.length) % PHOTOS.length);
    }
  };

  return (
    <section className={`${styles.gallerySection} reveal`}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.category}>OUR SWEET MEMORIES</span>
          <h2 className={styles.title}>Galeri Kebahagiaan</h2>
          <div className="floral-divider">
            <span style={{ fontSize: "1.2rem", color: "var(--accent)" }}>✿</span>
          </div>
          <p className={styles.subtitle}>
            Setiap jepretan menyimpan cerita romantis tentang perjalanan cinta kami yang penuh tawa dan kehangatan.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className={styles.grid}>
          {PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              className={`${styles.item} ${styles[photo.aspect]}`}
              onClick={() => openLightbox(index)}
            >
              <div className={styles.imageWrapper}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <span className={styles.caption}>{photo.caption}</span>
                  <span className={styles.zoomIcon}>🔍</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close lightbox">
            &times;
          </button>
          
          <button className={`${styles.navBtn} ${styles.prevBtn}`} onClick={showPrev} aria-label="Previous image">
            &#10094;
          </button>
          
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={PHOTOS[activeIdx].url}
              alt={PHOTOS[activeIdx].caption}
              className={styles.lightboxImage}
            />
            <p className={styles.lightboxCaption}>{PHOTOS[activeIdx].caption}</p>
          </div>

          <button className={`${styles.navBtn} ${styles.nextBtn}`} onClick={showNext} aria-label="Next image">
            &#10095;
          </button>
        </div>
      )}
    </section>
  );
}
