import React, { useState, useEffect } from 'react';
import Tabs from './Tabs';
import Job from './Job';

const url = 'https://course-api.com/react-tabs-project';

interface JobProps {
  id: string;
  order: number;
  title: string;
  dates: string;
  duties: string[];
  company: string;
}

export default function App() {
  return (
    <section className='jobs-center'>
      <Tabs />
      <Job />
    </section>
  );
}
