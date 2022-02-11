import React, { useState, useEffect } from 'react';
import axios   from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

function App() {
  const url = "/api/post";
  const [ count, setCount ] = useState( 0 );

  // 전체 포스트
  const [ post_list, setPost_list ] = useState(null);
  // API 로딩 완료 여부
  const [ loading, setLoading ] = useState( false );
  // 홈화면 Today's TOP10의 왼쪽에 표시할 포스트
  const [left_list, setLeft_list] = useState(null);
  // 홈화면 Today's TOP10의 오른쪽에 표시할 포스트
  const [right_list, setRight_list] = useState(null);

  // 홈화면 Today's TOP10 왼쪽 / 오른쪽을 나눠줄 함수
  const divide_post = () => {
    let tmp_left = [];
    let tmp_right = [];
    if (loading) {
      // 1위부터 5위까지는 왼쪽
      for (let i = 0; i < 5; i++) {
        tmp_left.push(post_list[i]);
      }

      // 5위부터 10위까지는 오른쪽
      for (let i = 5; i < 10; i++) {
        tmp_right.push(post_list[i]);
      }
      setLeft_list([...tmp_left]);
      setRight_list([...tmp_right]);
      setCount( count + 1 );
    }
  }


  useEffect( () => {
    // API 호출 : today's top10
    const get_today_top10 = async () => {
      // 로딩 중이면 true
      setLoading( true );

      // API를 요청할 때마다 모든 글 목록 초기화하고 다시 불러옴
      setPost_list( null );
      setLeft_list( null );
      setRight_list( null );
      let result = await axios.get(url);

      setPost_list( [...result.data] );
      divide_post();
    }
    get_today_top10();
    setLoading( false );
  }, [] );


  return (
    <BrowserRouter>
      <div className="App">
        <h1>{ `post_list : ${ post_list }` }</h1>
        <Home count={ count } left_list={ left_list } right_list={ right_list } />
      </div>
    </BrowserRouter>
  );
}

export default App;
