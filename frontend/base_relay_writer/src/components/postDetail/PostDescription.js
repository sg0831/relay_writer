import React from 'react';
import styles from './PostDescription';


export default function PostMenu() {
  return (
    <div className={ styles.description }>
      <article className={styles.text}>
        <p>이 글은 테스트를 위한 글입니다.</p>
      </article>

      <section className={styles.post_menu}>
        <button className={styles.recommend_button}>추천하기</button>
        <button className={styles.report_button}>신고하기</button>
      </section>
    </div>
  )
}
