"use client"
import Image from 'next/image'
import React from 'react'
import { CustomButton } from './CustomButton'

const Hero = () => {
  const handleScroll  =()=>{

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
          Book or Rent a car
        </h1>
        <p className='hero__subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, accusantium ducimus veritatis nulla quam recusandae dicta adipisci inventore nam assumenda! Animi dolores recusandae quisquam tempore. Odio blanditiis tempore corporis culpa.</p>
        <CustomButton 
        title="Explore"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png" alt="hero" fill className='object-contain'/>
          </div>
          <div className='hero__image-overlay'/>
        
      </div>
      </div>
  )
}

export default Hero