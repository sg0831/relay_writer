import React from 'react';
import PageHeader from './PageHeader';
import PageMain from './PageMain';
import PageNav from './PageNav';

export default function Page() {
  return (
    <div>
      <PageHeader />
      <PageNav />
      <PageMain />
    </div>
  )
}
