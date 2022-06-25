import React from 'react';
import Header from '../components/Header';
import CurrentWall from '../components/CurrentWall';
import WallBtns from '../components/WallBtns';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mt-[4.5rem] md:mt-20">
        <CurrentWall />
        <WallBtns />
      </main>
    </>
  );
}
