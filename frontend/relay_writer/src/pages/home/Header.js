import React from 'react';
import styles from './Header.module.css';


export default function Header() {
  return (
    <header>
      <button className={styles.dropMenu}>메뉴</button>
      <section className={styles.logo}>
        <h1>Relay Writer</h1>
      </section>

      <button className={styles.searchButton}>검색</button>

    </header>
  )
}
