import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TodayTop10.module.css';


export default function TodayTop10(props) {
  return (
    <div>
      <h2 className={styles.title}>Today's T.O.P 10 </h2>

      <button onClick={ () => {
          alert(`테스트: ${props.left_list.values}`);
        } }>테스트 버튼</button>
    </div>
  )
}
