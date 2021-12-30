import React from 'react';
import styles from './PostImpo.module.css';
import thumbnail from './logo_image.jpg';

export default function PostImpo() {
  return (
    <div>
      <section className={styles.post_impo}>
        <section className={styles.thumbnail}>
          <img src={thumbnail} alt='Thumbnail' />
        </section>
        <article className={styles.impo}>
          <section className={ styles.impo_top }>
            <span className={ styles.title }>라이언 이야기</span>
            <span className={ styles.genre }>[데일리]</span>
          </section>
          <section className={styles.impo_score}>
            <span className={ `${styles.views} ${styles.item}` }>조회수: </span>
            <span className={ `${styles.recommends} ${styles.item}` }>추천수: </span>
            <span className={ `${styles.stars} ${styles.item}` }>선호수 : </span>
          </section>
          <button className={ styles.star_button }>선호작품 등록</button>
                  </article>
      </section>
    </div>
  )
}
