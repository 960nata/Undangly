"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MusicPlayer.module.css";

interface MusicPlayerProps {
  isPlayingActive: boolean;
}

export default function MusicPlayer({ isPlayingActive }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio("https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (isPlayingActive && audioRef.current) {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio play blocked by browser:", err));
    }
  }, [isPlayingActive]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play failed:", err));
    }
  };

  if (!isPlayingActive) return null;

  return (
    <button onClick={togglePlay} className={styles.musicBtn} aria-label="Toggle Music">
      <div className={`${styles.disc} ${isPlaying ? styles.rotating : ""}`}>
        <i className="fas fa-compact-disc"></i>
      </div>
      <div className={styles.musicNotes}>
        {isPlaying && (
          <>
            <span className={styles.note1}>♪</span>
            <span className={styles.note2}>♫</span>
            <span className={styles.note3}>♩</span>
          </>
        )}
      </div>
    </button>
  );
}
