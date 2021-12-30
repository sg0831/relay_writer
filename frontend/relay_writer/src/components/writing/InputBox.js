import React from 'react';
import styles from './InputBox';

export default function InputBox() {
  return (
    <div>
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
