// base_relay_writer
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import PostDetail from './components/postDetail/PostDetail';
import Page from './components/page/Page';
import Writing from './components/writing/Writing';


export default function App() {
  const url = "/api/post";
  const [ post_list, setPost_list ] = useState(null);
  const [left_list, setLeft_list] = useState(null);
  const [right_list, setRight_list] = useState(null);

  const divide_post = () => {
    let tmp_left = [];
    let tmp_right = [];
    // 1위부터 5위까지는 왼쪽
    for (let i = 0; i < 5; i++) {
      tmp_left.push(props.post_list[i]);
    }

    // 5위부터 10위까지는 오른쪽
    for (let i = 5; i < 10; i++) {
      tmp_right.push(props.post_list[i]);
    }
    setLeft_list([...tmp_left]);
    setRight_list([...tmp_right]);
  }

  useEffect( () => {
    // API 호출 : today's top10
    const get_today_top10 = async () => {
      let result = await axios.get(url);
      setPost_list( [...result.data] );
    }
    get_today_top10();
  divide_post();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home post_list={ post_list } />} />
          <Route path="/postDetail/1" element={<PostDetail />} />
          <Route path="/postDetail/1/page/1" element={<Page />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
