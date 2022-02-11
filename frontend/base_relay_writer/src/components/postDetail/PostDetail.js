import React from 'react';
import PostHeader from './PostHeader';
import PostImpo from './PostImpo';
import PostDescription from './PostDescription';
import PostEpisodeList from './PostEpisodeList';


export default function PostDetail() {
  return (
    <div>
      <PostHeader />
      <PostImpo />
      <PostDescription />
      <PostEpisodeList />
    </div>
  )
}
