"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function AddProfileDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div 
          className="flex flex-col items-center justify-center border rounded-lg p-10 cursor-pointer hover:shadow-md"
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
          <Input placeholder="Enter Name" />
          <Input placeholder="Enter Email" type="email" />
          <Input placeholder="Enter Phone" type="tel" />
          <Button onClick={() => setOpen(false)}>Next</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
