"use client"
import { Fragment } from 'react';
import Image from 'next/image';
import React from 'react'
import { CarProps } from '@/types';

import {Dialog , Transition} from "@headlessui/react";

interface CarDetailsProps {
    isOpen:Boolean;
    closeModal:()=> void;
    car:CarProps
}
const CarDetails = ({isOpen , closeModal , car}:CarDetailsProps) => {
  return (
<>
<Transition appear show={isOpen} as={Fragment} >
<Dialog as="div" className="relative z-10 " onClose={closeModal} >
    <Transition.Child>
        <div className='fixed inset-0 bg-black' >

        </div>
    </Transition.Child>

</Dialog>
</Transition>
</>
  )
}

export default CarDetails