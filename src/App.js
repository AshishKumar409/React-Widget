import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'Bleach',
    content:
      '15 year old boy who can see ghosts, becomes a soul reaper so he can fight hollows',
  },
  {
    title: 'JoJo Bizzare Adventures',
    content: 'A bizzare adventure for Joestar bloodline ',
  },
  {
    title: 'one punch man',
    content: 'Solos your favourite verse',
  },
];

export default function App() {
  return (
    <div className="App">
      <br />
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
  );
}
