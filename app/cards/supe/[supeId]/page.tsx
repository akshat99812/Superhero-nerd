
import { Card } from '@/components/Card';
import { Navbar } from '@/components/Navbar';
import { SupeCard } from '@/components/SupeCard';
import { useParams } from 'next/navigation';
import React from 'react';

interface IParams{
  supeId:string;
}

const HeroDetail=async ({params}:{params:IParams}) => {

  const res = await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json');
  const data: any = await res.json();
  const supeID = Number(params.supeId);
  const foundHero = data.find((hero: any) => hero.id === supeID);


  return (
    <div className='bg-slate-950'>
      <Navbar />
      <div className='my-0 h-0.5 bg-slate-950'>
        <hr className="w-3/5 h-0.5 mx-auto my-0 bg-slate-400 border-0 rounded dark:bg-slate-500"></hr>
      </div>
    
      
      <div className='flex justify-center mt-20'>
        <SupeCard id={foundHero.id} name={foundHero.name} url={foundHero.images.lg}></SupeCard>
      </div>
      <div className="mt-5 mx-5">
  {foundHero && (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 text-slate-100'>
        {/* Power-Stats section */}
        <div className='mt-20 mb-40 mr-auto ml-auto border-4 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-500 p-8'>
          <div className='p-2'>
            Intelligence: {foundHero.powerstats.intelligence}
          </div>
          <div className='p-2'>
            Strength: {foundHero.powerstats.strength}
          </div>
          <div className='p-2'>
            Speed: {foundHero.powerstats.speed}
          </div>
          <div className='p-2'>
            Durability: {foundHero.powerstats.durability}
          </div>
          <div className='p-2'>
            Power: {foundHero.powerstats.power}
          </div>
        </div>
        <div className='mt-20 mb-40 mr-auto ml-auto border-4 hover:bg-slate-100 hover:text-slate-950 hover:border-slate-500 p-8'>
          <div className='p-2'>
            Race: {foundHero.appearance.race}
          </div>
          <div className='p-2'>
            Gender: {foundHero.appearance.gender}
          </div>
          <div className='p-2'>
            Height: {foundHero.appearance.height[0]}
          </div>
          <div className='p-2'>
            Weight: {foundHero.appearance.weight[0]}
          </div>
          <div className='p-2'>
            Hair Color: {foundHero.appearance.hairColor}
          </div>
        </div>
      </div>
    </>
  )}
</div>

    </div>
  );
}

export default HeroDetail;
