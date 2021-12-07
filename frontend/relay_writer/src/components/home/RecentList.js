import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecentList.module.css';
import thumbnail from './logo_image.jpg';


export default function RecentList() {
  return (
    <div>
      {/* 최근 글 목록 */}
      <h2 className={styles.title_recent_list}>최근 글 목록</h2>
      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>

      <article className={styles.recent_list}>
        <section className={styles.recent_list_content}>
          <section className={styles.thumbnail}>
            <img src={thumbnail} alt='Thumbnail' />
          </section>
          <section className={styles.impo}>
            <Link className={styles.impo_title} to="/postDetail/1">라이언 이야기</Link>
            <span className={styles.impo_genre}>[데일리]</span>
            <span className={styles.impo_views}>조회수: </span>
            <span className={styles.impo_recommends}>추천수: </span>
          </section>
        </section>
      </article>
    </div>
  )
}
