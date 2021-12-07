import React from 'react';
import { useNavigate } from 'react-router';
import styles from './PageHeader.module.css';

export default function PageHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <header className={ styles.page_header }>
        <button className={styles.back_button} onClick={ () => navigate(-1) }>뒤로 가기</button>
        <h1>1. 테스트 1화</h1>
        <button className={ styles.menu_button }>메뉴</button>
      </header>
    </div>
  )
}
