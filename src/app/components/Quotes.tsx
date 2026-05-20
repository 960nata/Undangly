"use client";

import styles from "./Quotes.module.css";

export default function Quotes() {
  return (
    <section className={`${styles.quotes} reveal`}>
      <div className={styles.container}>
        <div className={styles.floralTop} />
        
        <div className={styles.content}>
          <div className={styles.arabic}>
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </div>
          
          <h3 className={styles.translationTitle}>QS. Ar-Rum : 21</h3>
          
          <p className={styles.translation}>
            &ldquo;Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir.&rdquo;
          </p>
        </div>

        <div className={styles.floralBottom} />
      </div>
    </section>
  );
}
