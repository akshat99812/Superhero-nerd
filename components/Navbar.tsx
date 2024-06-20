'use client'
import { useRouter } from 'next/navigation'
import Icon from "./ui/icons/superman"
import { GithubIcon } from './ui/icons/github'
import { InstaIcon } from './ui/icons/instaIcon'
import LinkedInIcon from './ui/icons/linkedInIcon'


export const Navbar = ()=>{
    const router = useRouter()

const handleClick=()=>{
        router.push('/cards')
    }

    return <div className="bg-slate-950 flex justify-between">
        
        <div>
        <div className="flex justify-between">
            <div className="flex ">
               <div>
                <button className="ml-4 mr-4 p-2" onClick={handleClick}>
                    <Icon></Icon>
                </button>
                    
               </div>
               <div>
                <div className="pt-8 font-black text-xl text-white">
                    <button onClick={handleClick}>Supe App</button>
               </div>
               <div className=' text-white'>
               <h5>Info on more than 1000 Super Heros</h5>
               </div>
               </div>
               
            </div>
            <div>

            </div>
        </div>    
        </div>
        <div className='flex justify-between ml-4 mr-4 p-2 my-auto p-2'>
            <div className='mr-4'>
                <button onClick={()=>{ router.push('https://github.com/akshat99812') }}>
                    <GithubIcon></GithubIcon>
                </button>
                
            </div>
            <div className=''>
                <button onClick={()=>{ router.push('https://www.linkedin.com/in/akshat-patel-50211b28a/') }}>
                    <InstaIcon></InstaIcon>
                </button>
                
            </div>
            <div className='ml-4'>
                <button onClick={()=>{ router.push('https://www.instagram.com/akshat_patel9977/') }}>
                    <LinkedInIcon></LinkedInIcon>
                </button>
            </div>
        </div>
    </div>
}