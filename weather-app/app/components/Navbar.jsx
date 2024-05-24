import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const navbar = () => {
  return (
    <div className=" flex flex-wrap justify-between gap-4 items-center pr-32  py-2 pl-2 bg-indigo-600 text-white">
      <div className='flex flex-wrap gap-4 items-center'>
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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      </div>
  )
}

export default navbar