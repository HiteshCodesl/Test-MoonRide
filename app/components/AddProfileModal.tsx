"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import axios from "axios"
import { toast } from "sonner"

export function AddProfileDialog() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); 
  const [phone, setPhone] = useState("");

  const handleClick = async() => {
    const data = {name, email, phone}
    const newProfile = await axios.post('/api/users', data)

    if(newProfile){
      setOpen(false);   
      setName('');
      setEmail(''); 
      setPhone('');
      toast('Profile Added Successfully')
    }
  };  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div 
          className="flex flex-col items-center justify-center border rounded-lg p-10 cursor-pointer hover:shadow-md max-w-screen-md mx-auto mt-10 mb-10 shadow-2xl"
        >
          <span className="text-4xl">+</span>
          <span className="mt-2">Add Profile</span>
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Profile</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-4">
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />

          <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />

          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" />

          <Button onClick={() => 
           { setOpen(false),
            handleClick()}
            }>Save Your Profile</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
