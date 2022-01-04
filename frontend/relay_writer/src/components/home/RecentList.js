import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecentList.module.css';
import thumbnail from './logo_image.jpg';


export default function RecentList() {
  const post_list = [];
  for (let i = 0; i < 10; i++) {
    post_list.push({
      title: '라이언 이야기',
      genre: '데일리',
      views: 0,
      recommends: 0,
      hash_tags: ['#일상', '#데일리', '#학교', '#감성', '#진지']
    });
  }

  return (
    <div>
      {/* 최근 글 목록 */}
      <h2 className={styles.title_recent_list}>최근 글 목록</h2>
      <article className={styles.recent_list}>
        {post_list.map((post, index) => (
          <section className={styles.recent_list_content}>
            <section className={styles.thumbnail}>
              <img src={thumbnail} alt='Thumbnail' />
            </section>
            <section className={styles.impo}>
              <section className={ styles.impo_top }>
                <Link className={styles.impo_title} to="/postDetail/1">{post.title}</Link>
                <span className={styles.impo_genre}>[{post.genre}]</span>
              </section>
              <section className={ styles.impo_bottom }>
                <span className={styles.impo_views}>조회수: {post.views}</span>
                <span className={styles.impo_recommends}>추천수: {post.recommends}</span>
              </section>

              <section className={styles.hash_tags}>
                {post.hash_tags.map((tag, index) => (
                  <span className={styles.hash_tag}>{tag}</span>
                ))}
              </section>
            </section>

            <section className={styles.more_button}>
              <button>More</button>
            </section>
          </section>
        ))}
      </article>
    </div>
  )
}
