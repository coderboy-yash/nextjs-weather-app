import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
    <div className=" flex justify-between items-center pr-32 pb-0 pt-2 pl-2 bg-indigo-600 text-white">
      <div className='flex gap-4 items-center'>
        <Image
        src="/assets/cloudy.png"
        height={100}
        width={100}
        alt='logo'
        >

        </Image>
        <span className='text-yellow-400 font-bold text-xl'>

        WeatherWise
        </span>
      </div>
      <div className="flex gap-8 items-center">
        <div>Home</div>
        <div>About</div>
        <div>Services</div>
        <div>Contact</div>
      </div>
      </div>
  )
}

export default navbar