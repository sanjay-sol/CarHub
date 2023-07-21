"use client"
import { Fragment } from 'react';
import Image from 'next/image';
import React from 'react'
import { CarProps } from '@/types';

import {Dialog , Transition} from "@headlessui/react";
import { getHash } from 'next/dist/server/image-optimizer';

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
    <Transition.Child  
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom='opacity-0'
    enterTo='opacity-100'
    leave="ease-in duration-200"
    leaveFrom='opcaity-100'
    leaveTo='opacity-0'
    >
        <div className='fixed inset-0 bg-black bg-opacity-25' >

        </div>
    </Transition.Child>
    <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
        <Transition.Child  
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom='opacity-0 scale-95'
    enterTo='opacity-100 scale-100'
    leave="ease-in duration-200"
    leaveFrom='opcaity-100 scale-100'
    leaveTo='opacity-0 scale-95'
    >

        <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white text-left shadow-xsl transition-all flex flex-col gap-5">
            <button type='button' className='absolute top-2 ' onClick={closeModal}>
                <Image src="/close.svg" alt="close " width={20} height={20} className='object-contain' />

            </button>
        </Dialog.Panel>
    </Transition.Child>
        </div>

    </div>

</Dialog>
</Transition>
</>
  )
}

export default CarDetails