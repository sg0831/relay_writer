import React from 'react';
import styles from './PageNav.module.css';

export default function PageNav() {
  return (
    <div>
      <nav className={StyleSheet.page_nav}>
        <button className={styles.prev_button}>이전 페이지</button>
        <span className={styles.page_num}>1 / 1</span>
        <button className={styles.next_button}>다음 페이지</button>
      </nav>
    </div>
  )
}
