
import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

interface Hero {
  id: number;
  name: string;
  url: string;
  [key: string]: any; // Allow for any additional properties
}


const Home = async () => {
  const res = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const data: Hero[] = await res.json();
  const firstTenHeroes = data.slice(0,735);


  return (
    <div className="bg-slate-950">
      <Navbar />
      <div className='my-0 h-0.5 bg-slate-950'>
        <hr className="w-3/5 h-0.5 mx-auto my-0 bg-slate-400 border-0 rounded dark:bg-slate-500"></hr>
      </div>
      <div className='flex justify-center p-4 my-2'>
        <Button text='Next Page'></Button>
      </div>
      
      <div className="grid grid-cols-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {firstTenHeroes.map((curElement) => (
          <Card url={curElement.images.md} key={curElement.id} id={curElement.id} name={curElement.name} />
        ))}
      </div>
    </div>
  );
}

export default Home;
