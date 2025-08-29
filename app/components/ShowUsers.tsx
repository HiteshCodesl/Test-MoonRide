"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import axios from "axios"
import { useEffect, useState } from "react"

interface Prop {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void
}

  
export function ShowUsers({isOpen, setIsOpen}: Prop) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
    const response = async() => {
       const users  = await axios.get('/api/users');

       if(users){
        console.log(users.data);
           setUsers(users.data);
       }
    }   
    response();
    }, []);

  return (
    <div>
        <Button onClick={() => setIsOpen(true)}>Show Users</Button>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Users List</AlertDialogTitle>
      <ul>
        {users.map((user, index)=>(
            <div key={index} className="flex gap-4">
                <ol className="name font-bold">{user.name}</ol>
                <ol className=" font-bold">{user.email}</ol>
                <ol className=" font-bold">{user.phone}</ol>
                </div>
        ))}
      </ul>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel onClick={() => setIsOpen(false)}>Cancel</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    </div>
  )
}

