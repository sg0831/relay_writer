import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from './TodayTop10.module.css';
import thumbnail from './logo_image.jpg';


export default function TodayTop10() {
  const url = "http://localhost:8000/api/post/";
  let [post_list, setPost_list ] = useState();
  let left_list = [];
  let right_list = [];

  useEffect( (post_list) => {
    // get 요청
    async function get() {
      let result = await axios.get(url);
      setPost_list( result );
      console.log( post_list );
      // get 응답이 완료된 후 실행
    }
    
    get();
  }, [] );

  return (
    <div>
      <h2 className={styles.title}>Today's T.O.P 10</h2>
    
    </div >
  )
}
