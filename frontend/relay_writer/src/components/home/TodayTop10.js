import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TodayTop10.module.css';
import thumbnail from './logo_image.jpg';


export default function TodayTop10() {
  const post_list = [];
  for (let i = 0; i < 5; i++) {
    post_list.push({
      title: '라이언 이야기',
      genre: '데일리',
      views: 0,
      recommends: 0
    });
  }
  return (
    <div>
      <h2 className={styles.title}>Today's T.O.P 10</h2>
      <article className={styles.top10}>
        {/* 왼쪽 */}
        <section className={styles.top_list} >
          {post_list.map((post, index) => (
            <section className={styles.top_list_content}>
              <section className={styles.thumbnail}>
                <img src={thumbnail} alt='썸네일' />
              </section>
              <section className={styles.impo}>
                <Link className={styles.impo_title} to="/postDetail/1">{post.title}</Link>
                <span className={styles.impo_genre}>[{post.genre}]</span>
                <span className={styles.impo_views}>조회수: {post.views}</span>
                <span className={styles.impo_recommends}>추천수: {post.recommends}</span>
              </section>
            </section>
          ))}
        </section>

        {/* 오른쪽 */}
        <section className={styles.top_list} >
          {post_list.map((post, index) => (
            <section className={styles.top_list_content}>
              <section className={styles.thumbnail}>
                <img src={thumbnail} alt='썸네일' />
              </section>
              <section className={styles.impo}>
                <Link className={styles.impo_title} to="/postDetail/1">{post.title}</Link>
                <span className={styles.impo_genre}>[{post.genre}]</span>
                <span className={styles.impo_views}>조회수: {post.views}</span>
                <span className={styles.impo_recommends}>추천수: {post.recommends}</span>
              </section>
            </section>
          ))}
        </section>
      </article >
    </div >
  )
}
