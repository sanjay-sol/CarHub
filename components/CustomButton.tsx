"use client";
import React, { MouseEventHandler } from 'react'
import Image from 'next/image';
import { CustomButtonProps } from '@/types';
//   interface CustomButtonProps{
//   title:string;
//   containerStyles?:string;
//   handleClick?:MouseEventHandler<HTMLButtonElement>;
//   btnType?:"button" | "submit";
// }



export const CustomButton = ({title , containerStyles , handleClick , btnType , textStyles ,rightIcon } : CustomButtonProps ) => {
  return (
    <button 
    disabled={false}
    type={btnType || "button"}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
   <span className={`flex-1 ${textStyles}` }>{title}</span>
   <div className='relative w-6 h-6'>
    <Image  src={rightIcon}
    alt="right icon" fill
    className='object-contain'
    />

   </div>
    </button>
  )
}
