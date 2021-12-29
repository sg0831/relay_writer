// relay writer
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import PostDetail from './components/postDetail/PostDetail';
import Page from './components/page/Page';
import Writing from './components/writing/Writing';


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postDetail/1" element={<PostDetail />} />
          <Route path="/postDetail/1/page/1" element={<Page />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
