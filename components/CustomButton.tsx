"use client";
import React, { MouseEventHandler } from 'react'
import Image from 'next/image';
  interface CustomButtonProps{
  title:string;
  containerStyles?:string;
  handleClick?:MouseEventHandler<HTMLButtonElement>;
  btnType?:"button" | "submit";
}



export const CustomButton = ({title} : CustomButtonProps ) => {
  return (
    <button 
    disabled={false}
    // type={btnType || "button"}
    // className={`custom-btn ${containerStyles}`}
    // onClick={handleClick}
    >
   <span className={`flex-1`}>{title}</span>
    </button>
  )
}
