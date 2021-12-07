import React from 'react';
import styles from './Writing.module.css';

export default function Writing() {
  return (
    <div>
      <h1 className={ styles.heading }>새 페이지 쓰기</h1>

      <section className={ styles.input_title }>
        <label>제목 : </label>
        <input type="text" />
      </section>

      <section className={ styles.input_content }>
        <label>내용 : </label>
        <textarea />
      </section>

      <button className={ styles.submit_button }>작성 완료</button>
    </div>
  )
}
