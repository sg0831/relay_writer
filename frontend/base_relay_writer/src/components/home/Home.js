import React, { useState, useEffect } from 'react';
import Header from './Header';
import TodayTop10 from './TodayTop10';
import RecentList from './RecentList';


export default function Home(props) {
  // const [recent_post_list, setRecent_post_list ] = useState(null);

  // const test = () => {
  //   if (post_list) {
  //     for (let key in post_list[0]) {
  //       // alert(`key : ${key} / value: ${post_list[0][key]} `);
  //     }
  //   }
  //   else alert('Error!');
  // }

  return (
    <div>
      <Header />
      <main className='home' role='tabpanel'>
        { props.post_list && <h1>{ `post_list test: ${ props.post_list }` }</h1>}
        {/* <TodayTop10 left_list={left_list} right_list={right_list} /> */}
        {/* <RecentList recent_post_list={ recent_post_list } /> */}
      </main>
    </div>
  )
}       
