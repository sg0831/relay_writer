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
          <span className={styles.impo_title} to="/postDetail/1">라이언 이야기</span>
          <span className={styles.impo_genre}>[데일리]</span>
          <section className={styles.impo_score}>
            <span className={styles.views}>조회수: </span>
            <span className={styles.recommends}>추천수: </span>
          </section>
          <section className={styles.star}>
            <span>선호수 : </span>
            <button>선호작품 등록</button>
          </section>
        </article>
      </section>
    </div>
  )
}
