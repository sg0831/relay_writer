import React from 'react';
import Header from './Header';
import TodayTop10 from './TodayTop10';
import RecentList from './RecentList';


export default function Home() {
  return (
    <div>
      <Header />
      <main className='home' role='tabpanel'>
        <TodayTop10 />
        <RecentList />
      </main>
    </div>
  )
}
