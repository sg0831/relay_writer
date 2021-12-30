import React from 'react';
import styles from './WritingHeader.module.css';

export default function WritingHeader() {
  return (
    <div>
      <header>
        <button className={ styles.back_button }>뒤로</button>
        <h1 className={ styles.heading }>새 페이지 쓰기</h1>
        <button className={ styles.menu_button }>메뉴</button>
      </header>
    </div>
  )
}
