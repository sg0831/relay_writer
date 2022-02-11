import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecentList.module.css';


export default function RecentList( props ) {
  return (
    <div>
      <h1 className={styles.title_recent_list}>최근 목록</h1>

      <div className={styles.recent_list}>
        { props.recent_post_list.map( (post) => (
          <div className={styles.recent_list_content}>
          <div className={styles.thumbnail}>
            <img src={post.thumbnail} alt="썸네일" />
          </div>

          <div className={styles.impo}>
            <h2 className={styles.impo_title}>{post.title}</h2>
            <span className={styles.impo_genre}>{post.genre}</span>
            <span className={styles.impo_views}>{post.views}</span>
            <span className={styles.impo_recommends}>{post.recommends}</span>
          </div>

          <div className={styles.hash_tags}>
            {post.hash_tags.map((tag) => (
              <Link className={styles.hash_tag}>{tag}</Link>
            ))}
          </div>

          <button className={styles.more_button}>More</button>
        </div> ) ) }
      </div>
    </div>
  )
}
