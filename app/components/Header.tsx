"use client"

import { ModeToggle } from '@/components/ui/modeToggle'
import React, { use, useState } from 'react'
import { User } from './User'
import { Button } from '@/components/ui/button'
import { ShowUsers } from './ShowUsers'

export function Header() {
 const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' flex align-center mt-10 justify-between w-full px-6 py-4 max-w-screen-md '>
     
    <div>
       <div className="text-foreground text-2xl font-bold font-poppins ">
        Dashboard
       </div>
    </div>  

    <div className="flex gap-5 align-center items-center">

         <User />
      
        <ShowUsers isOpen={isOpen} setIsOpen={setIsOpen} />
          
        <ModeToggle />
     </div>
    </div>
  )
}

