"use client"
import Image from 'next/image'
import React from 'react'

const Hero = ({setModal}) => {
  
   
    const openModal = () => {
        setModal(true);
      };
    

    return (
        <div className='bg-indigo-600 flex md:flex-nowrap flex-wrap justify-between items-center p-4  '>
            <div>
                <p className=' text-5xl font-semibold text-white'>Welcome to WeatherWise,</p>
                <p className='text-neutral-50 text-xl my-4'> your ultimate destination for  weather updates, detailed forecasts, and expert insights.</p>
                <button className='p-4 rounded-3xl  bg-yellow-400' onClick={openModal}
                >Check Weather</button>

            </div>
            <div>
                <Image
                    src="/assets/hero.png"
                    width={800}
                    height={400}
                    className='h-screen'
                    alt="Picture of the weather"
                ></Image>
            </div>
        </div>
    )
}

export default Hero