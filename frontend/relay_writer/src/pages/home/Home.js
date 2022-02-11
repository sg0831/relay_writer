import React from 'react';
import Header from './Header';
import TodayTop10 from './TodayTop10';


export default function Home( props ) {
  return (
    <div>
      <Header />
      <main className='home' role='tabpanel'>

        <TodayTop10 count={ props.count } left_list={ props.left_list } right_list={ props.right_list } />

      </main>
    </div>
  );
}       
