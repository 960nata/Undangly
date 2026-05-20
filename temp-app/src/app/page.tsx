"use client";

import { useEffect, useState, startTransition, Suspense } from "react";
import Cover from "./components/Cover";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Event from "./components/Event";
import Rsvp from "./components/Rsvp";
import Gift from "./components/Gift";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import styles from "./page.module.css";

function InvitationContent() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  // Scroll Reveal Animation Hook
  useEffect(() => {
    if (!isOpen) return;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    // Give a short timeout for the DOM to render after Cover slides up
    const timeout = setTimeout(() => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [isOpen]);

  return (
    <div className={styles.mainContainer}>
      {/* Cover Screen */}
      <Cover onOpen={handleOpen} />

      {/* Main Content (Loaded/Visible only after Cover is opened) */}
      {isOpen && (
        <main className={styles.contentWrapper}>
          <Hero />
          <Couple />
          <Event />
          <Rsvp />
          <Gift />
          <Footer />
        </main>
      )}

      {/* Background Music Player */}
      <MusicPlayer isPlayingActive={isOpen} />
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={
      <div style={{
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        background: "#0d0d0d", 
        color: "#c5a059",
        fontFamily: "var(--font-serif)",
        fontSize: "1.5rem"
      }}>
        Loading Invitation...
      </div>
    }>
      <InvitationContent />
    </Suspense>
  );
}
