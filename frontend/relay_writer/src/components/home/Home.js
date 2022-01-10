import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import TodayTop10 from './TodayTop10';
import RecentList from './RecentList';


export default function Home() {
  const url = "/api/post";

  const [ load, setLoad ] = useState(false);
  // today_top10 
  const [left_list, setLeft_list] = useState([]);
  const [right_list, setRight_list] = useState([]);

  // recent_list
  const [post_list, setPost_list] = useState([]);

  // today_top10 setup function
  const divide_post= () => {
    let tmp_left = [];
    let tmp_right = [];
    // 1위부터 5위까지는 왼쪽
    for (let i = 0; i < 5; i++) {
      tmp_left.push(post_list[i]);
    }
    setLeft_list(tmp_left);

    // 5위부터 10위까지는 오른쪽
    for (let i = 5; i < 10; i++) {
      tmp_right.push(post_list[i]);
    }
    setRight_list(tmp_right);
  }

  // test
  const print_state = (data) => {
    alert(`count test: ${count}`);
    // alert(`print result data: ${data}  load: ${load}`);
    // alert(`print post_list: ${post_list}  load: ${load}`);
  }

  // get 요청
  const getAPI = async () => {
    let result = await axios.get(url);
    setPost_list( result.data );
    setLoad( true );
    divide_post();
    print_state( result.data );
  }

  // axios를 이용한 api 호출
  const [count, setCount] = useState(0);
  useEffect( () => {
    getAPI();
    setCount( count+1 );
  }, []);

  return (
    <div>
      <Header />
      <main className='home' role='tabpanel'>
        <span>{ count }</span>
        <TodayTop10 left_list={ left_list } right_list={ right_list } />
        <RecentList />
      </main>
    </div>
  )
}       
