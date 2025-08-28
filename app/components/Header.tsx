import { Input } from '@/components/ui/input'
import { ModeToggle } from '@/components/ui/modeToggle'
import React from 'react'

export function Header() {

  return (
    <div className=' flex align-center mt-10 justify-between w-full px-6 py-4 max-w-screen-md '>
     
    <div>
       <div className="text-foreground text-2xl font-bold font-poppins ">
        Dashboard
       </div>
    </div>  

    <div className="flex gap-5 align-center items-center">
      
         <Input placeholder='Search'  />
          
        <ModeToggle />
     </div>
    </div>
  )
}

