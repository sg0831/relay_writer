import React from 'react';
import { useNavigate } from 'react-router';
import styles from './PostHeader.module.css';


export default function PostHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <header className={styles.post_header}>
        <button className={styles.back_button} onClick={() => navigate(-1)}>뒤로 가기</button>
        <h1 className={styles.title}>소설 제목</h1>
        <button className={styles.writing_button} onClick={() => navigate('/writing')}>글쓰기</button>
              </header>
    </div>
  )
}
